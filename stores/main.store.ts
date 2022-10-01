import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    isLoading: false,
    lang: 'rus',
  }),
});
