import { ref, onMounted, Ref } from 'vue';

export function useCalculateDOMElementsHeight(selectors: string[]): Ref<number> {
  const totalHeight: Ref<number> = ref(0);

  onMounted((): void => {
    selectors.forEach(selector => {
      const elem = document.querySelector(selector) as HTMLElement;
      totalHeight.value += elem.offsetHeight;
    });
  });
  return totalHeight;
}
