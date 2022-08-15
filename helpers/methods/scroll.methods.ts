import { RuntimeNuxtHooks, useNuxtApp } from '#app';
import { HookKeys } from 'hookable';

export function scrollPreventer(event: Event): void {
  event.preventDefault();
}

export function disableScrollPreventer(): void {
  window.removeEventListener('wheel', scrollPreventer);
}

export function pageLifeCycleScrollBehavior(lifeCycle: HookKeys<RuntimeNuxtHooks>) {
  const nuxtApp = useNuxtApp();
  nuxtApp.hook(lifeCycle, () => {
    window.scrollTo(0, 0);
  });
}

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
