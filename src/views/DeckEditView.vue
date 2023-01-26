<template>
  <div class="post">
    <div>
      <label>デッキ名</label>
      <input type="text" v-model="deckName"/>
    </div>
    <div class="edit">
      <h4>マス合計:{{totalCount}}</h4>
      <div v-if="editType == 1">
        <DeckInfo :deck="myDeck" @pick="pickUp" class="deck-list"/>
        <button type="button" class="btn btn-success" @click="saveDeck">保存</button>
      </div>
      <div v-if="editType == 2">
        <CardList :myDeck="myDeck" class="card-list" @change="changeCard"/>
        <button type="button" class="btn btn-secondary" @click="editType = 1">キャンセル</button>
      </div>
    </div>
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
  props: {
    clickEvent:Function,
  },
  data() {
    return {
      selectIndex: 0,
      totalCount: 0,
      myDeck: [],
      deckName: "",
      editType: 1,
    };
  },
  methods: {
    pickUp: function(index){
      this.selectIndex = index;
      this.editType = 2;
    },
    changeCard: function(id){
      let card = this.$store.getters.findCardById(id)
      if(id != 0 && this.myDeck.indexOf(card) != -1) return;
      this.myDeck[this.selectIndex] = card;
      this.editType = 1;
      this.totalCount = this.$store.getters.getTotalCount(this.myDeck);
    },
    loadDeck: function () {
      let deck = this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;
      this.myDeck = this.$store.getters.findCardsById(deck);
      this.totalCount = this.$store.getters.getTotalCount(this.myDeck);
    },
    saveDeck: function(){
      this.clickEvent();
      let deck=[];
      this.myDeck.forEach(card=>{
        deck.push(card.id);
      });
      this.$store.commit("saveDeck", { name: this.deckName, deck:deck });
    }
  },
  created() {
    this.loadDeck()
    this.deckName = this.$store.state.tb_deckList[this.$store.state.currentDeck].name;
  }
};
</script>

<style lang="scss" scoped>
.post {
  .card-list {
    transform: scale(0.7);
    margin-top: -90px;
    margin-bottom: -90px
  }
}
</style>