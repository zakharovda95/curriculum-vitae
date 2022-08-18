export interface SectionContentType {
  title: string | null;
  content: ParagraphType[];
}

export interface ParagraphType {
  title: string | null;
  text: string | string[] | null;
  textAsLink?: TextAsLinkType;
  props: ParagraphPropsType;
}

export interface TextAsLinkType {
  name: string;
  link: string;
}

export interface ParagraphPropsType {
  [key: string]: string | number;
}
