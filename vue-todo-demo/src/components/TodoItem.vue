<!-- src/components/TodoItem.vue -->
<template>
  <li class="todo-item">
    <span>{{ todo.text }}</span>
    <button @click="emit('remove', todo.id)">删除</button>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  todo: {
    id: number
    text: string
  }
}>()

const emit = defineEmits<{
  (e: 'remove', id: number): void
}>()
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.todo-item button {
  padding: 4px 8px;
}
</style>