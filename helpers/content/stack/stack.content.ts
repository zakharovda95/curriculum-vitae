import {MAIN_STACK_EN, MAIN_STACK_RUS} from '~/helpers/content/stack/main-stack.content';
import {STACK_LIST_EN, STACK_LIST_RUS} from '~/helpers/content/stack/stack-list.content';
import {SOFT_SKILLS_EN, SOFT_SKILLS_RUS} from '~/helpers/content/stack/soft-skills.content';

import { StackContentType } from '~/helpers/types/content.types';

export const STACK_RUS: StackContentType = {
  mainStack: MAIN_STACK_RUS,
  fullStack: {
    title: 'Полный стек',
    content: STACK_LIST_RUS,
  },
  softSkills: SOFT_SKILLS_RUS,
};

export const STACK_EN: StackContentType = {
  mainStack: MAIN_STACK_EN,
  fullStack: {
    title: 'Full stack',
    content: STACK_LIST_EN,
  },
  softSkills: SOFT_SKILLS_EN,
};
