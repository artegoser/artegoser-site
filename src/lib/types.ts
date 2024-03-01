export interface ILink {
  text: string;
  link: string;
}

export type Dot = string | ILink;

export interface IAuthor {
  name: string;
  link?: string;
  img?: string;
  dots?: Dot[];
}
