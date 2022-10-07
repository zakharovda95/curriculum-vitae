// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/public/favicon.png' }],
});
