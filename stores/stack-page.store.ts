import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';
import { StackPageStoreType } from '~/helpers/types/stores.types';

export const useStackPageStore = defineStore('stackPageStore', {
  state: () =>
    ({
      isLoading: true,
      data: null,
    } as StackPageStoreType),

  actions: {
    async getData() {
      this.data = await database.getData('/rus/stack/');
      this.isLoading = false;
    },
  },
});
