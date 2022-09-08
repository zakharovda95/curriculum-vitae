import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';

export const useCodeExamplesPageStore = defineStore('codeExamplesPageStore', {
  state: () => ({
    isLoading: true,
    data: null,
  }),
  actions: {
    async getData() {
      this.data = await database.getData('/rus/code-examples/');
      this.isLoading = false;
    },
    async getProjectData(id: string) {
      this.isLoading = true;
      this.data = await database.getData(`/rus/code-examples/${id}`);
      this.isLoading = false;
    },
  },
});
