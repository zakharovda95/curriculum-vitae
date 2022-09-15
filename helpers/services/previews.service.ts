import { PREVIEWS_EN, PREVIEWS_RUS } from '~/helpers/content/previews.content';

import { PreviewsType } from '~/helpers/types/content.types';

class Preview {
  public getPreview(lang: string): PreviewsType {
    return lang === 'rus' ? PREVIEWS_RUS : PREVIEWS_EN;
  }
}

export const preview = new Preview();
