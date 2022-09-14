import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';
import { SummaryPageStoreType } from '~/helpers/types/stores.types';

export const useSummaryPageStore = defineStore('summaryPageStore', {
  state: () =>
    ({
      isLoading: true,
      data: null,
    } as SummaryPageStoreType),

  actions: {
    async getData() {
      this.data = await database.getData('/rus/summary/');
      this.isLoading = false;
    },
  },
});
