<!-- src/App.vue -->
<template>
  <div class="app">
    <h1>📋 我的 ToDo 应用</h1>
    <TodoInput @add="addTodo" />
    <TodoFilter
      v-model:showPending="showPending"
      v-model:showCompleted="showCompleted"
    />
    <ul>
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
        @edit="editTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFilter from './components/TodoFilter.vue'

type Todo = {
  id: number
  text: string
  done: boolean
}

const todos = ref<Todo[]>([])
const showPending = ref(true)
const showCompleted = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('vue-todos')
  if (saved) {
    todos.value = JSON.parse(saved)
  }
})

watch(
  todos,
  (newTodos) => {
    localStorage.setItem('vue-todos', JSON.stringify(newTodos))
  },
  { deep: true }
)

const addTodo = (text: string) => {
  todos.value.push({
    id: Date.now(),
    text,
    done: false,
  })
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) todo.done = !todo.done
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter((t) => t.id !== id)
}

const editTodo = ({ id, text }: { id: number; text: string }) => {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) todo.text = text
}

const filteredTodos = computed(() => {
  return todos.value.filter((t) => {
    return (
      (t.done && showCompleted.value) ||
      (!t.done && showPending.value)
    )
  })
})
</script>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: auto;
  padding: 1em;
  font-family: system-ui, sans-serif;
}
ul {
  padding: 0;
}
</style>