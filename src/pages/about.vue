<script setup>
definePageMeta({
  layout: 'orange',
  middleware: [
    function defineNuxtRouteMiddleware(to, from) {
      console.log('to', to)
      console.log('from', from)
    },
    'auth'
  ]
})
const navigate = () => {
  navigateTo({ path: '/about/about1', params: { user: 1 }})
}
const changeLayout = () => {
  setPageLayout('default')
}
</script>

<template>
  <h1 class="font-bold text-2xl">About Page</h1>
  <NuxtLink to="/about/about1">About 1</NuxtLink>
  <NuxtLink to="/about/about2">About 2</NuxtLink>

  <a @click="navigate()">Navigate</a>
  <button class="border border-black rounded" @click="changeLayout">Cambiar layout</button>
</template>
