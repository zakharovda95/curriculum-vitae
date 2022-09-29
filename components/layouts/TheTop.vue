<template>
  <div class="the-top" id="top">
    <p class="title">@zakharovda95</p>
    <p class="text">Click to Home</p>
  </div>
</template>

<script setup lang="ts">
// import { PageNameEnum } from '~/helpers/enums/page-name.enums';
// import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';
//
// import { useRoute, useRouter } from 'vue-router';
//
// const router = useRouter();
// const route = useRoute();
//
// const goToHome = (): void => {
//   if (
//     route.name === AnchorNamesEnum.personalInformation ||
//     route.name === AnchorNamesEnum.objective ||
//     route.name === AnchorNamesEnum.education ||
//     route.name === AnchorNamesEnum.workExperience
//   ) {
//     router.push({ name: PageNameEnum.summary });
//   }
//   if (
//     route.name === AnchorNamesEnum.mainStack ||
//     route.name === AnchorNamesEnum.fullStack ||
//     route.name === AnchorNamesEnum.softSkills
//   ) {
//     router.push({ name: PageNameEnum.stack });
//   }
//
//   if (route.name === AnchorNamesEnum.projectPage || route.name === AnchorNamesEnum.projectList) {
//     router.push({ name: PageNameEnum.codeExamples });
//   }
// };
</script>

<style scoped lang="scss">
@import '../../assets/css/constants';

@media (max-width: 1399px) {
  .the-top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 60px;
    background: $BLACK;
    cursor: pointer;

    .title {
      text-align: center;
      color: $WHITE;
      font-size: 1.2rem;
      font-family: Nunito-SemiBold, sans-serif;
    }
    .text {
      font-size: 0.6rem;
      color: $WHITE;
      font-family: Nunito-Regular, sans-serif;
    }
  }
}

@media (min-width: 1400px) {
  .the-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: $BLACK;
    flex-direction: column;
    cursor: pointer;

    .title {
      color: $WHITE;
      font-size: 1.4rem;
      font-family: Nunito-Regular, sans-serif;
    }
    .text {
      font-size: 0.7rem;
      color: $WHITE;
      font-family: Nunito-Regular, sans-serif;
    }
  }
}
</style>
