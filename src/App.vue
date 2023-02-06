<template>
  <div v-if="store.state.gameMainPhase == 0">
    <h2>ナワバトラー</h2>
    <HomeView />
    <DeckManagerView />
    <div>
      <img id="rule" src="@/assets/image/rule.png">
    </div>
  </div>
  <div v-else-if="store.state.gameMainPhase == 1">
    <h2>ロビー</h2>
    <LobbyView />
    <DeckSelectView/>
  </div>
  <div v-else-if="store.state.gameMainPhase == 2">
    <GameView />
  </div>
</template>

<script setup>
import store from "./store";

import src_frame from "@/assets/image/blocks/frame.png";
import src_yellow from "@/assets/image/blocks/yellow_block.png";
import src_orange from "@/assets/image/blocks/orange_block.png";
import src_orange_fire from "@/assets/image/blocks/orange_fire_block.png";
import src_blue from "@/assets/image/blocks/blue_block.png";
import src_sky from "@/assets/image/blocks/sky_block.png";
import src_sky_fire from "@/assets/image/blocks/sky_fire_block.png";
import src_default from "@/assets/image/blocks/default_block.png";
import src_null from "@/assets/image/blocks/null_block.png";
// import src_null from "@/assets/image/blocks/frame_black.png";

import LobbyView from "./views/LobbyView.vue";
import HomeView from "./views/HomeView.vue";
import DeckManagerView from "./views/DeckManagerView.vue";
import DeckSelectView from "./views/DeckSelectView.vue";
import GameView from "./views/GameView.vue";

function init() {
  store.commit("addBlockSrc", { src: src_frame });
  store.commit("addBlockSrc", { src: src_yellow });
  store.commit("addBlockSrc", { src: src_blue });
  store.commit("addBlockSrc", { src: src_orange });
  store.commit("addBlockSrc", { src: src_sky });
  store.commit("addBlockSrc", { src: src_orange_fire });
  store.commit("addBlockSrc", { src: src_sky_fire });
  store.commit("addBlockSrc", { src: src_default });
  store.commit("addBlockSrc", { src: src_null });

  store.dispatch("addCardListAsync");
  store.dispatch("addStageListAsync");

  store.commit("createUserData");
  store.commit("eraseBufRoom");
}
init();
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#rule{
  width: 50%;
  height: 50%;
}
</style>