import type { IBlogPostMetaData } from "$lib/types";

export async function load() {
  const posts: IBlogPostMetaData[] = await fetch(
    "https://raw.githubusercontent.com/artegoser/artegoser-blog/main/index.json"
  ).then((res) => res.json());

  return { posts };
}
