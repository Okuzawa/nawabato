<template>
  <div class="post">
    <div>
      <label>デッキ名</label>
      <input type="text" />
    </div>
    <DeckInfo :deck="loadDeck" class="deck-list" />
    <h4>カード一覧</h4>
    <CardList class="card-list" />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import DeckInfo from "@/components/DeckInfo.vue";

export default {
  components: {
    CardList,
    DeckInfo,
  },
  props: {},
  data() {
    return {
      myDeck: [],
      cardList: [],
    };
  },
  methods: {
    hoge: function () {
      this.cardList.push(0);
      this.loadDeck = 0;
    },
  },
  computed: {
    loadDeck: {
      get: function () {
        return this.myDeck;
      },
      set: function (id) {
        this.myDeck.push(this.$store.state.cardList[id]);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  h4 {
    margin-top: -20px;
  }
  .deck-list {
    transform: scale(0.7);
    margin-top: -20px;
  }
  .card-list {
    transform: scale(0.7);
    margin-top: -80px;
  }
}
</style>