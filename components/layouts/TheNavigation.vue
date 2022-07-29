<template>
  <div class="the-navigation">
    <NuxtLink class="link" :to="link.path" v-for="link in navlinks">
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const navlinks = ref([
  {
    name: '< Summary />',
    path: '/',
  },
  {
    name: 'Skills',
    path: '/',
  },
  {
    name: 'Code Examples',
    path: '/',
  },
])
</script>

<style scoped lang="scss">
@import "../../assets/css/_constants.scss";

.the-navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  background: $MAIN_AQUAMARINE;

  .link {
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;
    color: $MAIN_BLACK;
  }
}
</style>