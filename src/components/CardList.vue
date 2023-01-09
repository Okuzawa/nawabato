<template>
  <div class="CardList">
    <div class="container">
      <div v-for="(value, key, index) in cardList" v-bind:key="index">
        <CardItem :name="value.name" :count="value.count" :cost="value.cost" :map="value.map"/>
      </div>
      <!--<CardItem :name="hoge" :count="10" :cost="3" :map="[0,0,0,1,1,1,0,0,0,0]"/>-->
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
/*import src_frame from "../assets/blocks/frame.png";
import yellow_block from "../assets/blocks/yellow_block.png";
import orange_block from "../assets/blocks/orange_block.png";*/

export default {
  name: "CardListView",
  components: {
    CardItem,
  },
  data() {
    return {
      cardList: []
    };
  },
  created: function () {
    var api_url =
      "https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";

    let cardList = this.cardList;

    fetch(api_url)
      .then(function (fetch_data) {
        return fetch_data.json();
      })
      .then(function (json) {
        for (var i in json) {
          //console.log(i,json[i].map);
          cardList.push({
            name: json[i].name,
            count: json[i].count,
            cost: json[i].cost,
            map: JSON.parse("[" + json[i].map + "]"),
          });
        }
      });
  },
};
</script>

<style scoped>
.container {
  background-color: #008b8b;
  width: 480px;
  height: 600px;
  border: solid 5px #006400;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
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
