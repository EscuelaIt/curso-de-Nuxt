<script setup>
// definePageMeta({
//   validate: async (route) => {
//     return /^\d+$/.test(route.params.id)
//   }
// })

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - Local Articles`
  }
})
</script>

<template>
  <ContentDoc :path="`${$route.params.slug}`"></ContentDoc>
</template>