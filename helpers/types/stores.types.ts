import {
  CodeExamplesProjectType,
  StackContent,
  SummaryContent,
} from '~/helpers/types/content.types';

export interface MainStoreType {
  isLoading: boolean;
  lang: string;
}

export interface SummaryPageStoreType {
  data: SummaryContent | null;
}

export interface StackPageStoreType {
  data: StackContent | null;
}

export interface CodeExamplesPageStoreType {
  data: CodeExamplesProjectType[] | null;
  projectData: CodeExamplesProjectType | null;
}
