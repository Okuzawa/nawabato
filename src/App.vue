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
</template>

<script>
import src_frame from "./assets/blocks/frame.png";
import src_yellow_block from "./assets/blocks/yellow_block.png";
import src_orange_block from "./assets/blocks/orange_block.png";

export default {
  created: function () {
    this.$store.commit("addBlockSrc", { src: src_frame });
    this.$store.commit("addBlockSrc", { src: src_yellow_block });
    this.$store.commit("addBlockSrc", { src: src_orange_block });

    this.$store.dispatch("addCardListAsync");

    console.log(this.$store.state.db);
    if(this.$store.state.db == null) this.$store.dispatch("createUserData");
    console.log(this.$store.state.db);
  },
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
</style>