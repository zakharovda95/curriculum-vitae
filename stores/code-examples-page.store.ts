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
    async getData(lang: string) {
      const store = useMainStore();
      store.isLoading = true;
      if (lang === 'rus') {
        this.data = await database.getData('/rus/code-examples/');
      }
      if (lang === 'en') {
        this.data = await database.getData('/en/code-examples/');
      }
      store.isLoading = false;
    },

    async getProjectData(id: string, lang: string) {
      const store = useMainStore();
      store.isLoading = true;
      if (lang === 'rus') {
        this.projectData = await database.getData(`/rus/code-examples/${id}`);
      }
      if (lang === 'en') {
        this.projectData = await database.getData(`/en/code-examples/${id}`);
      }
      store.isLoading = false;
    },
  },
});
