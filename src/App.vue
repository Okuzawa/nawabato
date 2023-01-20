<template>
  <h1>ナワバトラー</h1>

  <label>選択中のデッキ ： {{ store.state.db_deck_list[store.state.currentDeck].name }}</label>
  <button v-on:click="openModal">デッキ変更</button>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          v-on:click="closeModal"
        ></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
        <div v-if="store.state.isLoading">
          <p>読み込み中</p>
        </div>
        <div v-else id="top-list">
          <DeckListView v-if="joinType == 1"/>
          <DeckEditView v-if="joinType == 2" />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          v-on:click="joinType = 1"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary" v-on:click="joinType = 2">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "./store";

import src_frame from "./assets/image/blocks/frame.png";
import src_yellow_block from "./assets/image/blocks/yellow_block.png";
import src_orange_block from "./assets/image/blocks/orange_block.png";

import DeckListView from "./views/DeckListView.vue";
import DeckEditView from "./views/DeckEditView.vue";

function init() {
  store.commit("addBlockSrc", { src: src_frame });
  store.commit("addBlockSrc", { src: src_yellow_block });
  store.commit("addBlockSrc", { src: src_orange_block });

  store.dispatch("addCardListAsync");

  store.commit("createUserData");
}
init();

console.log( "db:",store.state.db_deck_list );
const joinType = ref(1);

const showContent = ref(false);
const openModal = () => {
  console.log(store.state.currentDeck);
  showContent.value = true;
};

const closeModal = () => {
  console.log("close");
  showContent.value = false;
};
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #b542b9;
    }
  }
}
#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 100%;
  padding: 1em;
  background: #fff;
}
#top-list {
  margin: 0px -100px;
}
</style>