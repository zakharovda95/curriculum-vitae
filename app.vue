<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/** Управление контентом Firebase **/
import { database } from '~/helpers/services/firebase-database.service';
import { StackContent, SummaryContent } from '~/helpers/types/content/section-content.types';
import { SUMMARY_RUS } from '~/helpers/content/summary/summary-rus.content';
import { STACK_RUS } from '~/helpers/content/stack/stack-rus.content';
import { storage } from '~/helpers/services/firebase-storage.service';
import { CODE_EXAMPLES_RUS } from '~/helpers/content/code-examples/code-examples-rus.content';

// database.setData('/rus/stack', STACK_RUS);
// database.setData('/rus/summary', SUMMARY_RUS);
database.setData('/rus/code-examples', CODE_EXAMPLES_RUS);

// const contacts = await storage.getAllImageUrls('/contacts/');
// const stackList = await storage.getAllImageUrls('/stack-icons/');
// const projectImages = await storage.getAllImageUrls('/project-images/1/');
// const projectImages = await storage.getAllImageUrls('/project-images/2/');
// const projectImages = await storage.getAllImageUrls('/project-images/3/');
const projectImages = await storage.getAllImageUrls('/project-images/4/');
// const projectImages = await storage.getAllImageUrls('/common/');
// const img = await storage.getImageUrl('/common/home.svg');
await console.log(projectImages);
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
