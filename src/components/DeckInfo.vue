<template>
  <div class="container">
    <div v-for="(value, key, index) in cardList" v-bind:key="index">
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
  props: {
    deck: Array,
  },
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    this.loadDeck(this.deck);
  },
  methods: {
    loadDeck: function (deck) {
      this.cardList = deck;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #eeffeb;
  width: 550px;
  height: 182px;
  border: solid 5px #260064;
  padding: 0px;
  display: flex;
  overflow-x: scroll;
}
.CardItem {
  width: 20%;
}
</style>
