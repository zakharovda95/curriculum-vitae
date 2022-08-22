<template>
  <div class="content-generator">
    <ContentBlock class="section">
      <template #header>
        <h1>{{ content.title }}</h1>
      </template>
      <template #content>
        <div class="content-items" v-for="paragraph in content.content" :key="paragraph">
          <UIParagraph :tag="paragraph.props.tag" :title="paragraph.title">
            <br v-if="paragraph.props.br" />
            <span v-if="typeof paragraph.text === 'object'">
              <span v-for="text in paragraph.text" :key="text">{{ text }} <br /></span>
            </span>
            <span v-else>{{ paragraph.text }}</span>
            <span
              @click="goTo(paragraph.textAsLink.link)"
              class="text-as-link"
              v-if="paragraph.textAsLink"
            >
              {{ paragraph.textAsLink.name }}
            </span>
          </UIParagraph>
          <UIButton class="button certificate" v-if="paragraph.props.certificate">
            сертификат
          </UIButton>
        </div>
      </template>
    </ContentBlock>
  </div>
</template>

<script setup lang="ts">
import UIParagraph from '~/components/UI/UIParagraph.vue';
import UIButton from '~/components/UI/UIButton.vue';
import ContentBlock from '@/components/shared/ContentBlock.vue';

import { PropType } from 'vue';
import { SectionContentType } from '~/helpers/types/content/section-content.types';

import { useRouter } from 'vue-router';

defineProps({
  content: {
    type: Object as PropType<SectionContentType>,
    required: true,
  },
});

const router = useRouter();

const goTo = (path: string): void => {
  router.push({ name: path });
};
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .content-generator {
    .section {
      .content-items {
        .text-as-link {
          text-decoration: underline;
          cursor: pointer;
        }

        .certificate {
          display: flex;
          justify-content: space-between;
          margin-left: 5px;
          text-decoration: underline;
        }
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .content-generator {
    .section {
      .content-items {
        .text-as-link {
          text-decoration: underline;
          cursor: pointer;
        }

        .certificate {
          margin-left: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}

@media (min-width: 1400px) {
  .content-generator {
    .section {
      .content-items {
        .text-as-link {
          text-decoration: underline;
          cursor: pointer;
        }

        .certificate {
          margin-left: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
