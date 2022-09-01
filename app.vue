<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { pageLifeCycleScrollBehavior } from '~/helpers/methods/scroll.methods';
import { database } from '~/helpers/services/firebase-database.service';
import { StackContent, SummaryContent } from '~/helpers/types/content/section-content.types';
import { SUMMARY_RUS } from '~/helpers/content/summary/summary-rus.content';
import { STACK_RUS } from '~/helpers/content/stack/stack-rus.content';
import { storage } from '~/helpers/services/firebase-storage.service';

// pageLifeCycleScrollBehavior('page:start');
// pageLifeCycleScrollBehavior('page:finish');

// database.setData('/rus/stack', STACK_RUS);
// database.setData('/rus/summary', SUMMARY_RUS);

// const contacts = await storage.getAllImageUrls('/contacts/');
// const stackList = await storage.getAllImageUrls('/stack-icons/');
// const img = await storage.getImageUrl('/common/avatar.jpg');
// await console.log(img);
</script>
