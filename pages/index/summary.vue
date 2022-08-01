<template>
  <div class="summary-page">
    <div class="content">
      <div class="preview">
        <h1>Here you will find basic information about me, my career, experience and education</h1>
        <UIIcon size="128px" class="go-to" src="assets/img/arrow-go.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/ui/UIIcon.vue';
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

.summary-page {
  margin: 24px;

  .content {
    .preview {
      display: flex;
      width: 100%;

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
  }
}
</style>
