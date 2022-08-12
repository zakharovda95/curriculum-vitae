import { onBeforeUnmount, onMounted } from 'vue';

function scrollPreventer(event: Event): void {
  event.preventDefault();
}

function removeEventListener(): void {
  window.removeEventListener('wheel', scrollPreventer);
}

export function useScrollPreventer(): void {
  onMounted((): void => {
    window.addEventListener('wheel', scrollPreventer, { passive: false });
  }),
    onBeforeUnmount((): void => {
      removeEventListener();
    });
}
