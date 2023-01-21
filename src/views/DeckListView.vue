<template>
  <div class="deckList">
    <h4>
      {{this.$store.state.db_deck_list[this.$store.state.currentDeck].name}}
      マス合計：{{ totalCount }}
    </h4>
    <div class="list">
      <div>
        <div
          class="name"
          v-for="(value, key, index) in this.$store.state.db_deck_list"
          :key="index"
        >
          <ul class="btn btn-outline-secondary" @click="selectDeck(key)">
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
  props: {},
  data() {
    return {
      totalCount: 0,
      myDeck: [],
    };
  },
  methods: {
    loadDeck: function () {
      this.myDeck.splice(0);
      let cardList = this.$store.state.db_deck_list[this.$store.state.currentDeck].deck;
      cardList.forEach((id) =>
        this.myDeck.push(this.$store.getters.getCardList(id))
      );
      this.totalCount = this.getTotalCount(this.myDeck)
    },
    selectDeck: function (index) {
      this.$store.state.currentDeck = index;
      this.loadDeck();
    },
    getTotalCount: function (deck) {
      let totalCount = 0;
      deck.forEach((item) => {
        totalCount += item.count;
      });
      return totalCount;
    },
  },
  created() {
    this.loadDeck();
  },
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
    background-color: #effeff;
    width: 85px;
    height: 30px;
    margin: 0px 0px;
    padding: 0px 0px;
    p {
      white-space: nowrap;
      font-size: 50%;
      color: black;
      margin: 5px 0px;
    }
  }
  .container {
    margin: 0px 0px;
    padding: 0px 0px;
  }
}
</style>