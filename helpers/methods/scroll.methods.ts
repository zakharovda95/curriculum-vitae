import { RuntimeNuxtHooks, useNuxtApp } from '#app';
import { HookKeys } from 'hookable';

export function pageLifeCycleScrollBehavior(lifeCycle: HookKeys<RuntimeNuxtHooks>) {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook(lifeCycle, () => {
    navigationLinkScrollBehavior();
  });
}

export function navigationLinkScrollBehavior(): void {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
}
