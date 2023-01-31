<template>
  <div v-if="gameTurn > 0">
  <h2>残り{{13-gameTurn}}ターン</h2>
  <h4>yellow:00|blue:00</h4>
  </div>
  <div class="stage">
    <div>
      <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
      <BlockTable class="virtualStage" :class="{ gray: !canPut }"
      :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
      :selectCard="utils.splitArray(selectCardMap, 8)"
      @pick="putCard"/>
    </div>
  </div>

  <div v-if="gameTurn > -1">
  <GameHand ref="useHand" :deck="hand"/>
  <button @click="rotateCard">回転</button>
  <button @click="merge">マージ</button>
  <GameDeck :deck="myDeck"/>
  </div>
</template>

<script setup scoped>
import { ref,onMounted } from "vue";
import store from "@/store";
import utils from "@/utils";
import BlockTable from "@/components/parts/BlockTable.vue";
import GameDeck from "@/components/GameDeck.vue";
import GameHand from "@/components/GameHand.vue";

const useHand = ref();

let gameTurn = ref(1);
let stageMap = ref(store.state.stageObj.map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCardMap = ref(store.state.ms_card[0].map);
let canPut = ref(true);
let posIndex = ref(0);
let myDeck = ref("");
let hand = ref("");

let deck = store.state.tb_deckList[store.state.currentDeck].deck;
myDeck.value = store.getters.findCardsById(deck);

const Mulligan = () =>{
  let tempHand = [];
  for (let i = 0; i < 4; i++) {
    tempHand.push(myDeck.value[i])
  }
  hand.value = tempHand
}
Mulligan();
onMounted(() => { useHand.value.firestDrawCard() });

const merge = () => {
  if(!canPut.value)return
  let temp = []
  virtualStage.value.forEach((value,index) => {
    if(value == 8){
      temp.push(stageMap.value[index])
    }
    else temp.push(virtualStage.value[index])
  });
  stageMap.value = temp
  gameTurn.value++
};

const putCard = (cardMap, _index, offsetX = 0, offsetY = 0) => {
  let temp = utils.splitArray(store.state.ms_stage[0].map, store.state.stageSideLength)
  let card = cardMap
  
  posIndex.value = _index
  let index = _index+offsetX+(offsetY*store.state.stageSideLength)
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(card[y][x] != 0) temp[y+Math.floor(index / store.state.stageSideLength)][x+index%store.state.stageSideLength]=card[y][x]
    }
  }
  virtualStage.value = temp.flat()
  canPut.value = checkPutCard(cardMap,index)
};

const checkPutCard = (cardMap, index) => {
  let temp = utils.splitArray(stageMap.value,store.state.stageSideLength)
  let card = cardMap
  let resultAround = []

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if(card[y][x] != 0){
        resultAround.push( aroundCheck(temp,y+Math.floor(index / store.state.stageSideLength),x+index%store.state.stageSideLength) )
        if(temp[y+Math.floor(index / store.state.stageSideLength)][x+index%store.state.stageSideLength] != 0) return false
      } 
    }
  }

  if(!resultAround.some(value => value)) return false
  return true
};

const aroundCheck = (stage,yPos,xPos)=>{
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      let check = stage[(yPos-1)+y][(xPos-1)+x]
      if(check == 1 || check == 2) return true
    }
  }
  return false
}

const rotateCard = ()=>{
  let cardMap = utils.splitArray(selectCardMap.value,8)
  let rotatedMap = []
  for (let y = 0; y < 8; y++) {
    rotatedMap[y] = [];
    for (let x = 0; x < 8; x++) {
      rotatedMap[y][x] = cardMap[x][8-y-1]
    }
  }
  selectCardMap.value = rotatedMap.flat()
  putCard(utils.splitArray(selectCardMap.value,8),posIndex.value)
}
</script>

<style lang="scss">
.stage {
  margin-top: -180px;
  margin-bottom: -150px;
  transform: scale(0.7);
  display: flex;
  justify-content: center;
  .veiwStage{
    z-index: 0;
  }
  .virtualStage{
    margin-top: -960px;
    // margin-top: 100px;
    z-index: 1;
    img{
      filter: opacity(50%);
    }
  }
  .gray{
    img{
      filter: opacity(50%) grayscale(100%);
    }
  }
}

#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 2;

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
#top-list {
  margin: 0px -100px;
}
</style>