<template>
  <div class="the-carousel">
    <Splide>
      <SplideSlide v-for="slide in slides" :key="slide">
        <img class="image" :src="slide" :alt="slide" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { PropType } from 'vue';

defineProps({
  slides: {
    type: Array as PropType<String[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 800px) {
  .the-carousel {
    .image {
      width: 100%;
      height: 40vh;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-carousel {
    .image {
      width: 100%;
      height: 60vh;
    }
  }
}

@media (min-width: 1400px) {
  .the-carousel {
    .image {
      width: 100%;
      height: 80vh;
    }
  }
}
</style>
