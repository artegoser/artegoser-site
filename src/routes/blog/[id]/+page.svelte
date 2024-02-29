<script lang="ts">
  export let data;

  import Author from "$lib/components/Author.svelte";

  const { id, html, meta, readingTime } = data;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.seoDescription} />
  <meta name="keywords" content={meta.tags} />
  <meta name="author" content="artegoser" />
</svelte:head>

<div class="container mx-auto flex flex-col">
  <div
    class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone h1 mt-10 text-center"
  >
    {meta.title}
  </div>

  <div class="flex justify-center mt-10">
    <Author
      dots={[new Date(meta.datePublished).toLocaleDateString(), readingTime]}
    />
  </div>

  <div class="mt-10 mx-2 prose-lg break-words">
    {@html html}
  </div>
</div>
