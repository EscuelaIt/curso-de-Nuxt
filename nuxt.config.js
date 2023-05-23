import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  devtools: {
    enabled: false
  },
  srcDir: 'src/',
  alias: {
    "@": fileURLToPath(new URL('./src/', import.meta.url))
  },
  css: ['@/assets/css/main.css'],
  components: [
    { path: '@/components', pathPrefix: false },
    { path: '@/ui/components', prefix: 'Ui' }
  ],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Blog Nuxt 3',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'Un blog con Nuxt 3' }
      ],
    }
  },
  routeRules: {
    '/users/**': { ssr: false },
  }
})
