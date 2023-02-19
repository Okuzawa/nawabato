<template>
  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-body">
        <div id="top-list">
          <p>手札のカードを引き直しますか？</p>
          <div class="container">
            <div v-for="(value, key, index) in hand" :key="index">
              <CardItem class="pointerNone showHand" :id="value.id" :name="value.name" :count="value.count" :cost="value.cost" :map="value.map"/>
            </div>
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
    <GameDeck :deck="myDeck" :usedCard="usedCard"/>
    <div v-if="turnPhase == 'play'">
      <button class="btn btn-outline-secondary" @click="move('←')">←</button>
      <button class="btn btn-outline-secondary" @click="move('↑')">↑</button>
      <button class="btn btn-outline-secondary" @click="move('↓')">↓</button>
      <button class="btn btn-outline-secondary" @click="move('→')">→</button>
    </div>
  </div>

  <div class="container">
    <div class="stage">
      <div>
        <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
        <BlockTable class="virtualStage" :hide="true" :gray="!canPut"
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
      <CardFlip class="pointerNone" :isFaceUp="showEnemyCard">
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
      <div class = "enemyData" :class="(store.state.enemyUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">
        <p>{{store.state.enemyUserObj.userName}} : sp{{enemySpPoint}}</p>
        <h4 v-if="enemyDeviationPoint != 0">{{ enemyDeviationPoint ? "+" : " " }} {{ enemyDeviationPoint }}</h4>
        <h1>{{enemyPoint}}</h1>
        <h3 v-if="enemyExpectedPoint != enemyPoint">↪{{enemyExpectedPoint}}</h3>
      </div>
      <div class = "myData" :class="(store.state.myUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">
        <h4 v-if="myDeviationPoint != 0">{{ myDeviationPoint ? "+" : " " }} {{ myDeviationPoint }}</h4>
        <h1>{{myPoint}}</h1>
        <h3 v-if="myExpectedPoint != myPoint">↪{{myExpectedPoint}}</h3>
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
  <div class="gaming pointerNone" :class="{hide: !enemyCutIn}">
    <h4 id="enemySpAtc" :class="(store.state.enemyUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">スペシャルアタック!!</h4>
  </div>
  <div class="gaming pointerNone" :class="{hide: !myCutIn}">
    <h4 id="mySpAtc" :class="(store.state.myUserObj.userColor === 'yellow') ? 'yellow' : 'blue'">スペシャルアタック!!</h4>
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
const myDeck = ref([]);
let useDeck = [];

let gameTurn = ref(0);
let stageMap = ref(store.state.stageObj.map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCardIndex = ref(0)
let selectCard = ref(store.state.ms_card[0]);
let enemySelectCard = ref(store.state.ms_card[0]);
let canPut = ref(true);
let posIndex = ref(798);
let usedCard = ref([])
let hand = ref([]);
let canPlayCard = ref([]);
let playerMode = ref("");
let turnPhase = ref("")

const myPoint = ref(1);
const enemyPoint = ref(1);
const myExpectedPoint = ref(1);
const enemyExpectedPoint = ref(1);
const myDeviationPoint = ref(0)
const enemyDeviationPoint = ref(0)
const mySpPoint = ref(0);
const enemySpPoint = ref(0);
let tempMySpPoint = 0;
let tempEnemySpPoint = 0;

const myCutIn = ref(false)
const enemyCutIn = ref(false)
let isLoading = false;

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
  if(isLoading) return;
  if( store.state.myActData.turn==store.state.enemyActData.turn ){
    enemySelectCard.value = store.state.enemyActData.card
    changeTurnPhase('show')
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
  setTimeout(() => writeMyActData(), 500);
}
function writeMyActData(){
  store.state.myActData = { turn: gameTurn.value, type: playerMode.value, card: selectCard.value, virtualStage: virtualStage.value }

  store.state.roomDocRef.get().then((doc) => {
    let gameDatas = doc.get("gameDatas");
    gameDatas = {...gameDatas, [store.state.userId]: store.state.myActData }
    store.state.roomDocRef.update({ gameDatas });
  });
}
function rotateCard(){
  if(playerMode.value == 'pass') return
  let rotatedMap = utils.rotateArray(utils.splitArray(selectCard.value.map,8),8)
  selectCard.value.map = rotatedMap.flat()
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}
function move(direction){
  if(playerMode.value == 'pass') return
  posIndex.value += game.movePosIndex(direction)
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
  let tempMap = utils.splitArray(store.state.ms_stage[0].map, store.state.stageSideLength)
  posIndex.value = _index
  let index = _index+offsetX+(offsetY*store.state.stageSideLength)
  let stageOffsetY = Math.floor(index / store.state.stageSideLength)
  let stageOffsetX = index%store.state.stageSideLength
  let tempValue = 34-(8-1)
  if(stageOffsetY > tempValue) {
    stageOffsetY = 0
    posIndex.value = _index-(tempValue*store.state.stageSideLength)
  }
  if(stageOffsetY < 0) {
    stageOffsetY = tempValue
    posIndex.value = _index+( (tempValue) *store.state.stageSideLength)
  }
  
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(cardMap[y][x] != 0) tempMap[y+stageOffsetY][x+stageOffsetX]=cardMap[y][x]
    }
  }
  virtualStage.value = tempMap.flat()
  const stage = utils.splitArray(stageMap.value,store.state.stageSideLength)
  canPut.value = checkPutCard(cardMap,stageOffsetY,stageOffsetX,stage)

  if (canPut.value) {
    let tempStageMap = stageMap.value
    tempStageMap = game.mergeStage(tempStageMap,virtualStage.value)

    myExpectedPoint.value = game.countPoint([myBlock.normal,myBlock.sp,myBlock.fireSp], tempStageMap) 
    enemyExpectedPoint.value = game.countPoint([enemyBlock.normal,enemyBlock.sp,enemyBlock.fireSp], tempStageMap)
  }
  else {
    myExpectedPoint.value = myPoint.value
    enemyExpectedPoint.value = enemyPoint.value
  }
}

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
    });
};
function updataTurn(){
  isLoading = true
  myExpectedPoint.value = myPoint.value
  enemyExpectedPoint.value = enemyPoint.value
  
  if(store.state.myActData.type == 'sp') {
    tempMySpPoint -= selectCard.value.cost
    myCutIn.value = true
  }
  if(store.state.enemyActData.type == 'sp') {
    tempEnemySpPoint -= enemySelectCard.value.cost
    enemyCutIn.value = true
  }

  wait(1)
  .then(() => {
    enemyCutIn.value = false
    myCutIn.value = false
    showEnemyCard.value = true
    showMyCard.value = true
    showDown()
    return wait(1.5);
    })
  .then(() => {
    stageMap.value = game.putFireToBlock(stageMap.value, myBlock, enemyBlock)
    return wait(0.5);
    })
  .then(() => {
    if(store.state.myActData.type == 'pass') tempMySpPoint++
    if(store.state.enemyActData.type == 'pass') tempEnemySpPoint++

    mySpPoint.value = game.countPoint([myBlock.fireSp],stageMap.value) + tempMySpPoint
    enemySpPoint.value = game.countPoint([enemyBlock.fireSp],stageMap.value) + tempEnemySpPoint

    myDeviationPoint.value = game.countPoint([myBlock.normal,myBlock.sp,myBlock.fireSp],stageMap.value)-myPoint.value
    enemyDeviationPoint.value = game.countPoint([enemyBlock.normal,enemyBlock.sp,enemyBlock.fireSp],stageMap.value)-enemyPoint.value
    return wait(1);
    })
  .then(() => {
    myDeviationPoint.value = 0
    enemyDeviationPoint.value = 0

    myPoint.value = game.countPoint([myBlock.normal,myBlock.sp,myBlock.fireSp],stageMap.value)
    enemyPoint.value = game.countPoint([enemyBlock.normal,enemyBlock.sp,enemyBlock.fireSp],stageMap.value)
    myExpectedPoint.value = myPoint.value
    enemyExpectedPoint.value = enemyPoint.value
    
    gameTurn.value++
    return wait(0.5);
    })
  .then(() => {
    if(gameTurn.value > 12) gameEnd()
    else startTurn()
    isLoading = false;
    });
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

function loadMydeck(){
  let idList = store.state.tb_deckList[store.state.currentDeck].deck;
  let deck = store.getters.findCardsById(idList);
  if (store.state.myUserObj.userColor == 'blue') myDeck.value = game.replaceToBlue(deck)
  else myDeck.value = game.replaceToYellow(deck)
}

function firestDraw(){
  useDeck = utils.shuffleArray(myDeck.value)
  usedCard.value = []
  for (let i = 0; i < 4; i++) {
    let drawCard = useDeck.shift()
    hand.value.push(drawCard)
    usedCard.value.push(drawCard)
  }
}

function draw(){
  let drawCard = useDeck.shift();
  usedCard.value.push(drawCard);
  hand.value.splice(selectCardIndex.value,1,drawCard);
  useHand.value.updata(hand.value);
  setTimeout(() => changePlayerMode('normal'), 100);
}
</script>

<style lang="scss" scoped>
.yellow{
  color: orange
}
.blue{
  color: blue
}
.hide{
  filter: opacity(0%);
}
#mySpAtc{
  margin-top: 50px;
  z-index: 3;
  position: relative;
}
#enemySpAtc{
  margin-top: -600px;
  z-index: 3;
  position: relative;
}
.container{
  display: flex;
  justify-content: center;
    .playerData{
      z-index: 1;
      padding-top: 260px;
      margin-left: -400px;
      transform: scale(0.8);
      .enemyData{
        h4{
          margin-top: -10px;
          margin-bottom: -10px;
          margin-left: 35px;
        }
        h3{
          margin-top: -20px;
          margin-left: 50px;
        }
      }
      .myData{
        margin-bottom: -15px;
        h4{
          margin-bottom: -10px;
          margin-left: 35px;
        }
        h3{
          margin-top: -20px;
          margin-left: 50px;
        }
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
.pointerNone{
  pointer-events: none;
}
.showHand{
  margin:0;padding:0;
  transform: scale(0.75);
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

.gaming {
  background: linear-gradient(to right, rgba(255, 0, 255, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5)) 0% center/200%;
  animation: gaming 2s linear infinite;
  }
@keyframes gaming {
  100% { background-position-x: 200%; }
}
</style>
