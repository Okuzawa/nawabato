<template>
  <div class="CardItem">
    <button
      class="card-item btn btn-outline-secondary"
      :class="{ active: isSelect }"
      @click="OnClick();$emit('clickEvent')"
    >
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
    id: Number,
    name: String,
    count: Number,
    cost: Number,
    map: Array,
    block: String,
    sp_block: String,

    isActiv: {default: true},
    select: {default: false},
    clickEvent:Function,
  },
  data() {
    return {
      enabled: true,
      isSelect: false,
    };
  },
  mounted() {
    this.ctx = this.$refs.cardCanvas.getContext("2d");
    this.imageDraw(this.map);

    if(this.id == 0) return;
    this.enabled = this.isActiv.enabled;
    if(this.select.select != this.isSelect) this.isSelect = this.select.select;
  },
  watch: {
    map: function () {
      this.imageDraw(this.map);
    },
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
            this.ctx.drawImage(image, x * 36 + 6, y * 18 + 3, 36, 18);
          };
          index++;
        }
      }
    },
    OnClick: function () {
      if (!this.enabled) return;
      if (this.isSelect) this.isSelect = false;
      else this.isSelect = true;
    },
  },
};
</script>

<style lang="scss">
.card-item {
  width: 90px;
  height: 150px;
  canvas {
    background-color: #a7a6a6;
    width: 80px;
    height: 80px;
    margin: 0px -10px;
  }
  .name {
    font-size: 0.5em;
    line-height: 1;
  }
  .count {
    margin: 1px;
    font-size: 1.5em;
  }
  .sp {
    font-size: 0.3em;
  }
  .cost {
    font-size: 1em;
  }
  div {
    display: inline-block;
    vertical-align: top;
    line-height: 0.1;
    margin: -10px 0px;
  }
}
.btn {
  border-radius: 2px;
}
</style>
