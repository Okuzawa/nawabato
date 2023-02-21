<template>
  <table class="board-table">
    <tbody>
      <tr v-for="(row, trkey, index) in board" :key="index">
        <td v-for="(cell, tbkey, index) in row" :key="index">
          <img :class="getBg(cell)" :src="getSrc(cell)" :style="getStyle(cell)"
          @click="pickTable(trkey * $store.state.stageSideLength + tbkey)"/>
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
    selectCard: Array,
    hide: Boolean,
    gray: Boolean,
  },
  data() {
    return{
      colorMap:{
        0: '#dbdbdb',
        1: 'yellow',
        2: 'blue',
        3: 'orange',
        4: 'cyan'
      }
    }
  },
  methods: {
    update(newTable) {
      this.board = newTable;
    },
    pickTable(index) {
      this.$emit("pick", this.cardMap, index, -3, -3);
    },
    getSrc(cell) {
      if(this.isHide){
        return this.$store.getters.getBlockSrc(8);
      }
      return this.$store.getters.getBlockSrc(cell);
    },
    getBg(cell){
      if(!this.isHide || cell == 8) return;
      if(cell == 1 || cell == 2){
        return 'bg_border'
      }
      else if(cell == 3 || cell == 4){
        return 'bg_dot'
      }
    },
    getStyle(cell){
      if(!this.isHide || cell == 8) return;

      if(cell == 1 || cell == 2){
        if(this.isGray){
          return {
            backgroundImage:
            `repeating-linear-gradient(-45deg, ${this.colorMap[0]}, ${this.colorMap[0]} 5px, transparent 0, transparent 10px)`
          }
        }
        return {
          backgroundImage:
          `repeating-linear-gradient(-45deg, ${this.colorMap[cell]}, ${this.colorMap[cell]} 5px, transparent 0, transparent 10px)`
        }
      }
      else if(cell == 3 || cell == 4){
        if(this.isGray){
          return {
            backgroundImage:
            `radial-gradient(${this.colorMap[0]} 30%, transparent 0, transparent 11px),radial-gradient(${this.colorMap[0]} 30%, transparent 0, transparent 11px)`
          }
        }
        return {
          backgroundImage:
          `radial-gradient(${this.colorMap[cell]} 30%, transparent 0, transparent 11px),radial-gradient(${this.colorMap[cell]} 30%, transparent 0, transparent 11px)`
        }
      }
    }
  },
  computed: {
    board: {
      get: function () {
        return this.contents;
      },
    },
    cardMap: {
      get: function () {
        return this.selectCard;
      },
    },
    isHide: {
      get: function () {
        return this.hide;
      },
    },
    isGray: {
      get: function () {
        return this.gray;
      },
    },
  },
};
</script>

<style scoped lang="scss">
img {
  width: 30px;
  height: 30px;
}

.bg_border {
  // background-image: 
  //   repeating-linear-gradient(-45deg, #fc693b, #fc693b 5px, transparent 0, transparent 10px);
  background-size: 15px;
  animation: loop_border 2s linear infinite;
}

.bg_dot {
  // background-image: 
  //   radial-gradient(#7bded9 30%, transparent 0, transparent 11px),
  //   radial-gradient(#7bded9 30%, transparent 0, transparent 11px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  animation: loop_dot 2s linear infinite;
}

@keyframes loop_border {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -30px 0;
  }
}

@keyframes loop_dot {
  from {
    background-position: 0 0, 15px 15px;
  }

  to {
    background-position: -30px 0, -15px 15px;
  }
}
</style>
