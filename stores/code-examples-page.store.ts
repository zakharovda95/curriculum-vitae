import { defineStore } from 'pinia';

import { database } from '~/helpers/classes/database.class';

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
      this.projectData = await database.getData(`/rus/code-examples/${id}`);
      store.isLoading = false;
    },
  },
});
