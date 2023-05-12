<script setup>
defineProps({
  error: Object
})
</script>

<template>
  {{ error }}

  <button class="border border-black rounded" @click="clearError({ redirect: '/' })">Limpiar error</button>
</template>