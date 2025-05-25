export default defineNuxtPlugin(nuxtApp => {
  console.log('插件初始化！')

  nuxtApp.provide('hello', () => '你好，我是插件注入的函数！')
})