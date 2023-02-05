<template>
  <div v-if="gameTurn > 0">
  <h2>残り{{13-gameTurn}}ターン</h2>
  </div>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-body">
        <div id="top-list">
          <div class="container">
            手札のカードを引き直しますか？
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-secondary transitionBtn" @click="StartGame">
          <p>そのまま</p>
        </button>
        <button type="button" class="btn btn-secondary transitionBtn" @click="StartGame(); Mulligan();">
          <p>引き直す</p>
        </button>
      </div>
    </div>
  </div>

  <div id="overlay" v-show="turnPhase == 'gameEnd'">
    <div id="content">
      <div class="modal-body">
        <div id="top-list">
          <div><h2>結果</h2></div>
          <div>
            <h1>{{store.state.myUserObj.userName}}:{{myCount}} VS {{store.state.enemyUserObj.userName}}:{{enemyCount}}</h1>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-secondary transitionBtn" @click="store.commit('eraseBufRoom')">
          <p>退室する</p>
        </button>
      </div>
    </div>
  </div>
  
  <div class="controller" v-if="gameTurn > -1">
    <GameHand class="hand" ref="useHand" :deck="hand" :canPlay ="canPlay" @pick="PickUpCard"/>
    <button v-if="turnPhase == 'play'" @click="changePlayerMode('pass')">パス</button>
    <button v-if="turnPhase == 'play'" @click="changePlayerMode('sp')">SP発動{{playerMode == 'sp'?'ON':'OFF'}}</button>
    <button v-if="turnPhase == 'play'" @click="rotateCard">回転</button>
    <GameDeck :deck="myDeck" :usedCard="usedCard"/>
  </div>

  <div class="container">
    <div class="stage">
      <div>
        <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
        <BlockTable class="virtualStage" :class="{ gray: !canPut, tempFix: !showMyCard}"
        :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
        :selectCard="utils.splitArray(selectCard.map, 8)"
        @pick="putCard"/>
        <div class="panel" v-if="playerMode == 'pass'">
          <h1 style="color: white">どのカードを捨てる？</h1>
        </div>
        <div class="panel" v-if="turnPhase == 'waitting'">
          <h1 style="color: white">相手の行動を待っています...</h1>
        </div>
      </div>
    </div>
    <div class="playerData">
      <CardFlip class="enemyCard" :isFaceUp="showEnemyCard">
        <template #face>
          <CardItem :id="enemySelectCard.id" :name="enemySelectCard.name" 
          :count="enemySelectCard.count" :cost="enemySelectCard.cost" :map="enemySelectCard.map"
          :isPass="store.state.enemyActData.type == 'pass' ? true:false"
          :isSp="store.state.enemyActData.type == 'sp' ? true:false"/>
        </template>
        <template #back>
          <CardSleeve/>
        </template>
      </CardFlip>
      <div class = "data" :class="(store.state.enemyUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">
        <p>{{store.state.enemyUserObj.userName}} : sp{{enemySpPoint}}</p>
        <h1>{{enemyCount}}</h1>
        <h3 v-if="enemyTempCount != 0" class="enemyPoint">+{{enemyTempCount}}</h3>
      </div>
      <div class = "data" :class="(store.state.myUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">
        <h1>{{myCount}}</h1>
        <h3 v-if="myTempCount != 0" class="myPoint">+{{myTempCount}}</h3>
        <p>{{store.state.myUserObj.userName}} : sp{{mySpPoint}}</p>
      </div>
      <CardFlip :isFaceUp="showMyCard">
        <template #face>
          <CardItem @click="setCard" :id="selectCard.id" :name="selectCard.name" 
          :count="selectCard.count" :cost="selectCard.cost" :map="selectCard.map"
          :isPass="playerMode == 'pass' ? true:false"
          :isSp="playerMode == 'sp' ? true:false"/>
        </template>
        <template #back>
          <CardSleeve/>
        </template>
      </CardFlip>
    </div>
  </div>
</template>

<script setup scoped>
import { ref,onMounted,watch } from "vue";
import store from "@/store";
import utils from "@/utils";
import BlockTable from "@/components/parts/BlockTable.vue";
import GameDeck from "@/components/GameDeck.vue";
import GameHand from "@/components/GameHand.vue";
import CardItem from "@/components/parts/CardItem.vue";
import CardFlip from "@/components/parts/CardFlip.vue";
import CardSleeve from "@/components/parts/CardSleeve.vue";

const useHand = ref();
const myBlock = setMyBlock()
const enemyBlock = setEnemyBlock()
const showContent = ref(false);
const showEnemyCard = ref(false);
const showMyCard = ref(true);

let gameTurn = ref(0);
let stageMap = ref(store.state.stageObj.map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCardIndex = ref(0)
let selectCard = ref(store.state.ms_card[0]);
let enemySelectCard = ref(store.state.ms_card[0]);
let canPut = ref(true);
let posIndex = ref(798);
let myDeck = ref([]);
let useDeck = ref([]);
let usedCard = ref([])
let hand = ref([]);
let canPlay = ref([]);
let playerMode = ref("");
let turnPhase = ref("")

let tempStageMap = []
let mySpPoint = ref(0);
let enemySpPoint = ref(0);
let myCount = ref(1);
let enemyCount = ref(1);
let myTempCount = ref(0);
let enemyTempCount = ref(0);

let tempMySpPoint = 0;
let tempEnemySpPoint = 0;

function StartGame(){
  showContent.value = false;
  gameTurn.value++;
}

function changePlayerMode(mode){
  if(playerMode.value == mode) mode = 'normal'
  playerMode.value = mode
}

function changeTurnPhase(mode){
  turnPhase.value = mode
}

function setCard(){
  if(selectCard.value.id == 0) return
  if(playerMode.value != 'pass' && !canPut.value) return
  showMyCard.value = false
  changeTurnPhase('waitting')
  writeMyActData()
}

function writeMyActData(){
  store.state.myActData = { turn: gameTurn.value, type: playerMode.value, card: selectCard.value, virtualStage: virtualStage.value }

  store.state.roomDocRef.get().then((doc) => {
    let gameDatas = doc.get("gameDatas");
    gameDatas = {...gameDatas, [store.state.userId]: store.state.myActData }
    store.state.roomDocRef.update({ gameDatas });
  });
}

watch(playerMode,(cr)=>{
  canPlay.value = [];
  switch (cr) {
    case 'normal':
      selectCard.value = store.state.ms_card[0]
      checkPlayHand(hand.value)
      putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
      break;
    case 'sp':
      selectCard.value = store.state.ms_card[0]
      checkPlayHand(hand.value)
      putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
      break;
    case 'pass':
      canPlay.value = hand.value.map(value => value)
      putCard(utils.splitArray(store.state.ms_card[0].map,8),posIndex.value,-3,-3)
      break;
    default:
      break;
  }
})

watch(()=>store.state.gameDatas,(cr)=>{
  store.state.enemyActData = cr[store.state.enemyUserObj.userId]
  if( store.state.myActData.turn==store.state.enemyActData.turn ){
    enemySelectCard.value = store.state.enemyActData.card
    updataTurn()
  }
})
function updataTurn(){
  showMyCard.value = true
  showEnemyCard.value = true
  if(store.state.myActData.type == 'pass') tempMySpPoint++
  if(store.state.enemyActData.type == 'pass') tempEnemySpPoint++
  mergeAct()
  if(13-gameTurn.value <= 1) {
    changePlayerMode('gameEnd')
  }
  else{
    setTimeout(() => startTurn(), 2000);
  }
}
function startTurn(){
  showEnemyCard.value = false
  changeTurnPhase('play')
  playerMode.value = ''
  draw();
  gameTurn.value++
}
function mergeAct(){
  let tempMap = utils.splitArray(store.state.enemyActData.virtualStage, store.state.stageSideLength)
  tempMap = utils.rotateArray(tempMap, store.state.stageSideLength)
  tempMap = utils.rotateArray(tempMap, store.state.stageSideLength)
  store.state.enemyActData.virtualStage = tempMap.flat()

  let tempSerch = []
  if(selectCard.value.count < enemySelectCard.value.count){
    virtualStage.value = store.state.enemyActData.virtualStage;
    mergeStage();
    virtualStage.value = store.state.myActData.virtualStage;
    mergeStage();
  }
  else if(enemySelectCard.value.count < selectCard.value.count){
    virtualStage.value = store.state.myActData.virtualStage;
    mergeStage();
    virtualStage.value = store.state.enemyActData.virtualStage;
    mergeStage();
  }
  else if(selectCard.value.count == enemySelectCard.value.count){
    tempSerch = [1,2,3,4]
    console.log(tempSerch)
    let buffMyStage = store.state.myActData.virtualStage;
    let buffenemyStage = store.state.enemyActData.virtualStage;
    virtualStage.value = buffenemyStage.map((value,index)=>{
      if(value == buffMyStage[index] && value == 1 || value == 2) {
        console.log("ge"); 
        return 7}
      else return value 
    })
    mergeStage()
  }
}

function draw(){
  let drawCard = useDeck.value[gameTurn.value+3];
  usedCard.value.push(drawCard);
  hand.value.splice(selectCardIndex.value,1,drawCard);
  useHand.value.updata(hand.value);
  setTimeout(() => changePlayerMode('normal'), 100);
}

function init(){
  loadMydeck()
  firestDraw()
}
init()

onMounted(() => {
  useHand.value.firestDrawCard();
  setTimeout(() => {
    showContent.value = true;
    changePlayerMode('normal');
    changeTurnPhase('play');
  }, 2200);
});

function checkPlayHand(hand){
  let stage = utils.splitArray(stageMap.value,store.state.stageSideLength)
  hand.forEach((card) => {
    if(playerMode.value == 'sp' && card.cost > mySpPoint.value) return
    let cardMap = utils.splitArray(card.map,8)
    for (let i = 0; i < 4; i++) {
      let rotatedMap = utils.rotateArray(cardMap,8)
      for (let y = 0; y < 26; y++) {
        for(let x = 0; x < 26; x++){
          if( checkPutCard(rotatedMap,y,x,stage)) { canPlay.value.push(card);return; }
        }
      }
    }
  });
}

function loadMydeck(){
  let deck = store.state.tb_deckList[store.state.currentDeck].deck;
  myDeck.value = store.getters.findCardsById(deck);
  if (store.state.myUserObj.userColor == 'blue') {
    let blueDeck = replaceToBlue(myDeck.value)
    myDeck.value = blueDeck
  }
}
function replaceToBlue(cardList) {
  return cardList.map(card => { let blueMap = card.map.map(value => {
    if (value != 0) return value + 1
    return value;
    })
    return { ...card, map: blueMap }
  });
}
function setMyBlock(){
  return store.state.myUserObj.userColor == 'blue' ? {normal:2,sp:4,fireSp:6}:{normal:1,sp:3,fireSp:5}
}
function setEnemyBlock(){
  return store.state.enemyUserObj.userColor == 'yellow' ? {normal:1,sp:3,fireSp:5}:{normal:2,sp:4,fireSp:6}
}
function firestDraw(){
  let tempHand = [];
  useDeck.value = utils.shuffleArray(myDeck.value)
  for (let i = 0; i < 4; i++) {
    tempHand.push(useDeck.value[i])
    usedCard.value.push(useDeck.value[i])
  }
  hand.value = tempHand
}

function Mulligan(){
  hand.value.length = 0
  useHand.value.updata(hand.value)
  changePlayerMode('')
  setTimeout(() => {
    firestDraw();
    useHand.value.updata(hand.value);
    changePlayerMode('normal');
  }, 1000);
  
}

function PickUpCard(index){
  selectCardIndex.value = index
  if(turnPhase.value != 'play') return
  if(-1 == canPlay.value.indexOf(hand.value[index])) return
  selectCard.value = hand.value[index]
  if(playerMode.value == 'pass') return
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}

function mergeStage(){
  stageMap.value = virtualStage.value.map((value, index) => {
    return value == 8 ? stageMap.value[index]:virtualStage.value[index] });

  myCount.value = stageMap.value.filter(value=> value==myBlock.sp || value==myBlock.normal).length
  enemyCount.value = stageMap.value.filter(value=> value==enemyBlock.sp || value==enemyBlock.normal).length

  const stage = utils.splitArray(stageMap.value,store.state.stageSideLength)
  stageMap.value = stageMap.value.map((value,index)=>{
    const stagePosY = Math.floor(index / store.state.stageSideLength)
    const stagePosX = index%store.state.stageSideLength
    if(value == myBlock.sp){
      if( utils.serchAroundAll([1,2,3,4,5,6,7,8], stagePosY, stagePosX, stage) ) return myBlock.fireSp
      else return value
    }
    else if(value == enemyBlock.sp){
      if( utils.serchAroundAll([1,2,3,4,5,6,7,8], stagePosY, stagePosX, stage) ) return enemyBlock.fireSp
      else return value
    }
    else return value
  })
  mySpPoint.value = stageMap.value.filter(value=> value==myBlock.fireSp).length + tempMySpPoint
  enemySpPoint.value = stageMap.value.filter(value=> value==enemyBlock.fireSp).length + tempEnemySpPoint
}

function putCard(cardMap, _index, offsetX = 0, offsetY = 0){
  let temp = utils.splitArray(store.state.ms_stage[0].map, store.state.stageSideLength)
  posIndex.value = _index
  let index = _index+offsetX+(offsetY*store.state.stageSideLength)
  const stageOffsetY = Math.floor(index / store.state.stageSideLength)
  const stageOffsetX = index%store.state.stageSideLength
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(cardMap[y][x] != 0) temp[y+stageOffsetY][x+stageOffsetX]=cardMap[y][x]
    }
  }
  virtualStage.value = temp.flat()
  const stage = utils.splitArray(stageMap.value,store.state.stageSideLength)
  canPut.value = checkPutCard(cardMap,stageOffsetY,stageOffsetX,stage)

  if (canPut.value) {
    tempStageMap.value = stageMap.value.map(value=>value)
    tempStageMap.value = virtualStage.value.map((value, index) => {
    return value == 8 ? tempStageMap.value[index]:virtualStage.value[index] });
    myTempCount.value = tempStageMap.value.filter(value=> value==myBlock.sp || value==myBlock.normal).length-myCount.value
    enemyTempCount.value = tempStageMap.value.filter(value=> value==enemyBlock.sp || value==enemyBlock.normal).length-enemyCount.value
  }
  else myTempCount.value = 0
}

function checkPutCard (cardMap, stageOffsetY,stageOffsetX,stage){
  let aroundResult =[]
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(cardMap[y][x] != 0){
        if(playerMode.value == 'sp'){
          if(stage[y+stageOffsetY][x+stageOffsetX] > 2) return false
          aroundResult.push(utils.serchAround([myBlock.sp,myBlock.fireSp],y+stageOffsetY,x+stageOffsetX,stage))
        }
        else{
          if(stage[y+stageOffsetY][x+stageOffsetX] > 0) return false
          aroundResult.push(utils.serchAround([myBlock.normal,myBlock.sp,myBlock.fireSp],y+stageOffsetY,x+stageOffsetX,stage))
        }
      } 
    }
  }
  return aroundResult.some(value => value)
}

function rotateCard(){
  if(playerMode.value == 'pass') return
  let rotatedMap = utils.rotateArray(utils.splitArray(selectCard.value.map,8),8)
  selectCard.value.map = rotatedMap.flat()
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}
</script>

<style lang="scss">
.container{
  display: flex;
  justify-content: center;
    .playerData{
      z-index: 1;
      padding-top: 260px;
      margin-left: -400px;
      transform: scale(0.8);
      .data{
        margin-bottom: -15px;
      }
      .yellow{
        color: orange
      }
      .blue{
        color: blue
      }
      .enemyCard{
        pointer-events: none;
      }
      h3{
        margin-top: -20px;
        margin-left: 50px;
      }
    }
    .stage {
      margin-top: -50px;
      margin-left: -400px;
      transform: scale(0.45);
    .veiwStage{
      z-index: 0;
    }
    .virtualStage{
      margin-top: -1088px;
      z-index: 1;
      img{ filter: opacity(50%);}
    }
    .panel{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gray{
      img{ filter: opacity(50%) grayscale(100%);}
    }
    .tempFix{
      img{ filter: opacity(100%); }
    }
  }
}
.controller{
  margin-top: 400px;
  margin-bottom: -880px;
  position: relative;
  z-index: 2;
  .hand{
    padding-right: 10px;
    width: 460px;
    height: 150px;
    transform: scale(0.75);
  }
}

#overlay {
  z-index: 5;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  .transitionBtn {
    height: 35px;
  }
}
#content {
  z-index: 2;
  width: 100%;
  padding: 1em;
  background: #fff;
}
#top-list {
  margin: 0px -100px;
}
</style>