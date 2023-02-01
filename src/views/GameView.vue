<template>
  <div v-if="gameTurn > 0">
  <h2>残り{{13-gameTurn}}ターン</h2>
  <h4>yellow:00|blue:00</h4>
  </div>
  
  <div class="gamehand" v-if="gameTurn > -1">
  <GameHand v-if="hand != null" ref="useHand" :deck="hand" @pick="PickUpCard"/>
  <button @click="rotateCard">回転</button>
  <button @click="merge">マージ</button>
  <button @click="isSp = !isSp">スペシャル{{isSp?'OFF':'ON'}}</button>
  <GameDeck :deck="myDeck"/>
  </div>

  <div class="stage">
    <div>
      <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
      <BlockTable class="virtualStage" :class="{ gray: !canPut }"
      :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
      :selectCard="utils.splitArray(selectCard.map, 8)"
      @pick="putCard"/>
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

const useHand = ref();
const setMyBlock = () =>{
  if(store.state.myUserObj == null) store.state.myUserObj = {userPrivilege:'yellow'}
  return store.state.myUserObj.userPrivilege == 'yellow' ? {normal:1,sp:3}:{normal:2,sp:4}
}

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

const loadMydeck = () => {
  let deck = store.state.tb_deckList[store.state.currentDeck].deck;
  myDeck.value = store.getters.findCardsById(deck);
  // if (store.state.myUserObj.userPrivilege == 'blue') {
  //   let temp =  myDeck.value.map(value => {
  //     return value
  //     // return map.map(value=>{
  //     //   if(value == 1) return 2
  //     //   else if(value == 3) return 4
  //     //   else return value
  //     // })
  //   })
  //   console.log(temp)
  //   // myDeck.value = temp
  // }
}
loadMydeck()

const Mulligan = () =>{
  let tempHand = [];
  for (let i = 0; i < 4; i++) {
    tempHand.push(myDeck.value[i])
  }
  hand.value = tempHand
}
Mulligan();

onMounted(() => {
  useHand.value.firestDrawCard();
  // PickUpCard(0);
});

const PickUpCard =(index)=>{
  selectCard.value = hand.value[index]
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}

const merge = () => {
  if(!canPut.value) return
  stageMap.value = virtualStage.value.map((value, index) => {
    return value == 8 ? stageMap.value[index]:virtualStage.value[index] });
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
  let aroundResult =[]
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {

      if(card[y][x] != 0){
        if(isSp.value){
          if(temp[y+Math.floor(index / store.state.stageSideLength)][x+index%store.state.stageSideLength] > 2) return false
          aroundResult.push(serchAround([myBlock.sp],y+Math.floor(index/store.state.stageSideLength),x+index%store.state.stageSideLength))
        }
        else{
          if(temp[y+Math.floor(index / store.state.stageSideLength)][x+index%store.state.stageSideLength] > 0) return false
          aroundResult.push(serchAround([myBlock.normal,myBlock.sp],y+Math.floor(index/store.state.stageSideLength),x+index%store.state.stageSideLength))
        }
      } 

    }
  }
  return aroundResult.some(value => value)
};

const serchAround = (values,posY,posX)=>{
  let tempMap = utils.splitArray(stageMap.value,store.state.stageSideLength)
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if(values.some(value=>value == tempMap[(posY-1)+y][(posX-1)+x])) return true
    }
  }
  return false
}

const rotateCard = ()=>{
  let rotatedMap = utils.rotateArray(utils.splitArray(selectCard.value.map,8),8)
  selectCard.value.map = rotatedMap.flat()
  putCard(utils.splitArray(selectCard.value.map,8),posIndex.value,-3,-3)
}
</script>

<style lang="scss">
.stage {
  transform: scale(0.7);
  display: flex;
  justify-content: center;
  .veiwStage{
    z-index: 0;
  }
  .virtualStage{
    margin-top: -1088px;
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
.gamehand{
  margin-top: 600px;
  margin-bottom: -1030px;
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