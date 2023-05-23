<script setup>
definePageMeta({
  layout: 'orange',
  middleware: [
    function defineNuxtRouteMiddleware(to, from) {
      // console.log('to', to)
      // console.log('from', from)
    },
    // 'auth'
  ]
})

const description = ref('This is about page')

const postName = 'Title post'
useHead({
  title: 'Blog EscuelaIT',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${postName} - ${titleChunk}` : 'Site Title'
  }
})

useSeoMeta({
  description: () => description.value
})

const user = useState('user')
const name = useName()

const navigate = () => {
  navigateTo({ path: '/about/about1', params: { user: 1 }})
}
const changeLayout = () => {
  setPageLayout('default')
}
</script>

<template>
  <!-- <Head>
    <Title>About Page SEO</Title>
    <Meta name="description" content="This is about page SEO"/>
  </Head> -->

  <p>{{ user }}</p>
  <p>{{ name }}</p>

  <h1 class="font-bold text-2xl block" @click="description = 'He hecho click en el titulo'">About Page</h1>
  <NuxtLink to="/about/about1">About 1</NuxtLink>
  <NuxtLink to="/about/about2">About 2</NuxtLink>

  <a @click="navigate()">Navigate</a>
  <button class="border border-black rounded" @click="changeLayout">Cambiar layout</button>
</template>
