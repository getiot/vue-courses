<template>
  <div>
    <header>
      <h1>我的网站</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>© 2025 我的名字</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1em;
}
main {
  padding: 1em;
}
footer {
  background: #f1f1f1;
  padding: 1em;
  text-align: center;
}
</style>