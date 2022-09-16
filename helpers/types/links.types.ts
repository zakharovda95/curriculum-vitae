import { PageNameEnum } from '~/helpers/enums/page-name.enums';
import { AnchorNamesEnum } from '~/helpers/enums/anchor-names.enum';

export interface NavigationLinkType {
  name: string;
  path: { name: PageNameEnum | AnchorNamesEnum };
}

export type NavigationLinksType = NavigationLinkType[];

export interface AnchorType {
  name: string;
  id: AnchorNamesEnum;
}

export type AnchorsType = AnchorType[];

export interface AnchorsDataType {
  active: AnchorType | null;
  previous: AnchorType | null;
  next: AnchorType | null;
}
