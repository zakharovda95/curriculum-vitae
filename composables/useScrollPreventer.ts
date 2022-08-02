import { onBeforeUnmount, onMounted } from 'vue';

export function useScrollPreventer(): void {
  onMounted((): void => {
    window.addEventListener(
      'wheel',
      function (e) {
        e.preventDefault();
      },
      { passive: false },
    );
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('wheel', function (e) {
      e.preventDefault();
    });
  });
}
