import { defineStore } from 'pinia';

import { database } from '~/helpers/classes/database.class';

import { MainStoreType } from '~/helpers/types/stores.types';

export const useMainStore = defineStore('mainStore', {
  state: () =>
    ({
      isLoading: true,
      data: null,
      lang: 'rus',
    } as MainStoreType),

  actions: {
    async getData(lang: string) {
      this.isLoading = true;
      if (lang === 'rus') {
        this.data = await database.getData('/rus/main/');
      }
      if (lang === 'en') {
        this.data = await database.getData('/en/main/');
      }
      this.isLoading = false;
    },
  },
});
