<template>
  <div class="the-previews">
    <h1>{{ previews }}</h1>
    <Shift>
      <template #button>
        <UIIcon size="128px" class="go-to" src="assets/img/arrow-go.svg" />
      </template>
    </Shift>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/ui/UIIcon.vue';
import Shift from '~/components/shared/Shift.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const previews = computed(() => {
  switch (route.name) {
    case 'index-summary':
      return 'Here you will find basic information about me, my career, experience and education';
    case 'index-stack':
      return 'Here you will find information about my hard and soft skills, tech stack that I met, and also some comments to them';
    case 'index-code-examples':
      return 'Here you will find my small projects that I have prepared to demonstrate my skills and coding style';
  }
});
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

.the-previews {
  display: flex;
  width: 70%;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

  h1 {
    width: 80%;
    color: $MAIN_BLACK;
    font-size: 2.5rem;
  }

  .go-to {
    width: 200px;
    align-self: center;
    cursor: pointer;
    margin: 20px;
  }

  .go-to:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
}
</style>
