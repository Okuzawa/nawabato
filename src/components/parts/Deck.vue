<template>
  <div class="container">
    <div
      v-for="(value, key, index) in props.deck"
      v-bind:key="index"
    >
      <CardItem class="none"
        :id="value.id"
        :name="value.name"
        :count="value.count"
        :cost="value.cost"
        :map="value.map"
        :block="store.getters.getBlockSrc(1)"
        :sp_block="store.getters.getBlockSrc(2)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import store from "@/store";
import CardItem from "@/components/parts/CardItem.vue";

const props = defineProps({
    deck:Array
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
</style>
