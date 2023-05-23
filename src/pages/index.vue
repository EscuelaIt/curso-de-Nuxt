<script setup>
const show = ref(false)
const nuxtApp = useNuxtApp()
const user = useState('user', () => 'Pablo')
const name = useName('Luisa')

const setUser = (name) => {
  user.value = name
}

const Checkbox = resolveComponent('Checkbox')
const MyComponent = resolveComponent('UiMyComponent')
</script>

<template>
  <p @click="setUser('Miguel')">{{ user }}</p>
  <p @click="name = 'Pepa'">State name: {{ name }}</p>

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

    <hr>

    <p>{{ $dayjs().dayOfYear() }}</p>

  </section>
</template>
