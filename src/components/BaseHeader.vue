<template>
  <header class="border-b-2 flex justify-end px-6 py-4">
    <NuxtLink class="mr-2" to="/">Home</NuxtLink>
    <NuxtLink class="mr-2" to="/posts">Posts</NuxtLink>
    <NuxtLink class="mr-2" to="/articles">Local Articles</NuxtLink>
    <NuxtLink to="/users">Users</NuxtLink>
  </header>
</template>

<style>
.router-link-active {
  color: lightgreen;
}
</style>
