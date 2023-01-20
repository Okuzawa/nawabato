<template>
  <h1>ナワバトラー</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Lobby">ロビー</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link to="/deck-list">デッキ一覧</router-link> |
    <router-link to="/deck-edit">デッキ編集</router-link>
  </nav>
  <router-view />

  <button v-on:click="openModal">Click</button>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <DeckInfo/>
      <p><button v-on:click="closeModal">close</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "./store";

import src_frame from "./assets/image/blocks/frame.png";
import src_yellow_block from "./assets/image/blocks/yellow_block.png";
import src_orange_block from "./assets/image/blocks/orange_block.png";

import DeckInfo from "./views/DeckListView.vue";

function init() {
  store.commit("addBlockSrc", { src: src_frame });
  store.commit("addBlockSrc", { src: src_yellow_block });
  store.commit("addBlockSrc", { src: src_orange_block });

  store.dispatch("addCardListAsync");

  console.log(store.state.db);
  if (store.state.db == null) store.dispatch("createUserData");
  console.log(store.state.db);
}
init();

const showContent = ref(false);
const openModal = () => {
  console.log("open");
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
</style>