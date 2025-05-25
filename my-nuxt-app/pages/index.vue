<script setup lang="ts">
useHead({
  title: '我的 Nuxt 博客首页',
  meta: [
    { name: 'description', content: '这是一个使用 Nuxt 构建的个人博客首页。' },
    { name: 'keywords', content: 'Nuxt,博客,Vue,SEO' },
    { property: 'og:title', content: '我的博客' },
    { property: 'og:description', content: '欢迎访问我的 Nuxt 博客。' },
    { property: 'og:type', content: 'website' },
  ]
})
const counter = useCounter()
const { $hello } = useNuxtApp()
console.log('首页：', $hello())
</script>

<template>
  <h1>首页</h1>
  <nav>
    <NuxtLink to="/">首页</NuxtLink> |
    <NuxtLink to="/hello">Hello</NuxtLink> |
    <NuxtLink to="/about">关于</NuxtLink> |
    <NuxtLink to="/admin">后台</NuxtLink>
  </nav>
  <MyButton>点击我</MyButton>
  <div>
    <p>当前计数：{{ counter.count }}</p>
    <button @click="counter.increment">增加</button>
  </div>
</template>