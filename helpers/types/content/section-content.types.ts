import { StackListItemType } from '~/helpers/types/content/stack-list-item.types';

export interface SummaryContent {
  personalInformation: SectionContentType;
  objective: SectionContentType;
  education: SectionContentType;
  workExperience: SectionContentType;
}

export interface StackContent {
  mainStack: SectionContentType;
  fullStack: FullStackType;
  softSkills: SectionContentType;
}

export interface FullStackType {
  title: string;
  content: StackListItemType[];
}

export interface SectionContentType {
  title: string | null;
  content: ParagraphType[];
}

export interface ParagraphType {
  title: string | null;
  text: string | string[] | null;
  textAsLink?: TextAsLinkType;
  props: ParagraphPropsType;
}

export interface TextAsLinkType {
  name: string;
  link: string;
}

export interface ParagraphPropsType {
  [key: string]: string | number | boolean;
}
