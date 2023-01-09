<template>
  <div class="CardList">
    <div class="container">
      <div v-for="(value, key, index) in this.$store.state.cardList" v-bind:key="index">
        <CardItem :name="value.name" :count="value.count" :cost="value.cost" :map="value.map"
        :block="this.$store.state.blocks[1]" :sp_block="this.$store.state.blocks[2]"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";

export default {
  name: "CardListView",
  components: {
    CardItem,
  },
  data() {
    return {
    };
  },
  created: function () {
    
  },
};
</script>

<style scoped>
.container {
  background-color: #008b8b;
  width: 460px;
  height: 600px;
  border: solid 5px #006400;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
}
.container::-webkit-scrollbar{
  display: none;
}
.card-item {
  background-color: #808080;
  width: 150px;
  height: 250px;
  border: solid 3px #b0c4de;
}
.card-item canvas {
  background-color: #696969;
  width: 130px;
  height: 130px;
}
.card-item .ttl {
  font-size: 25px;
  line-height: 1;
}
.card-item p {
  line-height: 0.5;
}
.card-item div {
  display: inline-block;
}
</style>
