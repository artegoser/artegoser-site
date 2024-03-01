<script lang="ts">
  export let data;

  import Author from "$lib/components/Author.svelte";
  import { onMount } from "svelte";
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  import { _ } from "svelte-i18n";

  const { html, meta, readingTime } = data;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.seoDescription} />
  <meta name="keywords" content={meta.tags} />
  <meta name="author" content="artegoser" />
</svelte:head>

<div class="container mx-auto flex flex-col">
  <div
    class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone h1 py-10 text-center"
  >
    {meta.title}
  </div>

  <div class="flex justify-center">
    <Author
      name="Artegoser"
      img="https://avatars.githubusercontent.com/u/59178854?v=4"
      link="https://github.com/artegoser"
      dots={[
        ...(meta.dots || []),
        new Date(meta.datePublished).toLocaleDateString(),
        `${readingTime} ${$_("blog.readingTime")}`,
      ]}
    />
  </div>

  {#each meta.coAuthors || [] as author}
    <div class="flex justify-center mt-10">
      <Author
        img={author.img}
        name={author.name}
        link={author.link}
        dots={author.dots}
      />
    </div>
  {/each}

  <div class="mt-10 mx-2 prose-lg break-words" id="content">
    {@html html}
  </div>
</div>
