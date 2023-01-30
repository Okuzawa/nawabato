<template>
  <div class="stage">
    <button @click="rotateCard">回転</button>
    <button @click="merge">マージ</button>

    <BlockTable class="viewStage" :contents="utils.splitArray(stageMap, store.state.stageSideLength)" />
    <BlockTable class="virtualStage" :class="{ gray: !canPut }"
     :contents="utils.splitArray(virtualStage, store.state.stageSideLength)" 
     :selectCard="utils.splitArray(selectCardMap, 8)"
     @pick="put"/>
  </div>
</template>

<script setup scoped>
import { ref } from "vue";
import store from "@/store";
import BlockTable from "@/components/parts/BlockTable.vue";
import utils from "@/utils";

let stageMap = ref(store.state.ms_stage[1].map);
let virtualStage = ref(store.state.ms_stage[0].map);
let selectCardMap = ref(store.state.ms_card[1].map)
let canPut = ref(true);
let posIndex = ref(0)

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
};

const put = (cardMap, _index) => {
  let temp = utils.splitArray(store.state.ms_stage[0].map, store.state.stageSideLength)
  let card = cardMap
  
  posIndex.value = _index
  let index = _index-3+(-store.state.stageSideLength*3)
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
  put(utils.splitArray(selectCardMap.value,8),posIndex.value)
}
</script>

<style lang="scss" scoped>
.stage {
  transform: scale(0.7);
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
</style>