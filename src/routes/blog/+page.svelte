<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";

  export let data;

  const { posts } = data;
</script>

<div
  class="container mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2"
>
  {#each posts as post}
    <a href="/blog/{post.id}">
      <div
        class="block card p-4 m-2 h-full variant-ghost-surface hover:variant-ghost-primary transition"
      >
        <header class="card-header flex flex-col">
          <img
            class="h-64 overflow-hidden rounded-lg object-cover gradient-mask-b-0"
            src={post.cover}
            alt={`${post.title} cover`}
          />
          <div class="font-bold ml-2">{post.title}</div>
        </header>
        <section class="p-4">{post.seoDescription}</section>
        <footer class="card-footer flex gap-2">
          <Avatar
            src="https://avatars.githubusercontent.com/u/59178854?v=4"
            width="h-8"
            rounded="rounded-full"
            initials="artegoser"
          />

          {#each post.coAuthors || [] as author}
            <Avatar
              src={author.img}
              width="h-8"
              rounded="rounded-full"
              initials={author.name}
            />
          {/each}
        </footer>
      </div>
    </a>
  {/each}
</div>
