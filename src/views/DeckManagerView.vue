<template>
  <label
    >選択中のデッキ ：
    {{ store.state.tb_deckList[store.state.currentDeck].name }}</label
  >
  <button @click="openModal">デッキ変更</button>
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
import store from "@/store";

import DeckListView from "@/views/DeckListView.vue";
import DeckEditView from "@/views/DeckEditView.vue";

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

<style scoped lang="scss">
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
