// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-calendly", "nuxt-icon"],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }]
})
