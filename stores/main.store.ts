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
    async getData() {
      this.isLoading = true;
      this.data = await database.getData('/rus/main/');
      this.isLoading = false;
    },
  },
});
