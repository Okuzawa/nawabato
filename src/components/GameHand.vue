<template>
  <div class="container">
    <div v-for="(value, key, index) in props.deck" :key="index">
      <CardItem
        :id="value.id"
        :name="value.name"
        :count="value.count"
        :cost="value.cost"
        :map="value.map"
        :block="store.state.blocks[1]"
        :sp_block="store.state.blocks[2]"
        @click="pickCard(key)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
import store from "@/store";
import CardItem from "@/components/parts/CardItem.vue";

const props = defineProps({
    deck:Array
});

const emit = defineEmits(['pick'])
const pickCard = (index) =>{
  emit('pick', index);
}
</script>

<style scoped>
.container {
  background-color: #eeffeb;
  width: 370px;
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
