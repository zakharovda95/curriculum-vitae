<template>
  <div class="ui-link-group">
    <div class="nuxt-links" v-if="!hardLink">
      <NuxtLink @click="active" v-for="link in links" class="link" :to="link.path" :key="link.name">
        <span v-if="active" class="active-elem">&lt </span>
        <span>{{ link.name }}</span>
        <span v-if="active" class="active-elem"> /&gt</span>
      </NuxtLink>
    </div>
    <div class="hard-links" v-if="hardLink">
      <a @click="active" v-for="link in links" class="link" :href="link.path" :key="link.name">
        <span class="active-elem">&lt</span>
        {{ link.name }}
        <span class="active-elem"> /&gt</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";

const props = defineProps({
  links: {
    type: Array as PropType<Array<{ name: string, path: string }>>,
    required: true,
  },
  hardLink: {
    type: Boolean,
    required: false,
    default: false,
  }
})
const active = (e) => {
  const isActive = ref(false);
  props.links.forEach(item => {
    if (e.target.textContent === item.name) {
      isActive.value = true
    }
  })
  return isActive.value
}
</script>

<style scoped lang="scss">
@import "../../assets/css/_constants.scss";

.ui-link-group {
  display: flex;
  width: 100%;

  .nuxt-links,
  .hard-links {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .link {
      text-decoration: none;
      font-weight: 500;
      font-size: 1.5rem;
      color: $MAIN_BLACK;
      font-family: Nunito-SemiBold, sans-serif;
      padding-right: 8px;
      padding-left: 8px;

      .active-elem {
        font-weight: bold;
        font-size: 1.5rem;
        color: #2C2C2D;
      }
    }
  }
}
</style>