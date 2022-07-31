<template>
  <div class="ui-link-group">
    <NuxtLink v-for="link in links" class="link" :to="link.path" :key="link.name">
      <span v-if="route.fullPath === link.path">&lt </span>
      <span>{{ link.name }}</span>
      <span v-if="route.fullPath === link.path"> /&gt</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {useRoute} from "vue-router";

defineProps({
  links: {
    type: Array as PropType<Array<{ name: string, path: string }>>,
    required: true,
  },
  direction: {
    type: String as PropType<'flex-start' | 'column'>,
    required: false,
    default: 'flex-start'
  }
})

const route = useRoute()

console.log(route)
</script>

<style scoped lang="scss">
@import "../../assets/css/_constants.scss";
@import "../../assets/css/hoverable.css";

.ui-link-group {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: v-bind(direction);

  .link {
    font-weight: 500;
    font-size: 1.5rem;
    color: $MAIN_BLACK;
    font-family: Nunito-SemiBold, sans-serif;
    padding-right: 8px;
    padding-left: 8px;
    text-decoration: none;
  }

  .router-link-active {
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>