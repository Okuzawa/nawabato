<template>
  <div class="deckList">
    <h4>
      {{this.$store.state.tb_deckList[this.$store.state.currentDeck].name}}
      マス合計：{{ totalCount }}
    </h4>
    <div class="deList">
      <div>
        <div class="deName" v-for="(value, key, index) in this.$store.state.tb_deckList"
          :key="index">
          <button class="btn btn-outline-secondary" :class="{ disabled: value.deck.some(el=>el==0) }" @click="selectDeck(key)">
            <p>{{ value.name }}</p>
          </button>
        </div>
      </div>
      <Deck :deck="myDeck" />
    </div>
  </div>
</template>

<script>
import Deck from "@/components/parts/Deck.vue";
import utils from "@/utils";

export default {
  name: "CardListView",
  components: {
    Deck,
  },
  data() {
    return {
      totalCount: 0,
      myDeck: [],
    };
  },
  methods: {
    loadDeck: function () {
      let deck = this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;
      this.myDeck = this.$store.getters.findCardsById(deck);
      this.totalCount = utils.getTotalCount(this.myDeck);
    },
    selectDeck: function (index) {
      this.$store.state.currentDeck = index;
      this.loadDeck();
    },
  },
  created() {
    this.loadDeck();
  },
};
</script>

<style lang="scss" scoped>
.deckList {
  .deList {
    display: flex;
    justify-content: center;
    .deName {
      background-color: #daf9fc;
      display: block;
    }
  }
  button {
    width: 85px;
    height: 30px;
    margin: 0px 0px;
    padding: 0px 0px;
    p {
      white-space: nowrap;
      font-size: 50%;
      margin: 5px 0px;
    }
  }
  .container {
    margin: 0px 0px;
    padding: 0px 0px;
  }
}
</style>