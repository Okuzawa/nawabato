<template>
  <h1>ナワバトラー</h1>
  <LobbyView />
  <label
    >選択中のデッキ ：
    {{ store.state.db_deck_list[store.state.currentDeck].name }}</label
  >
  <button v-on:click="openModal">デッキ変更</button>
  <button @click="resetData">データ削除</button>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-header">
        <h5 class="modal-title" v-if="joinType == 1">デッキ一覧</h5>
        <h5 class="modal-title" v-if="joinType == 2">デッキ編集</h5>
        <button
          type="button"
          class="btn-close"
          v-on:click="closeModal"
        ></button>
      </div>
      <div class="modal-body">
        <div v-if="store.state.isLoading">
          <p>読み込み中</p>
        </div>
        <div v-else id="top-list">
          <DeckListView v-if="joinType == 1" />
          <DeckEditView :clickEvent="openModal" v-if="joinType == 2" />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary transitionBtn"
          v-on:click="joinType = 2"
          v-if="joinType == 1"
        >
          <p>編集へ</p>
        </button>
        <button
          type="button"
          class="btn btn-primary transitionBtn"
          v-on:click="joinType = 1"
          v-if="joinType == 2"
        >
          <p>デッキ一覧へ</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "./store";

import src_frame from "@/assets/image/blocks/frame.png";
import src_yellow_block from "@/assets/image/blocks/yellow_block.png";
import src_orange_block from "@/assets/image/blocks/orange_block.png";

import DeckListView from "./views/DeckListView.vue";
import DeckEditView from "./views/DeckEditView.vue";
import LobbyView from "./views/LobbyView.vue";

function init() {
  store.commit("addBlockSrc", { src: src_frame });
  store.commit("addBlockSrc", { src: src_yellow_block });
  store.commit("addBlockSrc", { src: src_orange_block });

  store.dispatch("addCardListAsync");

  store.commit("createUserData");
  store.commit("loadBufRoomId");
  store.commit("initFirestore");
}
init();

const joinType = ref(0);

const showContent = ref(false);
const openModal = () => {
  joinType.value = 1;
  showContent.value = true;
};
const closeModal = () => {
  joinType.value = 0;
  showContent.value = false;
};
const resetData = () => {
  localStorage.removeItem("user_id");
  localStorage.removeItem("tb_deck");
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
  .transitionBtn {
    height: 35px;
  }
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