import {
  PERSONAL_INFORMATION_EN,
  PERSONAL_INFORMATION_RUS
} from '~/helpers/content/summary/personal-information.content';
import {OBJECTIVE_EN, OBJECTIVE_RUS} from '~/helpers/content/summary/objective.content';
import {EDUCATION_EN, EDUCATION_RUS} from '~/helpers/content/summary/education.content';
import {WORK_EXPERIENCE_EN, WORK_EXPERIENCE_RUS} from '~/helpers/content/summary/work-experience.content';

import { SummaryContent } from '~/helpers/types/content.types';

export const SUMMARY_RUS: SummaryContent = {
  personalInformation: PERSONAL_INFORMATION_RUS,
  objective: OBJECTIVE_RUS,
  education: EDUCATION_RUS,
  workExperience: WORK_EXPERIENCE_RUS,
};

export const SUMMARY_EN: SummaryContent = {
  personalInformation: PERSONAL_INFORMATION_EN,
  objective: OBJECTIVE_EN,
  education: EDUCATION_EN,
  workExperience: WORK_EXPERIENCE_EN,
};
