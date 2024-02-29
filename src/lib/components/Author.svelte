<script lang="ts">
  interface ILink {
    text: string;
    link: string;
  }

  export let img = "https://avatars.githubusercontent.com/u/59178854?v=4";
  export let name = "Artegoser";
  export let link = "https://github.com/artegoser";
  export let dots: string[] | ILink[] = [];

  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<Avatar src={img} width="w-8" rounded="rounded-full" />
<a href={link} class="font-bold ml-2">{name}</a>

{#each dots as dot}
  <span class="mx-3 font-bold text-slate-500">·</span>
  {#if typeof dot === "string"}
    <span class="font-bold text-slate-500">{dot}</span>
  {:else}
    <a href={dot.link} class="font-bold ml-2">{dot.text}</a>
  {/if}
{/each}
