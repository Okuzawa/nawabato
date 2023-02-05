<template>
  <Transition mode="out-in">
    <slot name="face" v-if="props.isFaceUp" />
    <slot name="back" v-else />
  </Transition>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    card:Array,
    isFaceUp: Boolean
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: transform 300ms;
}

.v-enter-from,
.v-leave-to {
  transform: rotateY(90deg);
}
</style>
