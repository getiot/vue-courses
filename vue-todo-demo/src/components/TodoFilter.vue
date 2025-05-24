<template>
  <div class="filter">
    <button
      v-for="type in filters"
      :key="type"
      :class="{ active: type === modelValue }"
      @click="$emit('update:modelValue', type)"
    >
      {{ type }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const filters = ['全部', '未完成', '已完成']
</script>

<style scoped>
.filter button {
  margin-right: 8px;
}
.filter .active {
  font-weight: bold;
}
</style>