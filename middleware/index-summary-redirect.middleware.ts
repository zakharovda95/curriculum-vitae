import { navigateTo, defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name === 'index') {
    return navigateTo({ name: 'index-summary' });
  }
});
