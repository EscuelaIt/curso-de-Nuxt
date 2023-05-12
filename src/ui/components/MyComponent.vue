<script setup>
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<template>
  <h1>My Component</h1>
</template>