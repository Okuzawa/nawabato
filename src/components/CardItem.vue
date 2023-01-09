<template>
  <div class="CardItem">
    <button class="card-item btn btn-secondary">
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
import src_frame from "../assets/blocks/frame.png";

export default {
  name: "CardItem",
  props: {
    name: String,
    count: Number,
    cost: Number,
    map: Array,
    block:String,
    sp_block:String,
  },
  data() {
    return {
      ctx:null,
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
              image.src = src_frame;
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
            this.ctx.drawImage(image, x * 38, y * 19, 38, 19);
          };
          index++;
        }
      }
    },
  },
};
</script>

<style scoped>
.card-item {
  width: 150px;
  height: 250px;
}
.card-item canvas {
  background-color: #a7a6a6;
  width: 130px;
  height: 130px;
  margin: 0px -10px;
}
.card-item .name {
  font-size: auto;
  line-height: 1;
}
.card-item .count {
  font-size: 300%;
}
.card-item .sp {
  font-size: 100%;
}
.card-item .cost {
  font-size: 150%;
}
.card-item div {
  display: inline-block;
  line-height: 0.6;
}
</style>
