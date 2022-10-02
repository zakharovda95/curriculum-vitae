import {
  CodeExamplesProjectType,
  MainContentType,
  StackContentType,
  SummaryContentType,
} from '~/helpers/types/content.types';

export interface MainStoreType {
  isLoading: boolean;
  data: null | MainContentType;
  lang: string;
}

export interface SummaryPageStoreType {
  data: SummaryContentType | null;
}

export interface StackPageStoreType {
  data: StackContentType | null;
}

export interface CodeExamplesPageStoreType {
  data: CodeExamplesProjectType[] | null;
  projectData: CodeExamplesProjectType | null;
}
