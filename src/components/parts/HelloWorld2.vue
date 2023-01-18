<template>
  <div class="hello2">
    <h3>{{ props.msg }}</h3>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
    msg:String
});
</script>

<style scoped lang="scss">
h3 {
  margin: 0;
  color: #6c42b9;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
</style>
