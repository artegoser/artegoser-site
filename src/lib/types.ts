export interface ILink {
  text: string;
  link: string;
}

export type Dot = string | ILink;

export interface IAuthor {
  img: string;
  name: string;
  link: string;
  dots?: Dot[];
}
