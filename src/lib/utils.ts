export function readingTime(text: string) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}

import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { matter } from "vfile-matter";
import rehypeHighlight from "rehype-highlight";

import languages from "./hljs-langs";

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { languages })
    .use(() => (_, file) => {
      matter(file);
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  const metadata = result.data.matter;
  const html = String(result);

  return { metadata, html };
}
