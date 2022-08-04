<template>
  <div class="summary-page">
    <div class="content">
      <AnchorGroup
        v-if="offset > headerHeight"
        class="anchors"
        :anchors="anchors"
        @custom:change-section="scrollIntoSection"
      />
      <div>
        <PageContentContainer justify="flex-start" :height="previewHeight" name="preview">
          <ThePreviews />
        </PageContentContainer>
      </div>
      <PageContentContainer name="personal-information">
        <ContentBlock class="section">
          <template #header>
            <h1>Personal Information</h1>
          </template>
          <template #content>
            <h2>Name: Dmitry Zakharov</h2>
            <h2>Date of birth: 13th May 1995 (27 yo)</h2>
            <h2>Address: Yoshkar-Ola, Russia</h2>
            <h2>Nationality: Russian</h2>
            <h2>Marital status: Single</h2>
            <h2>Language: Russian (native), English - A2 (but I improve my skill every day)</h2>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer name="objective">
        <ContentBlock class="section">
          <template #header>
            <h1>Objective</h1>
          </template>
          <template #content>
            <h2>
              I am a young but perspective developer with little experience in a real project. I am
              looking for my first job, which will be the basis of my future career. I am applying
              for the position of trainee/junior front-end developer.
            </h2>
            <h2>
              What I can give: my little experience in the project (my main task was to find and fix
              bugs), 100% of my professional and personal skills. My heart and my soul :)
            </h2>
            <h2>
              What I expect to receive: First of all, experience. As well as a cool team,
              interesting tasks (but I am ready for any, the most boring, until I prove that I can
              do more) As well as salary and career growth based on the results of my work.
            </h2>
            <h3>
              If you are looking for a junior with 100 years of experience and knowledge of all
              unearthly technologies - this is not me. But if you need a man who will really try
              because this is what he wants to do all his life - you can give me a chance!
            </h3>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer name="education">
        <ContentBlock class="section">
          <template #header>
            <h1>Education</h1>
          </template>
          <template #content>
            <h2>
              Secondary special education: 2011 - 2016; Construction and operation of buildings and
              structures, Yoshkar-Ola Construction College, Yoshkar-Ola, Russia
            </h2>
            <h2>
              Incomplete higher education: 2016 - 2019; Institute of construction and architecture,
              Federal State Budgetary Educational Institution of Higher Education «Volga State
              University of Technology», Yoshkar-Ola, Russia
            </h2>
            <h2>As a developer:</h2>
            <div class="course">
              <h2>Courses JavaScript.ru - JavaScript/DOM/Interfaces</h2>
              <UIButton class="certificate">certificate</UIButton>
            </div>
            <div class="course">
              <h2>Courses JavaScript.ru - Vue.Js 3</h2>
              <UIButton class="certificate">certificate</UIButton>
            </div>
          </template>
        </ContentBlock>
      </PageContentContainer>
      <PageContentContainer name="work-experience">
        <ContentBlock class="section">
          <template #header>
            <h1>Work Experience</h1>
          </template>
          <template #content>
            <h2>
              Secondary special education: 2011 - 2016; Construction and operation of buildings and
              structures, Yoshkar-Ola Construction College, Yoshkar-Ola, Russia
            </h2>
            <h2>
              Incomplete higher education: 2016 - 2019; Institute of construction and architecture,
              Federal State Budgetary Educational Institution of Higher Education «Volga State
              University of Technology», Yoshkar-Ola, Russia
            </h2>
          </template>
        </ContentBlock>
      </PageContentContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThePreviews from '~/components/pages/main/ThePreviews.vue';
import PageContentContainer from '~/components/shared/PageContentContainer.vue';
import { useCalculateDOMElementsHeight } from '~/composables/useCalculateDOMElementsHeight';
import { computed, ref, Ref } from 'vue';
import ContentBlock from '~/components/shared/ContentBlock.vue';
import UIButton from '~/components/ui/UIButton.vue';
import AnchorGroup from '~/components/shared/AnchorGroup.vue';
import { useOffsetWatcher } from '~/composables/useOffsetWatcher';

const headerHeight: Ref<number> = useCalculateDOMElementsHeight(['#top', '#header', '#navbar']);
const previewHeight: Ref<string> = computed(() => `100vh - ${headerHeight.value}px`);

const { offset } = useOffsetWatcher();

const anchors: Ref<Array<{ name: string; id: string }>> = ref([
  {
    name: 'Personal Information',
    id: 'personal-information',
  },
  {
    name: 'Objective',
    id: 'objective',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Work Experience',
    id: 'work-experience',
  },
]);

const scrollIntoSection = (anchorName: string) => {
  const sectionName = document.querySelector(`#${anchorName}`);
  sectionName.scrollIntoView({ block: 'start', behavior: 'smooth' });
};
</script>

<style lang="scss">
@import '../assets/css/_constants.scss';

.summary-page {
  padding: 24px;

  .content {
    .anchors {
      position: fixed;
      top: 36vh;
      right: 6vw;
      text-decoration: none;
    }

    .section {
      .course {
        display: flex;

        .certificate {
          margin-left: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
