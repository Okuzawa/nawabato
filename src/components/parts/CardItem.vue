<template>
  <div class="CardItem">
    <button class="card-item btn btn-outline-secondary" @click="select">
      <canvas ref="cardCanvas"></canvas>
      <p class="name">{{ name }}</p>
      <div class="count">
        <p>{{ count }}</p>
      </div>
      <div>
        <p class="sp">消費SP</p>
        <p class="cost">{{ cost }}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    id:Number,
    name: String,
    count: Number,
    cost: Number,
    map: Array,
    block:String,
    sp_block:String,
  },
  data() {
    return {
      isSelect:false,
    };
  },
  mounted() {
    this.ctx = this.$refs.cardCanvas.getContext("2d");
    this.imageDraw(this.map);
  },
  methods: {
    imageDraw: function (map) {
      let index = 0;
      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          let image = new Image();
          switch (map[index]) {
            case 0:
              image.src = this.$store.state.blocks[0];
              break;
            case 1:
              image.src = this.block;
              break;
            case 2:
              image.src = this.sp_block;
              break;
            default:
              break;
          }
          image.onload = () => {
            this.ctx.drawImage(image, x * 36+6, y * 18+3, 36, 18);
          };
          index++;
        }
      }
    },
    select:function () {
      console.log(this.id,this.name);
    }
  },
};
</script>

<style>
.card-item {
  width: 90px;
  height: 150px;
}
.card-item canvas {
  background-color: #a7a6a6;
  width: 80px;
  height: 80px;
  margin: 0px -10px;
}
.card-item .name {
  font-size: 0.5em;
  line-height: 1;
}
.card-item .count {
  margin: 1px;
  font-size: 1.5em;
}
.card-item .sp {
  font-size: 0.3em;
}
.card-item .cost {
  font-size: 1em;
}
.card-item div {
  display: inline-block;
  vertical-align: top;
  line-height: 0.1;
  margin: -10px 0px;
}
</style>
