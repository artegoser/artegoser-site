<script lang="ts">
  import "../app.postcss";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";

  import "highlight.js/styles/github-dark.css";

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import { _ } from "svelte-i18n";

  import {
    initializeStores,
    Drawer,
    getDrawerStore,
  } from "@skeletonlabs/skeleton";
  import SideLinks from "$lib/components/SideLinks.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  import { Icon, Bars3 } from "svelte-hero-icons";
  import { afterNavigate } from "$app/navigation";

  initializeStores();

  const drawerStore = getDrawerStore();

  function drawerOpen(): void {
    drawerStore.open({});
  }

  afterNavigate(() => {
    document.getElementById("page")?.scrollTo(0, 0);
  });
</script>

<Drawer>
  <div class="p-4">
    <strong class="text-xl uppercase">Artegoser</strong>
    <hr class="my-2" />
    <Navigation type="vertical" />
    <hr class="my-2" />
    <SideLinks />
  </div>
</Drawer>
<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
          <Icon src={Bars3} class="w-6 h-6" />
        </button>

        <a href="/">
          <strong class="text-xl uppercase">artegoser</strong>
        </a>
        <span class="divider-vertical h-7 mx-5 invisible lg:visible" />
        <!-- <a class="nav-link invisible lg:visible" href="/blog">
          {$_("nav.blog")}
        </a> -->
        <div class="invisible lg:visible">
          <Navigation />
        </div>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <div class="invisible lg:visible">
          <SideLinks />
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <div id="page">
    <slot />
  </div>
</AppShell>
