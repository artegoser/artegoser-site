<script lang="ts">
  import type { Dot } from "$lib/types";

  export let name: string;
  export let img: string | undefined = undefined;
  export let link: string | undefined = undefined;
  export let dots: Dot[] | undefined = [];

  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<Avatar src={img} width="h-8" rounded="rounded-full" initials={name} />
<a href={link} class="font-bold ml-2">{name}</a>

{#each dots || [] as dot}
  <span class="mx-3 font-bold text-slate-500">·</span>
  {#if typeof dot === "string"}
    <span class="font-bold text-slate-500">{dot}</span>
  {:else}
    <a href={dot.link} class="font-bold ml-2">{dot.text}</a>
  {/if}
{/each}
