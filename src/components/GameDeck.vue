<template>

  <button @click="openModal">デッキ確認</button>

  <div id="overlay" v-show="showContent">
    <div id="content">
      <div class="modal-body">
        <div id="top-list">
          <div class="container">
            <div v-for="(value, key, index) in props.deck" v-bind:key="index">
              <CardItem
                :id="value.id"
                :name="value.name"
                :count="value.count"
                :cost="value.cost"
                :map="value.map"
                :block="store.getters.getBlockSrc(1)"
                :sp_block="store.getters.getBlockSrc(2)"
                :isDisabled="{ disabled: false }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-light transitionBtn"
          @click="closeModal"
        >
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
}
.container::-webkit-scrollbar {
  display: none;
}
</style>
