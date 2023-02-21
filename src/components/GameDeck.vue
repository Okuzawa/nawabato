<template>

  <button @click="openModal">デッキ確認</button>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-body">
        <div id="top-list">
          <div class="container">
            <div v-for="(value, key, index) in props.deck" :key="index">
              <CardItem class="none"
                :id="value.id"
                :name="value.name"
                :count="value.count"
                :cost="value.cost"
                :map="value.map"
                :block="store.getters.getBlockSrc(1)"
                :sp_block="store.getters.getBlockSrc(2)"
                :select="{ select: props.usedCard.includes(value) ? true:false }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary transitionBtn" @click="closeModal">
          <p>閉じる</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,defineProps } from "vue";
import store from "@/store";
import CardItem from "@/components/parts/CardItem.vue";

const showContent = ref(false);
const openModal = () => {
  showContent.value = true;
};
const closeModal = () => {
  showContent.value = false;
};

const props = defineProps({
  deck: Array,
  usedCard: Array,
});
</script>

<style scoped lang="scss">
.container {
  background-color: #eeffeb;
  width: 280px;
  height: 400px;
  border: solid 5px #260064;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
  .none{
    pointer-events: none;
  }
}
.container::-webkit-scrollbar {
  display: none;
}

#overlay {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

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
