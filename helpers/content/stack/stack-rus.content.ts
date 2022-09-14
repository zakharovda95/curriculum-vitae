import { MAIN_STACK_RUS } from '~/helpers/content/stack/main-stack.content';
import { STACK_LIST_RUS } from '~/helpers/content/stack/stack-list.content';
import { SOFT_SKILLS_RUS } from '~/helpers/content/stack/soft-skills.content';

import { StackContent } from '~/helpers/types/content.types';

export const STACK_RUS: StackContent = {
  mainStack: MAIN_STACK_RUS,
  fullStack: {
    title: 'Полный стек',
    content: STACK_LIST_RUS,
  },
  softSkills: SOFT_SKILLS_RUS,
};
