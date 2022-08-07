import { navigateTo, defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name === 'index' && to.name === 'index-summary') {
    return navigateTo({ name: 'index-summary' });
  }
});
