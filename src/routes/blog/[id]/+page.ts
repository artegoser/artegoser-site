import type { Dot, IAuthor } from "$lib/types.js";
import { parseMarkdown, readingTime } from "$lib/utils";

interface IMetaData {
  title: string;
  tags: string;
  datePublished: string;
  coAuthors?: IAuthor[];
  dots?: Dot[];
  seoTitle?: string;
  seoDescription?: string;
}

interface IPageData {
  id: string;
  html: string;
  meta: IMetaData;
  readingTime: number;
}

export async function load({ params }): Promise<IPageData> {
  const text = await fetch(
    `https://raw.githubusercontent.com/artegoser/artegoser-blog/main/posts/${params.id}.md`
  ).then((res) => res.text());

  if (!text || text === "404: Not Found") {
    return {
      id: params.id,
      html: "<p>This post does not exist</p>",
      meta: {
        title: "Not Found",
        tags: "not-found",
        datePublished: new Date().toISOString(),
      },
      readingTime: 0,
    };
  }

  const parsed = await parseMarkdown(text);

  return {
    id: params.id,
    html: parsed.html,
    meta: parsed.metadata as IMetaData,
    readingTime: readingTime(text),
  };
}
