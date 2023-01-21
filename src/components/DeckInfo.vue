<template>
  <div class="container">
    <div v-for="(value, key, index) in cardList" v-bind:key="index">
      <CardItem
        :id="value.id"
        :name="value.name"
        :count="value.count"
        :cost="value.cost"
        :map="value.map"
        :block="this.$store.state.blocks[1]"
        :sp_block="this.$store.state.blocks[2]"
        @click="pickCard(key)"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/parts/CardItem.vue";

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
    pickCard: function (index){
      this.$emit('pick', index);
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #eeffeb;
  width: 280px;
  height: 400px;
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
