<template>
  <div class="container">
    <transition-group>
      <div v-for="(value, key) in hand" :key="value.id">
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
    </transition-group>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, defineExpose,computed } from "vue";
import store from "@/store";
import CardItem from "@/components/parts/CardItem.vue";

const props = defineProps({
  deck: Array,
});

let hand = ref([]);
let pickIndex = ref(0)
const handIndex = computed(() => pickIndex.value);
console.log(handIndex)

const firestDrawCard = (count = 0, number = 4) => {
  hand.value.push(props.deck[count]);
  number--;
  count++;
  if (number > 0) setTimeout(() => firestDrawCard(count, number), 500);
};

const emit = defineEmits(["pick"]);
const pickCard = (index) => {
  pickIndex.value = index
  emit("pick", index);
};
defineExpose({
  firestDrawCard,
});
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 1.0s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.container {
  width: 370px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
}
.container::-webkit-scrollbar {
  display: none;
}
</style>
