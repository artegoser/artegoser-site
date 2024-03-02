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
  <div class="mx-3 font-bold text-slate-500">·</div>
  {#if typeof dot === "string"}
    <div class="font-bold text-slate-500">{dot}</div>
  {:else}
    <a href={dot.link} class="font-bold">{dot.text}</a>
  {/if}
{/each}
