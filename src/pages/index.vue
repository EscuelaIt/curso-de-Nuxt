<script setup>
const show = ref(false)

const Checkbox = resolveComponent('Checkbox')
const MyComponent = resolveComponent('UiMyComponent')
</script>

<template>
  <section>
    <h1 class="text-3xl">Home Page</h1>
    <button class="btn">Button</button>
    <hr>
    <button @click="show = !show" class="border border-black">Show / Hide</button>

    <component :is="show ? Checkbox : MyComponent" />

    <hr>

    <DevOnly>
      Version: 1.0.0
    </DevOnly>

  </section>
</template>
