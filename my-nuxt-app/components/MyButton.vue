<template>
  <button class="my-btn"><slot /></button>
</template>

<style scoped>
.my-btn {
  padding: 8px 16px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.my-btn:hover {
  background-color: #0056b3;
}
</style>