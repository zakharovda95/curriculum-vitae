import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';

export const useStackPageStore = defineStore('stackPageStore', {
  state: () => ({
    isLoading: true,
    data: null,
  }),
  actions: {
    async getData() {
      this.data = await database.getData('/rus/stack/');
      this.isLoading = false;
    },
  },
});
