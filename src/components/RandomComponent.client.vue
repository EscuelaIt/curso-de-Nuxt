<script setup>
localStorage.setItem('foo', 'A foo')

const localStorageItem = ref('')

onMounted(() => {
  localStorageItem.value = localStorage.getItem('foo')
})
</script>

<template>
  <div>
    <h1>Universal app</h1>
    <span>Local storage item: {{ localStorageItem }}</span>
  </div>
</template>
