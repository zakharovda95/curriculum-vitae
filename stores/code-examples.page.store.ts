import { defineStore } from 'pinia';
import { database } from '~/helpers/services/firebase-database.service';
import { CodeExamplesPageStoreType } from '~/helpers/types/stores.types';
import { useMainStore } from '~/stores/main.store';

export const useCodeExamplesPageStore = defineStore('codeExamplesPageStore', {
  state: () =>
    ({
      data: null,
      projectData: null,
    } as CodeExamplesPageStoreType),
  actions: {
    async getData() {
      const store = useMainStore();
      store.isLoading = true;
      this.data = await database.getData('/rus/code-examples/');
      store.isLoading = false;
    },
    async getProjectData(id: string) {
      const store = useMainStore();
      store.isLoading = true;
      this.projectData = await database.getData(`/rus/code-examples/${id}`);
      store.isLoading = false;
    },
  },
});
