<template>
  <div class="the-navigation">
    <UILinkGroup :links="navlinks"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import UILinkGroup from "~/components/ui/UILinkGroup.vue";

const navlinks = ref([
  {
    name: 'Summary',
    path: '/summary',
  },
  {
    name: 'Stack',
    path: 'stack',
  },
  {
    name: 'Code Examples',
    path: '/code-examples',
  },
])
</script>

<style scoped lang="scss">
@import "../../assets/css/_constants.scss";
@import "../../assets/css/hoverable.css";

.the-navigation {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: $MAIN_AQUAMARINE;
}
</style>