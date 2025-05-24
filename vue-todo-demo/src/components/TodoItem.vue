<!-- src/components/TodoItem.vue -->
<template>
  <li :class="{ done: todo.done }">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="() => emit('toggle', todo.id)"
    />
    <span v-if="!isEditing" @dblclick="startEdit">{{ todo.text }}</span>
    <input
      v-else
      v-model="editText"
      @blur="submitEdit"
      @keyup.enter="submitEdit"
      @keyup.esc="cancelEdit"
      ref="inputRef"
    />
    <button @click="() => emit('remove', todo.id)">删除</button>
  </li>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const props = defineProps<{
  todo: {
    id: number
    text: string
    done: boolean
  }
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
  (e: 'edit', payload: { id: number; text: string }): void
}>()

const isEditing = ref(false)
const editText = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const startEdit = () => {
  isEditing.value = true
  editText.value = props.todo.text
  nextTick(() => inputRef.value?.focus())
}

const submitEdit = () => {
  if (editText.value.trim()) {
    emit('edit', { id: props.todo.id, text: editText.value.trim() })
  }
  isEditing.value = false
}

const cancelEdit = () => {
  isEditing.value = false
}
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
  border-bottom: 1px solid #eee;
}
li button {
  padding: 4px 8px;
  font-size: 0.8rem;
}
.done span {
  text-decoration: line-through;
  color: #999;
}
</style>
