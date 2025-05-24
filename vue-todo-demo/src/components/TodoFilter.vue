<!-- src/components/TodoFilter.vue -->
<template>
  <div class="filters">
    <label>
      <input
        type="checkbox"
        :checked="showPending"
        @change="togglePending"
      />
      显示未完成
    </label>
    <label>
      <input
        type="checkbox"
        :checked="showCompleted"
        @change="toggleCompleted"
      />
      显示已完成
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  showPending: boolean
  showCompleted: boolean
}>()

const emit = defineEmits<{
  (e: 'update:showPending', value: boolean): void
  (e: 'update:showCompleted', value: boolean): void
}>()

const togglePending = (e: Event) => {
  emit('update:showPending', (e.target as HTMLInputElement).checked)
}

const toggleCompleted = (e: Event) => {
  emit('update:showCompleted', (e.target as HTMLInputElement).checked)
}
</script>

<style scoped>
.filters {
  margin: 1em 0;
  display: flex;
  gap: 1em;
}
label {
  cursor: pointer;
  font-size: 14px;
}
</style>
