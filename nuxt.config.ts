import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  // publicRuntimeConfig: {
  //   BASE_URL: process.env.BASE_URL,
  //   API_KEY: process.env.VUE_APP_API_KEY,
  //   AUTH_DOMAIN: process.env.VUE_APP_AUTH_DOMAIN,
  //   DATABASE_URL: process.env.VUE_APP_DATABASE_URL,
  //   PROJECT_ID: process.env.VUE_APP_PROJECT_ID,
  //   STORAGE_BUCKET: process.env.VUE_APP_STORAGE_BUCKET,
  //   MESSAGING_SENDER_ID: process.env.VUE_APP_MESSAGING_SENDER_ID,
  //   APP_ID: process.env.VUE_APP_APP_ID,
  //   // MEASUREMENT_ID: process.env.VUE_APP_MEASUREMENT_ID,
  // },
});
