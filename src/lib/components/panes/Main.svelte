<script lang="ts">
    import { getMain } from '../../../state.store.svelte.ts';
    // Static imports ensure layout CSS is bundled and injected, not lazy-loaded
    import '../../text/doc_layout.svelte';
    import '../../text/ref_layout.svelte';
</script>

<div>
    {#if getMain()}
        <svelte:component this={getMain()} />
    {/if}
</div>

<style>
    div {
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
        padding-bottom: 20px;
        padding-top: 20px;
        padding-right: 10px;
        background-color: var(--color-idx-5);
        border: 1px solid var(--color-idx-3);
        width: 16px;
    }

        /* Track */
    ::-webkit-scrollbar-track {
        padding-bottom: 20px;
        padding-top: 20px;
        padding-right: 10px;
        background-color: var(--color-idx-5);
        border: 1px solid var(--color-idx-3);
        width: 16px;
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-idx-4); 
        padding: 4px;
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-idx-2); 
    }
</style>