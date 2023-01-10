<template>
  <div class="post">
    <HelloWorld class="text" msg="デッキ名"/>
    <DeckInfo class="list" v-bind:deck="this.myDeck"/>
    <HelloWorld class="text" msg="カード一覧"/>
    <CardList class="list" />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import DeckInfo from "@/components/DeckInfo.vue";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
    CardList,
    DeckInfo,
  },
  data() {
    return {
      myDeck: [],
    };
  },
  mounted() {
    this.loadDeck();
  },
  methods: {
    loadDeck: function () {
      var cardList = [3,9,12,15,18,21,24,27,30,22,33,11,44,1,5]
      for (let index = 0; index < cardList.length; index++) {
        this.myDeck.push(this.$store.state.cardList[cardList[index]]);
      }
      /*cardList.forEach(function(id){
        this.myDeck.push(this.$store.state.cardList[id]);
      });*/
    },
  },
};
</script>

<style>
.hello {
  transform: scale(0.8);
}
</style>