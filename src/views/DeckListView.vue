<template>
  <div class="deckList">
    <div class="list">
      <div>
        <div
          class="name"
          v-for="(value, key, index) in this.$store.state.deckList"
          :key="index"
        >
          <ul
            class="btn btn-outline-secondary"
            @click="selectDeck(key)"
          >
            <p>{{ value.name }}</p>
          </ul>
        </div>
      </div>
      <Deck :deck="myDeck" />
    </div>
  </div>
</template>

<script>
import Deck from "@/components/parts/Deck.vue";

export default {
  name: "CardListView",
  components: {
    Deck,
  },
  props: {
  },
  data() {
    return {
      myDeck: [],
    };
  },
  methods: {
    loadDeck: function () {
      this.myDeck.splice(0);
      let cardList = this.$store.state.deckList[this.$store.state.currentDeck].deck;
      cardList.forEach((id) =>
        this.myDeck.push(this.$store.getters.getCardList(id)));
      console.log(this.myDeck);
    },
    selectDeck: function(index){
      this.$store.state.currentDeck = index;
      this.loadDeck();
    }
  },
  created(){
    this.loadDeck();
  }
};
</script>

<style lang="scss" scoped>
.deckList {
  .list {
    display: flex;
    justify-content: center;
    .name {
      display: block;
    }
  }
  ul {
    background-color: #00eeff;
    width: 150px;
    height: 50px;
    margin: 0px 0px;
    padding: 0px 0px;
  }
  .container {
    margin: 0px 0px;
    padding: 0px 0px;
  }
}
</style>