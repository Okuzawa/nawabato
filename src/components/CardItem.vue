<template>
  <div class="CardItem">
      <button class="card-item btn btn-secondary">
        <canvas></canvas>
        <p class="ttl"><font size=auto>{{name}}</font></p>
        <div>
          <p><font size="7">{{count}}</font></p>
        </div>
        <div>
          <font size="4">
            <p>消費SP</p>
            <p>{{cost}}</p>
          </font>
        </div>
      </button>
  </div>
</template>

<script>
export default {
  name: 'cardItem',
  props: {
    name: String,
    count: Number,
    cost: Number
  }
}
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
.card-item .ttl {
  line-height: 1;
}
.card-item p {
  line-height: 0.6;
}
.card-item div {
  display: inline-block;
}
</style>
