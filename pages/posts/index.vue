<script setup>
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<template>
  <h1 class="text-3xl font-bold mb-10">Posts Page</h1>
  <section class="grid grid-cols-4 gap-10">
    <article
      v-for="{ title, id } in posts" :key="id"
      class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm"
    >
      <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <NuxtLink :to="`/posts/${id}`">
          <h3 class="mt-0.5 text-lg font-medium text-gray-900">
            {{ title }}
          </h3>
        </NuxtLink>
      </div>
    </article>
  </section>
</template>
