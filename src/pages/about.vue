<script setup>
const navigate = () => {
  navigateTo({ path: '/about/about1', params: { user: 1 }})
}
</script>

<template>
  <h1 class="font-bold text-2xl">About Page</h1>
  <NuxtLink to="/about/about1">About 1</NuxtLink>
  <NuxtLink to="/about/about2">About 2</NuxtLink>
  
  <a @click="navigate()">Navigate</a>

  <NuxtPage />
</template>
