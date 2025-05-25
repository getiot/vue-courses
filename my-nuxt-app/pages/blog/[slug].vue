<!-- pages/blog/[slug].vue -->
<template>
  <div>
    <h1>文章详情：{{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
</script>