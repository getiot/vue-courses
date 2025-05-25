export const useCounter = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})