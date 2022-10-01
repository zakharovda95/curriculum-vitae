import { defineStore } from 'pinia';

import { database } from '~/helpers/classes/database.class';

import { StackPageStoreType } from '~/helpers/types/stores.types';

import { useMainStore } from '~/stores/main.store';

export const useStackPageStore = defineStore('stackPageStore', {
  state: () =>
    ({
      data: null,
    } as StackPageStoreType),

  actions: {
    async getData() {
      const store = useMainStore();
      store.isLoading = true;
      this.data = await database.getData('/rus/stack/');
      store.isLoading = false;
    },
  },
});
