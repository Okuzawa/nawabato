<template>
<table class="board-table">
  <tbody>
    <tr v-for="(row, key, index) in board" :key="index">
      <td v-for="(cell, key, index) in row" v-bind:class="'block-type-' + cell" :key="index">
        <img :src = "this.$store.state.blocks[cell]" width="30" height="30">
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
// function create2DArray(rows, cols) {
//   let array = new Array(rows);
//   for (let i = 0; i < rows; i++) {
//     array[i] = new Array(cols).fill(null);
//   }
//   return array;
// }

export default {
  name: "BlockTable",
  props: {
    contents: Array,
  },
  methods: {
    update(newTable) {
      this.board = newTable;
    },
  },
  computed: {
    board: {
      get: function () {
        return this.contents;
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
