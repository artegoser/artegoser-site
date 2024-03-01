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

export interface IBlogPostMetaData {
  title: string;
  tags: string;
  datePublished: string;
  cover?: string;
  coAuthors?: IAuthor[];
  dots?: Dot[];
  seoTitle?: string;
  seoDescription?: string;
  id?: string; // only in index.json posts
}
