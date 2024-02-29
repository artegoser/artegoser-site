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

<div class="container mx-auto flex flex-col justify-center">
  <h1
    class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone h1 pt-10 text-center"
  >
    {meta.title}
  </h1>

  <div class="flex justify-center items-center pt-10">
    <Author date={meta.datePublished} {readingTime} />
  </div>

  <div class="p-10 prose-lg break-words">
    {@html html}
  </div>
</div>
