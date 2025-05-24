<!-- src/App.vue -->
<template>
  <div class="app">
    <h1>📋 我的 ToDo 应用</h1>
    <TodoInput @add="addTodo" />

    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="deleteTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import TodoItem from './components/TodoFilter.vue'

interface Todo {
  id: number
  text: string
}

const todos = ref<Todo[]>([])

const addTodo = (text: string) => {
  todos.value.push({
    id: Date.now(),
    text
  })
}

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>