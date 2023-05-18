import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(dayOfYear)
  nuxtApp.provide('dayjs', dayjs)
})
