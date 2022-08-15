import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

export interface NavigationLinkType {
  name: string;
  path: { name: PageNameEnum };
}

export type NavigationLinksType = NavigationLinkType[];

export interface AnchorType {
  name: string;
  id: AnchorNamesEnum;
}

export type AnchorsType = AnchorType[];
