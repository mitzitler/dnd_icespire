<script lang="ts">
    import { getSide } from '../../../state.store.svelte.ts';
</script>

<div>
    {#if getSide()}
        <svelte:component this={getSide()} />
    {/if}
</div>

<style>
    div {
        overflow-y: scroll;
    }
</style>