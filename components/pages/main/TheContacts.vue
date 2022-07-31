<template>
  <div class="the-contacts">
    <div class="github">
      <UIIcon class="icon" src="assets/img/github.svg" size="56px"/>
      <nuxt-link class="link" to="https://github.com/zakharovda95">GitHub</nuxt-link>
    </div>
    <div class="vk">
      <UIIcon class="icon" src="assets/img/vk.svg" size="56px"/>
      <nuxt-link class="link" to="https://vk.com/id625689222">VK.com</nuxt-link>
    </div>
    <div class="telegram">
      <UIIcon src="assets/img/telegram.svg" size="48px"/>
      <p class="text">@zakharovda95</p>
    </div>
    <div class="gmail">
      <UIIcon src="assets/img/gmail.svg" size="48px"/>
      <p class="text">zakharovda95@gmail.com</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from "~/components/ui/UIIcon.vue";
</script>

<style scoped lang="scss">
@import "../../../assets/css/constants";
@import "../../../assets/css/hoverable.css";

.the-contacts {
  display: flex;
  flex-direction: column;

  .github,
  .vk,
  .telegram,
  .gmail {
    display: flex;
    align-items: center;

    .link,
    .text {
      padding: 5px;
      font-size: 1.8rem;
      text-decoration: none;
      color: $MAIN_BLACK;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .icon {
    margin-left: -5px;
  }
}
</style>