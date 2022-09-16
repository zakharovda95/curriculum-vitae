import { MainStoreType } from '~/helpers/types/stores.types';

import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () =>
    ({
      isLoading: true,
      lang: 'rus',
    } as MainStoreType),
});
