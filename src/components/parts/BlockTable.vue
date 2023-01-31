<template>
<table class="board-table">
  <tbody>
    <tr v-for="(row, trkey, index) in board" :key="index">
      <td v-for="(cell, tbkey, index) in row" v-bind:class="'block-type-' + cell" :key="index">
        <img :src = "this.$store.getters.getBlockSrc(cell)" width="30" height="30" @click="pickTable(trkey* this.$store.state.stageSideLength +tbkey)">
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
  },
  methods: {
    update(newTable) {
      this.board = newTable;
    },
    pickTable(index){
      console.log(index)
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
  },
};
</script>

<style scoped lang="scss">
</style>
