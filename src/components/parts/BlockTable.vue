<template>
<table class="board-table">
  <tbody>
    <tr v-for="(row, trkey, index) in board" :key="index">
      <td v-for="(cell, tbkey, index) in row" :key="index">
        <img v-if="isHide===true && isGray===true && cell===1" :src = "this.$store.getters.getBlockSrc(13)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===true && cell===2" :src = "this.$store.getters.getBlockSrc(13)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===true && cell===3" :src = "this.$store.getters.getBlockSrc(14)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===true && cell===4" :src = "this.$store.getters.getBlockSrc(14)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===false && cell===1" :src = "this.$store.getters.getBlockSrc(cell+8)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===false && cell===2" :src = "this.$store.getters.getBlockSrc(cell+8)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===false && cell===3" :src = "this.$store.getters.getBlockSrc(cell+8)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else-if="isHide===true && isGray===false && cell===4" :src = "this.$store.getters.getBlockSrc(cell+8)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
        <img v-else :src = "this.$store.getters.getBlockSrc(cell)" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: "BlockTable",
  props: {
    contents: Array,
    selectCard:Array,
    hide:Boolean,
    gray:Boolean,
  },
  methods: {
    update(newTable) {
      this.board = newTable;
    },
    pickTable(index){
      // console.log(index)
      this.$emit('pick', this.cardMap,index,-3,-3);
    }
  },
  computed: {
    board: {
      get: function () {
        return this.contents;
      }
    },
    cardMap:{
      get: function () {
        return this.selectCard;
      }
    },
    isHide:{
      get: function () {
        return this.hide;
      }
    },
    isGray:{
      get: function () {
        return this.gray;
      }
    },
  },
};
</script>

<style scoped lang="scss">
img{
  width: 30px;
  height: 30px;
}
</style>
