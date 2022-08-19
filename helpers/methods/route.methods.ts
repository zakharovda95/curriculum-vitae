import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { useRoute } from 'vue-router';

export function hidePageElement(): boolean {
  const route = useRoute();
  return (
    route.name === PageNameEnum.summary ||
    route.name === PageNameEnum.stack ||
    route.name === PageNameEnum.codeExamples ||
    route.name === PageNameEnum.index
  );
}