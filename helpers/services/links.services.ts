import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorsType, NavigationLinksType } from '~/helpers/types/links.types';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

export const NAVIGATION_LINKS: NavigationLinksType = [
  {
    name: 'Резюме',
    path: { name: PageNameEnum.summary },
  },
  {
    name: 'Навыки',
    path: { name: PageNameEnum.stack },
  },
  {
    name: 'Код',
    path: { name: PageNameEnum.codeExamples },
  },
];

export const SUMMARY_ANCHORS: AnchorsType = [
  {
    name: 'Информация',
    id: AnchorNamesEnum.personalInformation,
  },
  {
    name: 'Цели',
    id: AnchorNamesEnum.objective,
  },
  {
    name: 'Образование',
    id: AnchorNamesEnum.education,
  },
  {
    name: 'Опыт Работы',
    id: AnchorNamesEnum.workExperience,
  },
];

export const STACK_ANCHORS: AnchorsType = [
  {
    name: 'Основной Стек',
    id: AnchorNamesEnum.mainStack,
  },
  {
    name: 'Полный Стек',
    id: AnchorNamesEnum.fullStack,
  },
  {
    name: 'Софт-Скиллы',
    id: AnchorNamesEnum.softSkills,
  },
];
