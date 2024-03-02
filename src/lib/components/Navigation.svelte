<script lang="ts">
  export let type = "horizontal";

  import { _ } from "svelte-i18n";

  import { getDrawerStore } from "@skeletonlabs/skeleton";

  const drawerStore = getDrawerStore();

  function drawerClose(): void {
    drawerStore.close();
  }

  let nav = [
    {
      name: $_("nav.home"),
      link: "/",
    },
    {
      name: $_("nav.blog"),
      link: "/blog",
    },
  ];
</script>

<div class={`flex ${type === "vertical" ? "flex-col" : "flex-row"}`}>
  {#each nav as item}
    <a href={item.link} class="font-bold ml-2 text-xl" on:click={drawerClose}
      >{item.name}</a
    >
  {/each}
</div>
