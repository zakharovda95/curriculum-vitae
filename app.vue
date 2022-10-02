<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/** Управление контентом Firebase **/
import { database } from '~/helpers/classes/database.class';
import { storage } from '~/helpers/services/firebase-storage.service';

import { StackContent, SummaryContent } from '~/helpers/types/content/section-content.types';

import { SUMMARY_RUS, SUMMARY_EN } from '~/helpers/content/summary/summary.content';
import { STACK_EN, STACK_RUS } from '~/helpers/content/stack/stack.content';
import { CODE_EXAMPLES_RUS } from '~/helpers/content/code-examples/code-examples.content';
import { MAIN_RUS, MAIN_EN } from '~/helpers/content/main/main.content';

// database.setData('/rus/stack', STACK_RUS);
// database.setData('/rus/summary', SUMMARY_RUS);
// database.setData('/rus/code-examples', CODE_EXAMPLES_RUS);
// database.setData('/rus/main', MAIN_RUS);

// database.setData('/en/summary', SUMMARY_EN);
// database.setData('/en/stack', STACK_EN);
// database.setData('/en/main', MAIN_EN);

// const contacts = await storage.getAllImageUrls('/contacts/');
// const common = await storage.getAllImageUrls('/common/');
// const stackList = await storage.getAllImageUrls('/stack-icons/');

// const projectImages = await storage.getAllImageUrls('/project-images/1/');
// const projectImages = await storage.getAllImageUrls('/project-images/2/');
// const projectImages = await storage.getAllImageUrls('/project-images/3/');
// const projectImages = await storage.getAllImageUrls('/project-images/4/');

// const img = await storage.getImageUrl('/common/home.svg');

// await console.log(common);
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>