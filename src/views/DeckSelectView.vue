<template>
  <div class ="deckSelect">
  <label>選択中のデッキ ：
    {{ store.state.tb_deckList[store.state.currentDeck].name }}</label>
  <button @click="openModal">デッキ変更</button>
  </div>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-header">
        <h5 class="modal-title" >デッキ一覧</h5>
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
          <DeckListView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "@/store";

import DeckListView from "@/views/DeckListView.vue";

const showContent = ref(false);
const openModal = () => {
  showContent.value = true;
};
const closeModal = () => {
  showContent.value = false;
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
.deckSelect{
  margin-top: 10px;
}
</style>
