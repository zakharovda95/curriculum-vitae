<template>
  <div id="default-layout">
    <TheTop/>
    <slot/>
  </div>
</template>
<script setup>
import TheTop from "~/components/layouts/TheTop.vue";
</script>