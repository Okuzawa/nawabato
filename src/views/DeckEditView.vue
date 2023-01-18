<template>
  <div class="post">
    <h1>{{ deckID }}</h1>
    <Button @clickEvent="hoge" />
    <div>
      <label>デッキ名</label>
      <input type="text" />
      <button>保存</button>
    </div>
    <DeckInfo :deck="loadDeck" />
    <HelloWorld msg="カード一覧" />
    <CardList @clickEvent="hoge"/>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import DeckInfo from "@/components/DeckInfo.vue";
import HelloWorld from "@/components/parts/HelloWorld.vue";
import Button from "@/components/parts/Button.vue";

export default {
  components: {
    HelloWorld,
    CardList,
    DeckInfo,
    Button,
  },
  props: {
  },
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
  }
};
</script>

<style>
</style>