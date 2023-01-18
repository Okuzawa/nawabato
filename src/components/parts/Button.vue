<template>
  <div class="hogeButton" >
    <button class="temp" @click="onFocus();$emit('clickEvent')">
      <p>hoge</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "hogeButton",
  props: {
    clickEvent:Function,
  },
  data() {
    return {
      'focus': this.onFocus,
    };
  },
  mounted() {
  },
  methods: {
    onFocus: function() {
      console.log('フォーカスイン');
    },
    onBlur: function() {
      console.log('フォーカスアウト');
    },
    onChange: function() {
      console.log('値変更');
    }
  }
};
</script>

<style scoped>
</style>>
