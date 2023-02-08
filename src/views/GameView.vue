<template>
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

  <div v-if="gameTurn > 0 && turnPhase != 'gameEnd'">
    <h2>残り{{13-gameTurn}}ターン</h2>
  </div>

  <div v-if="turnPhase == 'gameEnd'">
    <div>
      <h3>結果</h3>
    </div>
    <div>
      <h2>{{store.state.myUserObj.userName}}:{{myPoint}} VS {{store.state.enemyUserObj.userName}}:{{enemyPoint}}</h2>
    </div>
  </div>
  
  <div class="controller">
    <GameHand class="hand" ref="useHand" :deck="hand" :canPlay ="canPlayCard" @pick="PickUpCard"/>
    <button v-if="turnPhase == 'play'" @click="changePlayerMode('pass')">パス</button>
    <button v-if="turnPhase == 'play'" :class="{ gaming: playerMode == 'sp' }" @click="changePlayerMode('sp')">SP発動</button>
    <button v-if="turnPhase == 'play'" @click="rotateCard">回転</button>
    <button v-if="turnPhase == 'gameEnd'" @click="store.commit('eraseBufRoom')">退室する</button>
    <GameDeck :deck="deck" :usedCard="usedCard"/>
  </div>

  <div class="container">
    <div class="stage">
      <div>
        <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
        <BlockTable class="virtualStage" :class="{ gray: !canPut, tempFix: !showMyCard}"
        :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
        :selectCard="utils.splitArray(selectCard.map, 8)" @pick="putCard"/>
        <div class="panel" v-if="playerMode == 'pass' && turnPhase == 'play'">
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
        <h1>{{enemyPoint}}</h1>
        <h3 v-if="enemyExpectedPoint != 0" class="enemyPoint">+{{enemyExpectedPoint}}</h3>
      </div>
      <div class = "data" :class="(store.state.myUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">
        <h1>{{myPoint}}</h1>
        <h3 v-if="myExpectedPoint != 0" class="myPoint">+{{myExpectedPoint}}</h3>
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
import game from "@/game";
import BlockTable from "@/components/parts/BlockTable.vue";
import GameDeck from "@/components/GameDeck.vue";
import GameHand from "@/components/GameHand.vue";
import CardItem from "@/components/parts/CardItem.vue";
import CardFlip from "@/components/parts/CardFlip.vue";
import CardSleeve from "@/components/parts/CardSleeve.vue";

const useHand = ref();
const myBlock = game.setBlock(store.state.myUserObj.userColor)
const enemyBlock = game.setBlock(store.state.enemyUserObj.userColor)

const showContent = ref(false);
const showEnemyCard = ref(false);
const showMyCard = ref(true);
const deck = ref([]);

let gameTurn = ref(0);
let stageMap = ref(store.state.stageObj.map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCardIndex = ref(0)
let selectCard = ref(store.state.ms_card[0]);
let enemySelectCard = ref(store.state.ms_card[0]);
let canPut = ref(true);
let posIndex = ref(798);
let myDeck = ref([]);
let usedCard = ref([])
let hand = ref([]);
let canPlayCard = ref([]);
let playerMode = ref("");
let turnPhase = ref("")

let myPoint = ref(1);
let enemyPoint = ref(1);
let myExpectedPoint = ref(0);
let enemyExpectedPoint = ref(0);
let mySpPoint = ref(0);
let enemySpPoint = ref(0);
let tempMySpPoint = 0;
let tempEnemySpPoint = 0;

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
  }, 2200);
});
function StartGame(){
  showContent.value = false;
  gameTurn.value++;
  changeTurnPhase('play');
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

watch(playerMode,(cr)=>{
  canPlayCard.value = [];
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
      selectCard.value = store.state.ms_card[0]
      canPlayCard.value = hand.value.map(value => value)
      putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
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

function setCard(){
  if(selectCard.value.id == 0) return
  if(playerMode.value != 'pass' && !canPut.value) return
  if(turnPhase.value != 'play') return
  showMyCard.value = false
  changeTurnPhase('waitting')
  writeMyActData()
}
function rotateCard(){
  if(playerMode.value == 'pass') return
  let rotatedMap = utils.rotateArray(utils.splitArray(selectCard.value.map,8),8)
  selectCard.value.map = rotatedMap.flat()
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}
function PickUpCard(index){
  if(turnPhase.value != 'play') return
  selectCardIndex.value = index
  if(-1 == canPlayCard.value.indexOf(hand.value[index])) return
  selectCard.value = hand.value[index]
  if(playerMode.value == 'pass') return
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}
function putCard(cardMap, _index, offsetX = 0, offsetY = 0){
  if(turnPhase.value != 'play') return
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
    let tempStageMap = stageMap.value
    tempStageMap = game.mergeStage(tempStageMap,virtualStage.value)

    myExpectedPoint.value = game.countPoint([myBlock.normal,myBlock.sp,myBlock.fireSp], tempStageMap) - myPoint.value
    enemyExpectedPoint.value = game.countPoint([enemyBlock.normal,enemyBlock.sp,enemyBlock.fireSp], tempStageMap) - enemyPoint.value
  }
  else {
    myExpectedPoint.value = 0
    enemyExpectedPoint.value = 0
  }
}

function updataTurn(){
  changeTurnPhase('show')
  gameTurn.value++
  showMyCard.value = true
  showEnemyCard.value = true

  if(store.state.myActData.type == 'pass') tempMySpPoint++
  if(store.state.enemyActData.type == 'pass') tempEnemySpPoint++

  if(store.state.myActData.type == 'sp') tempMySpPoint -= selectCard.value.cost
  if(store.state.enemyActData.type == 'sp') tempEnemySpPoint -= enemySelectCard.value.cost
  
  showDown()

  setTimeout(() => {
    stageMap.value = game.putFireToBlock(stageMap.value, myBlock, enemyBlock)
    
    myPoint.value = game.countPoint([myBlock.normal,myBlock.sp,myBlock.fireSp],stageMap.value)
    enemyPoint.value = game.countPoint([enemyBlock.normal,enemyBlock.sp,enemyBlock.fireSp],stageMap.value)
    mySpPoint.value = game.countPoint([myBlock.fireSp],stageMap.value) + tempMySpPoint
    enemySpPoint.value = game.countPoint([enemyBlock.fireSp],stageMap.value) + tempEnemySpPoint

    setTimeout(()=>{
      if(gameTurn.value > 12) gameEnd()
      else startTurn()
    },1500);
  }, 1500);
}
function startTurn(){
  showEnemyCard.value = false
  changeTurnPhase('play')
  playerMode.value = ''
  draw();
}
function gameEnd(){
  changeTurnPhase('gameEnd')
}
function showDown(){
  virtualStage.value = store.state.ms_stage[0].map
  let tempMap = utils.splitArray(store.state.enemyActData.virtualStage, store.state.stageSideLength)
  tempMap = utils.rotateArray(tempMap, store.state.stageSideLength)
  tempMap = utils.rotateArray(tempMap, store.state.stageSideLength)

  let myStage = store.state.myActData.virtualStage
  let enemyStage = tempMap.flat()

  let myEvaluation = 0
  let enemyEvaluation = 0
  if (selectCard.value.count < enemySelectCard.value.count) myEvaluation++
  else if (selectCard.value.count > enemySelectCard.value.count) myEvaluation--
  if (store.state.myActData.type == 'sp' && store.state.enemyActData.type == 'normal') myEvaluation+=2
  else if (store.state.myActData.type == 'normal' && store.state.enemyActData.type == 'sp') myEvaluation-=2
  if (store.state.myActData.type == 'pass') myEvaluation-=5
  if (store.state.enemyActData.type == 'pass') enemyEvaluation-=5

  if (myEvaluation == enemyEvaluation) {
    let temp = game.mergeCard(myStage,enemyStage)
    stageMap.value = game.mergeStage(stageMap.value,temp)
  }
  else if (myEvaluation > enemyEvaluation) {
    stageMap.value = game.mergeStage(stageMap.value,enemyStage)
    setTimeout(() => {
      stageMap.value = game.mergeStage(stageMap.value,myStage)
    }, 1000);
  }
  else if (myEvaluation < enemyEvaluation) {
    stageMap.value = game.mergeStage(stageMap.value,myStage)
    setTimeout(()=>{
      stageMap.value = game.mergeStage(stageMap.value,enemyStage)
    }, 1000)
  }
}

function draw(){
  let drawCard = myDeck.value[gameTurn.value+2];
  usedCard.value.push(drawCard);
  hand.value.splice(selectCardIndex.value,1,drawCard);
  useHand.value.updata(hand.value);
  setTimeout(() => changePlayerMode('normal'), 100);
}

function checkPlayHand(hand){
  let stage = utils.splitArray(stageMap.value,store.state.stageSideLength)
  canPlayCard.value = hand.map((card) => {
    if(playerMode.value == 'sp' && card.cost > mySpPoint.value) return;
    let cardMap = utils.splitArray(card.map,8)
    for (let y = 0; y < store.state.stageSideLength-(8-1); y++) {
      for(let x = 0; x < store.state.stageSideLength-(8-1); x++){
        for(let i = 0; i<4; i++){
          if( checkPutCard(cardMap,y,x,stage)) return card
          cardMap = utils.rotateArray(cardMap,8)
        }
      }
    }
  });
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

function changeTurnPhase(mode){
  turnPhase.value = mode
}
function changePlayerMode(mode){
  if(playerMode.value == mode) mode = 'normal'
  playerMode.value = mode
}

function writeMyActData(){
  store.state.myActData = { turn: gameTurn.value, type: playerMode.value, card: selectCard.value, virtualStage: virtualStage.value }

  store.state.roomDocRef.get().then((doc) => {
    let gameDatas = doc.get("gameDatas");
    gameDatas = {...gameDatas, [store.state.userId]: store.state.myActData }
    store.state.roomDocRef.update({ gameDatas });
  });
}

function loadMydeck(){
  let idList = store.state.tb_deckList[store.state.currentDeck].deck;
  myDeck.value = store.getters.findCardsById(idList);
  if (store.state.myUserObj.userColor == 'blue') {
    myDeck.value = game.replaceToBlue(myDeck.value)
  }
  deck.value = myDeck.value
}

function firestDraw(){
  let tempHand = [];
  myDeck.value = utils.shuffleArray(myDeck.value)
  for (let i = 0; i < 4; i++) {
    tempHand.push(myDeck.value[i])
    usedCard.value.push(myDeck.value[i])
  }
  hand.value = tempHand
}
</script>

<style lang="scss" scoped>
.gaming {
  background: linear-gradient(to right, rgba(255, 0, 255, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5)) 0% center/200%;
  animation: gaming 2s linear infinite;
  }
@keyframes gaming {
  100% { background-position-x: 200%; }
}

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
      filter: opacity(50%);
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
      filter: opacity(50%) sepia(100%);
    }
    .tempFix{
      filter: opacity(100%);
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
