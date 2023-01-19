<template>
  <div class="deckList">
    <HelloWorld2 msg="デッキ一覧"/>
    <div class="lsit" v-for="(value, key, index) in this.$store.state.deckList" :key="index">
      <button class="btn btn-outline-secondary" @click="this.$router.push({name:'deck-edit',params:{ deckID: value.name }})">
        <p>{{index}}</p>
        <p>{{ value.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld2 from '@/components/HelloWorld2.vue'

export default {
  name: "CardListView",
  components: {
    HelloWorld2,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.deckList .list{
  background-color: #88ff00;
  margin: 0px 0px;
  padding: 0px 0px;
  float: left;
}
.deckList button {
  background-color: #00eeff;
  width: 150px;
  height: 50px;
  margin: 0px 0px;
  padding: 0px 0px;
}
.deckList .CardItem {
  transform: scale(0.8);
  margin: -10px 0px;
  padding: 0px 0px;
}
</style>