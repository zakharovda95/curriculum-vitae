import {
  NAVIGATION_LINKS_RUS,
  NAVIGATION_LINKS_EN,
  SUMMARY_ANCHORS_RUS,
  SUMMARY_ANCHORS_EN,
  STACK_ANCHORS_RUS,
  STACK_ANCHORS_EN,
} from '~/helpers/content/links.content';

import { AnchorsType, NavigationLinksType } from '~/helpers/types/links.types';

class Links {
  public getNavigationLinks(lang: string): NavigationLinksType {
    return lang === 'rus' ? NAVIGATION_LINKS_RUS : NAVIGATION_LINKS_EN;
  }

  public getSummaryAnchors(lang: string): AnchorsType {
    return lang === 'rus' ? SUMMARY_ANCHORS_RUS : SUMMARY_ANCHORS_EN;
  }

  public getStackAnchors(lang: string): AnchorsType {
    return lang === 'rus' ? STACK_ANCHORS_RUS : STACK_ANCHORS_EN;
  }
}

export const links = new Links();
