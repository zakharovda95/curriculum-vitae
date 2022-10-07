<template>
  <div class="language-selection">
    <div class="button-group" :class="{ active: mainStore.lang === 'en' }">
      <label for="en">EN</label>
      <input id="en" type="radio" name="lang" value="en" @change="lang = $event.target.value" />
    </div>
    <div class="button-group" :class="{ active: mainStore.lang === 'rus' }">
      <label for="rus">RU</label>
      <input id="rus" type="radio" name="lang" value="rus" @change="lang = $event.target.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/stores/main.store';

import { computed, Ref } from 'vue';

const mainStore = useMainStore();

const lang: Ref<string> = computed({
  get() {
    return mainStore.lang;
  },
  set(val: string) {
    mainStore.lang = val;
    localStorage.setItem('lang', JSON.stringify(val));
  },
});
</script>

<style scoped lang="scss">
@import '../../assets/css/constants';

@media (max-width: 800px) {
  .language-selection {
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 51;
    display: flex;
    color: $WHITE;
    font-size: 1.1rem;
    .button-group {
      display: flex;
      margin: 5px;
      input {
        display: none;
      }
      label {
        cursor: pointer;
      }
    }
    .button-group:hover {
      color: $GRAY;
    }
  }

  .active {
    color: $BROWN;
  }
}

@media (min-width: 801px) and (max-width: 1400px) {
  .language-selection {
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 51;
    display: flex;
    color: $WHITE;
    font-size: 1.2rem;
    .button-group {
      display: flex;
      margin: 5px;
      input {
        display: none;
      }
      label {
        cursor: pointer;
      }
    }
    .button-group:hover {
      color: $GRAY;
    }
  }

  .active {
    color: $BROWN;
  }
}

@media (min-width: 1401px) {
  .language-selection {
    position: absolute;
    top: 12px;
    left: 20px;
    z-index: 51;
    display: flex;
    color: $WHITE;
    font-size: 1.4rem;
    .button-group {
      display: flex;
      margin: 5px;
      input {
        display: none;
      }
      label {
        cursor: pointer;
      }
    }
    .button-group:hover {
      color: $GRAY;
    }
  }

  .active {
    color: $BROWN;
  }
}
</style>
