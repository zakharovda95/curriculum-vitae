<template>
  <div class="code-examples-page">
    <div class="content">
      <div class="preview">
        <h1>Here are my small projects that I have prepared to demonstrate my skills and coding style, as well as links
          to projects in which I participate</h1>
        <UIIcon size="192px" class="go-to" src="assets/img/arrow-go.svg"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from "~/components/ui/UIIcon.vue";
</script>

<style lang="scss">
@import "../assets/css/_constants.scss";

.code-examples-page {
  margin: 24px;

  .content {
    .preview {
      display: flex;
      width: 100%;

      h1 {
        color: $MAIN_BLACK;
        font-size: 2.7rem;
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