<script setup>
const route = useRoute()

const { data: user } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
</script>

<template>
  <p class="mb-6">{{ route.params.id }}</p>
  {{ user }}
  <!-- <h1 class="text-3xl font-bold">{{ user.name }}</h1>
  <NuxtLink :to="`/posts-${route.params.id}`">Ver posts</NuxtLink> -->
</template>
