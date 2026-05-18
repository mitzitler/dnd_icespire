<script lang="ts">
    import { siteState } from '../../../state.store.js';
    let { itemName, itemRoute, main } = $props();

    function updateSiteState(main:boolean, route:string) {
        main ? siteState.mainPaneContent = route : siteState.sidePaneContent = route;
        siteState.activeOpen = "";
    }
</script>

<button onclick={()=>updateSiteState(main, itemRoute)}>
    {itemName}
</button>

<style>
    button {
        font-family: sans-serif;
        font-size: small;
        border-radius: 10%;
    }
</style>