<template>
  <div v-if="gameTurn > 0">
  <h2>残り{{13-gameTurn}}ターン</h2>
  </div>
  
  <div class="gamehand" v-if="gameTurn > -1">
  <GameHand v-if="hand != null" ref="useHand" :deck="hand" @pick="PickUpCard"/>
  <button @click="rotateCard">回転</button>
  <button @click="merge">マージ</button>
  <button @click="isSp = !isSp">スペシャル{{isSp?'OFF':'ON'}}</button>
  <GameDeck :deck="myDeck"/>
  </div>

  <div class="container">
    <div class="stage">
      <div>
        <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
        <BlockTable class="virtualStage" :class="{ gray: !canPut }"
        :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
        :selectCard="utils.splitArray(selectCard.map, 8)"
        @pick="putCard"/>
      </div>
    </div>
    <div class="playerData">
      <CardItem :id="store.getters.findCardById(0).id" :name="store.getters.findCardById(0).name" 
      :count="store.getters.findCardById(0).count" :cost="store.getters.findCardById(0).cost" :map="store.getters.findCardById(0).map"
      :block="store.getters.getBlockSrc(1)"
      :sp_block="store.getters.getBlockSrc(2)"/>

      <CardItem :id="store.getters.findCardById(0).id" :name="store.getters.findCardById(0).name" 
      :count="store.getters.findCardById(0).count" :cost="store.getters.findCardById(0).cost" :map="store.getters.findCardById(0).map"
      :block="store.getters.getBlockSrc(1)"
      :sp_block="store.getters.getBlockSrc(2)"/>
    </div>
  </div>
</template>

<script setup scoped>
import { ref,onMounted } from "vue";
import store from "@/store";
import utils from "@/utils";
import BlockTable from "@/components/parts/BlockTable.vue";
import GameDeck from "@/components/GameDeck.vue";
import GameHand from "@/components/GameHand.vue";
import CardItem from "@/components/parts/CardItem.vue";

const useHand = ref();

let gameTurn = ref(1);
let stageMap = ref(store.state.stageObj.map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCard = ref(store.state.ms_card[1]);
let canPut = ref(true);
let posIndex = ref(798);
let myDeck = ref([]);
let hand = ref([]);
let isSp = ref(false)
const myBlock = setMyBlock()

function init(){
  loadMydeck()
  Mulligan()
}
init()

onMounted(() => {
  useHand.value.firestDrawCard();
  // PickUpCard(0);
});

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
  return store.state.myUserObj.userColor == 'blue' ? {normal:2,sp:4}:{normal:1,sp:3}
}

function Mulligan(){
  let tempHand = [];
  for (let i = 0; i < 4; i++) {
    tempHand.push(myDeck.value[i])
  }
  hand.value = tempHand
}

function PickUpCard(index){
  selectCard.value = hand.value[index]
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}

function merge(){
  if(!canPut.value) return
  stageMap.value = virtualStage.value.map((value, index) => {
    return value == 8 ? stageMap.value[index]:virtualStage.value[index] });
  gameTurn.value++
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
}

function checkPutCard (cardMap, stageOffsetY,stageOffsetX,stage){
  let aroundResult =[]
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(cardMap[y][x] != 0){
        if(isSp.value){
          if(stage[y+stageOffsetY][x+stageOffsetX] > 2) return false
          aroundResult.push(utils.serchAround([myBlock.sp],y+stageOffsetY,x+stageOffsetX,stage))
        }
        else{
          if(stage[y+stageOffsetY][x+stageOffsetX] > 0) return false
          aroundResult.push(utils.serchAround([myBlock.normal,myBlock.sp],y+stageOffsetY,x+stageOffsetX,stage))
        }
      } 

    }
  }
  return aroundResult.some(value => value)
}

function rotateCard(){
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
      padding-top: 300px;
      margin-left: -390px;
      transform: scale(0.8);
    }
    .stage {
      margin-top: -50px;
      margin-left: -350px;
      transform: scale(0.55);
    .veiwStage{
      z-index: 0;
    }
    .virtualStage{
      margin-top: -1088px;
      z-index: 1;
      img{ filter: opacity(50%);}
    }
    .gray{
      img{ filter: opacity(50%) grayscale(100%);}
    }
  }
}
.gamehand{
  margin-top: 460px;
  margin-bottom: -910px;
  position: relative;
  z-index: 2;
}

#overlay {
  z-index: 5;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
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