<script lang="ts">
    import DDItem from "./DDItem.svelte";
    let { obj, main }  = $props();
    // if main, pull up the item in main, else, pull up the item in ref
</script>

<div>
    {#each Object.entries(obj) as [itemName, itemRoute]}
        <DDItem itemName={itemName} itemRoute={itemRoute} main={main}/>
    {/each}
</div>

<style>
    div {
        flex-direction: column;
    }
</style>

