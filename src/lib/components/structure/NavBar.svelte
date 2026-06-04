<script lang="ts">
	import DDButton from "../ui/DDButton.svelte";
	import DDList from "../ui/DDList.svelte";
    import { siteState } from '../../../state.store.svelte.js';
	import { locationsRoutes, plotsRoutes, extrasRoutes, refRoutes } from "../../../imports.ts";
	
	function handleClickOpen(e: string) {
		siteState.activeOpen = siteState.activeOpen === e ? "": e;
		console.log(e, " was clicked")
	}
	let locations = false;

</script>


<nav>
	<DDButton buttonText="Locations" onclick={() => handleClickOpen("Locations")} classType="main-nav" />
		{#if locations}
			<DDList obj={locationsRoutes} main={true}/>
		{/if}
		<!-- {#if siteState.activeOpen == "Locations"}
			<DDList obj={locationsRoutes} main={true}/>
		{/if} -->
	<DDButton buttonText="Plots" onclick={() => handleClickOpen("Plots")} classType="main-nav" />
		{#if siteState.activeOpen == "Plots"}
			<DDList obj={plotsRoutes} main={true}/>
		{/if}
	<DDButton buttonText="Extras" onclick={() => handleClickOpen("Extras")} classType="main-nav" />
		{#if siteState.activeOpen == "Extras"}
			<DDList obj={extrasRoutes} main={true}/>
		{/if}
	<DDButton buttonText="Reference" onclick={() => handleClickOpen("Reference")} classType="side-nav" />
		{#if siteState.activeOpen == "Reference"}
			<DDList obj={refRoutes} main={false}/>
		{/if}
</nav>

<style>
	nav {
		display: flex;
		gap: 2em;
		flex-direction: row;
		border-radius: 12px;
		margin: 1em;
		height: 3em;
		/* width: 90%; */
		background-color: rgba(240, 248, 255, 0.298);
		padding-top: 0.5em;

	}	

</style>
