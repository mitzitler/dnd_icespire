<script>
  import { onMount } from 'svelte';
  import { siteState } from '../../../state.store.svelte.js';
  let markdownComponent = siteState.mainPaneContent[1];
/*
  onMount(async () => {
    // Dynamically import the markdown file
    const module = await import(siteState.mainPaneContent[1]);
    // The default export of an mdsvex-processed file is a Svelte component
    // siteState.mainPaneContent[1].set(module.default);
  });
*/
</script>

{#if markdownComponent}
  <!-- <svelte:component this={markdownComponent} /> -->
{:else}
  <p>Loading markdown...</p>
{/if}