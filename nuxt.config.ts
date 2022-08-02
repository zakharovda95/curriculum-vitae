import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  // router: {
  //   scrollBehavior(to) {
  //     if (to.hash) {
  //       return { el: to.hash, behavior: 'smooth' };
  //     } else {
  //       return { top: 0, left: 0 };
  //     }
  //   },
  // },
});
