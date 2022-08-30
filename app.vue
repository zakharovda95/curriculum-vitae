<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { pageLifeCycleScrollBehavior } from '~/helpers/methods/scroll.methods';
import { database } from '~/helpers/requests/firebase-database.requests';
import { StackContent, SummaryContent } from '~/helpers/types/content/section-content.types';
import { SUMMARY_RUS } from '~/helpers/content/summary/summary-rus.content';
import { STACK_RUS } from '~/helpers/content/stack/stack-rus.content';

pageLifeCycleScrollBehavior('page:start');
pageLifeCycleScrollBehavior('page:finish');

const setDataInDatabase = (path: string, data: SummaryContent | StackContent) => {
  database.setData(path, data);
};

// setDataInDatabase('/rus/stack', STACK_RUS);
// setDataInDatabase('/rus/summary', SUMMARY_RUS);
</script>
