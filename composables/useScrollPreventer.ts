import { onBeforeUnmount, onMounted } from 'vue';
import { disableScrollPreventer, scrollPreventer } from '~/helpers/methods/scroll.methods';

export function useScrollPreventer(): void {
  onMounted((): void => {
    window.addEventListener('wheel', scrollPreventer, { passive: false });
  });
  onBeforeUnmount((): void => {
    disableScrollPreventer();
  });
}
