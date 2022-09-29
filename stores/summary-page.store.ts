import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';
import { SummaryPageStoreType } from '~/helpers/types/stores.types';
import { useMainStore } from '~/stores/main.store';

export const useSummaryPageStore = defineStore('summaryPageStore', {
  state: () =>
    ({
      data: null,
    } as SummaryPageStoreType),

  actions: {
    async getData() {
      const store = useMainStore();
      this.data = await database.getData('/rus/summary/');
      store.isLoading = false;
    },
  },
});
