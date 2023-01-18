<template>
  <div class="container">
    <div
      v-for="(value, key, index) in this.$store.state.cardList"
      v-bind:key="index"
    >
      <CardItem
        :name="value.name"
        :count="value.count"
        :cost="value.cost"
        :map="value.map"
        :block="this.$store.state.blocks[1]"
        :sp_block="this.$store.state.blocks[2]"
      />
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
    return {};
  },
  created: function () {},
};
</script>

<style scoped>
.container {
  background-color: #008b8b;
  width: 550px;
  height: 500px;
  border: solid 5px #260064;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
}
.container::-webkit-scrollbar {
  display: none;
}
</style>
