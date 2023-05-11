<script setup>
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id)
  }
})
</script>

<template>
  <ContentDoc :path="`${$route.params.slug}`"></ContentDoc>
</template>