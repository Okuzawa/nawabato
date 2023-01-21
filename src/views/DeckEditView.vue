<template>
  <div class="post">
    <div>
      <label>デッキ名</label>
      <input type="text" v-model="deckName"/>
    </div>
    <div class="edit">
      <h4>マス合計:{{totalCount}}</h4>
      <div v-if="editType == 1">
        <DeckInfo :deck="loadDeck" @pick="pickUp" class="deck-list"/>
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
    getTotalCount: function(deck){
      let totalCount = 0;
      deck.forEach(item=>{
        totalCount += item.count;
      });
      return totalCount;
    },
    pickUp: function(index){
      this.selectIndex = index;
      this.editType = 2;
    },
    changeCard: function(id){
      let data = this.$store.getters.getCardList(id)
      if(id != 0 && this.myDeck.indexOf(data) != -1) return;
      this.myDeck[this.selectIndex] = data;
      this.editType = 1;
      this.totalCount = this.getTotalCount(this.myDeck);
    },
    saveDeck: function(){
      this.clickEvent();
      let cardIDList=[];
      this.myDeck.forEach(item=>{
        cardIDList.push(item.id);
      });
      this.$store.commit("SaveDeck", { name: this.deckName, deck:cardIDList });
    }
  },
  computed: {
    loadDeck: {
      get: function () {
        return this.myDeck;
      },
      set: function (id) {
        this.myDeck.push(this.$store.getters.getCardList(id));
      },
    },
  },
  mounted: function(){
    this.$store.state.db_deck_list[this.$store.state.currentDeck].deck.
    forEach(id => {
      this.loadDeck = id;
    });
    this.deckName = this.$store.state.db_deck_list[this.$store.state.currentDeck].name;
    this.totalCount = this.getTotalCount(this.myDeck);
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