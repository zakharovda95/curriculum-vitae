<template>
  <div class="the-avatar" />
</template>

<script setup lang="ts">
defineProps({
  avatar: {
    type: String,
    required: false,
    default: () =>
      'url("https://firebasestorage.googleapis.com/v0/b/zakharovda95-17636.appspot.com/o/common%2Favatar.jpg?alt=media&token=5b688adc-71a5-4cda-b144-e25d05b89e51")',
  },
});
</script>

<style scoped lang="scss">
@import '../../../assets/css/constants';
@media (max-width: 800px) {
  .the-avatar {
    display: flex;
    min-width: 200px;
    width: 50vw;
    max-width: 260px;
    min-height: 240px;
    height: 74vw;
    max-height: 300px;
    align-self: flex-start;
    margin-left: 0.5vw;
    background-size: cover;
    background-position: center;
    background-image: v-bind(avatar);
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-avatar {
    display: flex;
    min-width: 200px;
    width: 50vw;
    max-width: 270px;
    min-height: 240px;
    height: 74vw;
    max-height: 300px;
    align-self: flex-start;
    margin-left: 0.5vw;
    background-size: cover;
    background-position: center;
    background-image: v-bind(avatar);
  }
}

@media (min-width: 1400px) {
  .the-avatar {
    display: flex;
    min-width: 420px;
    height: calc(100% - 48px);
    align-self: center;
    border-radius: 0 0 32px 0;
    margin-right: 26px;
    background-size: cover;
    background-position: center;
    background-image: v-bind(avatar);
  }
}
</style>
