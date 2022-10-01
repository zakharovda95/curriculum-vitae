import { PageNameEnum } from '~/helpers/enums/page-name.enums';

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    const element = document.querySelector('html');

    if (
      to.name === PageNameEnum.summary ||
      to.name === PageNameEnum.stack ||
      to.name === PageNameEnum.codeExamples
    ) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      window.scrollTo({
        left: 0,
        top: window.innerHeight + 1000,
      });
    }
    if (
      to.name !== PageNameEnum.summary &&
      to.name !== PageNameEnum.stack &&
      to.name !== PageNameEnum.codeExamples &&
      from.name !== PageNameEnum.summary &&
      from.name !== PageNameEnum.stack &&
      from.name !== PageNameEnum.codeExamples
    ) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    }
  };
});
