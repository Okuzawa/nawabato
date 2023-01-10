<template>
  <h1>ナワバトラー</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/deck-info">デッキ詳細</router-link>
  </nav>
  <router-view />
</template>

<script>
import src_frame from "./assets/blocks/frame.png";
import src_yellow_block from "./assets/blocks/yellow_block.png";
import src_orange_block from "./assets/blocks/orange_block.png";

export default {
  data() {
    return {
      cardList:[],
    };
  },
  created: function () {
    this.$store.commit("addBlockSrc", { src: src_frame });
    this.$store.commit("addBlockSrc", { src: src_yellow_block });
    this.$store.commit("addBlockSrc", { src: src_orange_block });

    this.$store.dispatch("addCardListAsync");
  },
};
</script>


<style lang="scss">
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