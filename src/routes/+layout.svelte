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
</script>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">artegoser</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://blog.artegoser.ru"
          target="_blank"
          rel="noreferrer"
        >
          {$_("blog.title")}
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://t.me/artegosr"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
