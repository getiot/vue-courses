<!-- src/components/TodoInput.vue -->
<template>
  <div class="todo-input">
    <input
      v-model="newTask"
      @keyup.enter="submitTask"
      type="text"
      placeholder="请输入任务，按 Enter 添加"
    />
    <button @click="submitTask">添加</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const newTask = ref('')

const emit = defineEmits<{
  (e: 'add', taskText: string): void
}>()

const submitTask = () => {
  const text = newTask.value.trim()
  if (text) {
    emit('add', text)
    newTask.value = ''
  }
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.todo-input input {
  flex: 1;
  padding: 8px;
}
.todo-input button {
  padding: 8px 16px;
}
</style>