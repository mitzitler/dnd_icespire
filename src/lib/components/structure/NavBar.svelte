<script lang="ts">
	import DDButton from "../ui/DDButton.svelte";
	import DDList from "../ui/DDList.svelte";
    import { siteState } from '../../../state.store.js';
	import { locationsRoutes, plotsRoutes, extrasRoutes, refRoutes } from "../../../imports.ts";

	function handleClickOpen(e: string) {
		siteState.activeOpen = siteState.activeOpen === e ? "": e;
	}

</script>


<nav>
	<DDButton buttonText="Locations" onclick={() => handleClickOpen("Locations")} classType="main-nav">
		{#if siteState.activeOpen == "Locations"}
			<DDList obj={locationsRoutes} main={true}/>
		{/if}
	</DDButton>
	<DDButton isOpen buttonText="Plots" onclick={() => handleClickOpen("Plots")} classType="main-nav">
		{#if siteState.activeOpen == "Plots"}
			<DDList obj={plotsRoutes} main={true}/>
		{/if}
	</DDButton>
	<DDButton isOpen buttonText="Extras" onclick={() => handleClickOpen("Extras")} classType="main-nav">
		{#if siteState.activeOpen == "Extras"}
			<DDList obj={extrasRoutes} main={true}/>
		{/if}
	</DDButton>
	<DDButton isOpen buttonText="Reference" onclick={() => handleClickOpen("Reference")} classType="side-nav">
		{#if siteState.activeOpen == "Reference"}
			<DDList obj={refRoutes} main={false}/>
		{/if}
	</DDButton>
</nav>

<style>
	nav {
		flex-direction: row;
	}	

</style>
