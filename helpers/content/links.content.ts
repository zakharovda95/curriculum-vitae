import { AnchorsType, NavigationLinksType } from '~/helpers/types/links.types';
import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

export const NAVIGATION_LINKS_RUS: NavigationLinksType = [
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

export const NAVIGATION_LINKS_EN: NavigationLinksType = [
  {
    name: 'Summary',
    path: { name: AnchorNamesEnum.personalInformation },
  },
  {
    name: 'Stack',
    path: { name: AnchorNamesEnum.mainStack },
  },
  {
    name: 'Code',
    path: { name: PageNameEnum.codeExamples },
  },
];

export const NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_RUS: NavigationLinksType = [
  {
    name: 'Резюме',
    path: { name: AnchorNamesEnum.personalInformation },
  },
  {
    name: 'Стек',
    path: { name: AnchorNamesEnum.mainStack },
  },
  {
    name: 'Код',
    path: { name: AnchorNamesEnum.projectList },
  },
];

export const NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_EN: NavigationLinksType = [
  {
    name: 'Summary',
    path: { name: AnchorNamesEnum.personalInformation },
  },
  {
    name: 'Stack',
    path: { name: AnchorNamesEnum.mainStack },
  },
  {
    name: 'Code',
    path: { name: AnchorNamesEnum.projectList },
  },
];

export const SUMMARY_ANCHORS_RUS: AnchorsType = [
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

export const SUMMARY_ANCHORS_EN: AnchorsType = [
  {
    name: 'Personal Information',
    id: AnchorNamesEnum.personalInformation,
  },
  {
    name: 'Objective',
    id: AnchorNamesEnum.objective,
  },
  {
    name: 'Education',
    id: AnchorNamesEnum.education,
  },
  {
    name: 'Work Experience',
    id: AnchorNamesEnum.workExperience,
  },
];

export const STACK_ANCHORS_RUS: AnchorsType = [
  {
    name: 'Основной',
    id: AnchorNamesEnum.mainStack,
  },
  {
    name: 'Полный',
    id: AnchorNamesEnum.fullStack,
  },
  {
    name: 'Софт-Скиллы',
    id: AnchorNamesEnum.softSkills,
  },
];

export const STACK_ANCHORS_EN: AnchorsType = [
  {
    name: 'Main Stack',
    id: AnchorNamesEnum.mainStack,
  },
  {
    name: 'Full Stack',
    id: AnchorNamesEnum.fullStack,
  },
  {
    name: 'Soft Skills',
    id: AnchorNamesEnum.softSkills,
  },
];
