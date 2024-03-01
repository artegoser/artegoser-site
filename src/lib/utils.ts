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

// Highlight JS
import xml from "highlight.js/lib/languages/xml"; // for HTML
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeHighlight, {
      languages: {
        xml,
        css,
        javascript,
        typescript,
        bash,
        json,
      },
    })
    .use(() => (tree, file) => {
      matter(file);
    })
    .process(markdown);

  const metadata = result.data.matter;
  const html = String(result);

  return { metadata, html };
}
