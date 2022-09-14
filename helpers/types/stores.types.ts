import {
  CodeExamplesProjectType,
  StackContent,
  SummaryContent,
} from '~/helpers/types/content.types';

export interface SummaryPageStoreType {
  isLoading: boolean;
  data: SummaryContent | null;
}

export interface StackPageStoreType {
  isLoading: boolean;
  data: StackContent | null;
}

export interface CodeExamplesPageStoreType {
  isLoading: boolean;
  data: CodeExamplesProjectType[] | null;
  projectData: CodeExamplesProjectType | null;
}
