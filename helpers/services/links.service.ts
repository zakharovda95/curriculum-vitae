import {
  NAVIGATION_LINKS_RUS,
  NAVIGATION_LINKS_EN,
  SUMMARY_ANCHORS_RUS,
  SUMMARY_ANCHORS_EN,
  STACK_ANCHORS_RUS,
  STACK_ANCHORS_EN,
  NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_RUS,
  NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_EN,
} from '~/helpers/content/links.content';

import { AnchorsType, NavigationLinksType } from '~/helpers/types/links.types';

class Links {
  public getNavigationLinks(lang: string, page: string): NavigationLinksType {
    if (page === 'main') {
      return this.getNavigationLinksForMainPage(lang);
    } else {
      return this.getNavigationLinksNotForMainPage(lang);
    }
  }

  private getNavigationLinksForMainPage(lang: string) {
    return lang === 'rus' ? NAVIGATION_LINKS_RUS : NAVIGATION_LINKS_EN;
  }

  private getNavigationLinksNotForMainPage(lang: string) {
    return lang === 'rus'
      ? NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_RUS
      : NAVIGATION_LINKS_NOT_FOR_MAIN_PAGE_EN;
  }

  public getSummaryAnchors(lang: string): AnchorsType {
    return lang === 'rus' ? SUMMARY_ANCHORS_RUS : SUMMARY_ANCHORS_EN;
  }

  public getStackAnchors(lang: string): AnchorsType {
    return lang === 'rus' ? STACK_ANCHORS_RUS : STACK_ANCHORS_EN;
  }
}

export const links = new Links();
