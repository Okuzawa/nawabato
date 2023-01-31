<template>
    <button @click="add">ADD</button>
    <transition-group>
      <div v-for="(todo, index) in todos" :key="todo.key">
        <span>{{ todo.value }}</span
        ><input @click="remove(index)" type="button" value="x" />
      </div>
    </transition-group>
      <button @click="show = !show">
      click!
      </button>

    <transition>
      <div class="hoge" v-if="show">
        hogehoge
      </div>
    </transition>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      todos: [
        { key: 0, value: "hoge" },
        { key: 1, value: "hoge" },
        { key: 2, value: "hoge" },
      ],
      nextNum: 2,
      show: false,
    };
  },

  methods: {
    add: function () {
      const value = "hoge";
      const todo = {
        key: (this.nextNum += 1),
        value,
      };
      this.todos.push(todo);
    },
    remove: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>