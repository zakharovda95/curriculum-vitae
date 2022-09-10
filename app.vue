<template>
  <UILoading v-if="!isLoaded" />
  <div v-else class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import UILoading from '~/components/UI/UILoading.vue';

import { onMounted, ref, Ref } from 'vue';

const isLoaded: Ref<boolean> = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
import { pageLifeCycleScrollBehavior } from '~/helpers/methods/scroll.methods';
import { database } from '~/helpers/services/firebase-database.service';
import { StackContent, SummaryContent } from '~/helpers/types/content/section-content.types';
import { SUMMARY_RUS } from '~/helpers/content/summary/summary-rus.content';
import { STACK_RUS } from '~/helpers/content/stack/stack-rus.content';
import { storage } from '~/helpers/services/firebase-storage.service';
import { CODE_EXAMPLES_RUS } from '~/helpers/content/code-examples/code-examples-rus.content';
// pageLifeCycleScrollBehavior('page:start');
// pageLifeCycleScrollBehavior('page:finish');

// database.setData('/rus/stack', STACK_RUS);
// database.setData('/rus/summary', SUMMARY_RUS);
// database.setData('/rus/code-examples', CODE_EXAMPLES_RUS);

// const contacts = await storage.getAllImageUrls('/contacts/');
// const stackList = await storage.getAllImageUrls('/stack-icons/');
// const projectImages = await storage.getAllImageUrls('/project-images/1/');
// const projectImages = await storage.getAllImageUrls('/project-images/2/');
// const projectImages = await storage.getAllImageUrls('/project-images/3/');
// const img = await storage.getImageUrl('/common/avatar.jpg');
// await console.log(projectImages);
</script>
