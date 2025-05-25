<template>
  <div>
    <h1>页面未找到</h1>
    <p>{{ error.statusCode }} - {{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>