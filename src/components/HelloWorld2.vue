<template>
  <div class="hello2">
    <h1>{{ props.msg }}</h1>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
    msg:String
});
</script>

<style scoped lang="scss">
h1 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
h1 {
  color: #6c42b9;
}
</style>
