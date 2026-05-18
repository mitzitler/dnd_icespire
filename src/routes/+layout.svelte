<script lang="ts">
	import './layout.css';

	// structure
	import Header from '../lib/components/structure/Header.svelte';
	import NavBar from '../lib/components/structure/NavBar.svelte';
	import Footer from '../lib/components/structure/Footer.svelte';

	// panes
	import Main from '../lib/components/panes/Main.svelte';
	import Side from '../lib/components/panes/Side.svelte';
    import Monster from '../lib/components/panes/Monster.svelte';
	import Map from '../lib/components/panes/Map.svelte';

	// const { children } = $props();
	let fight_toggle = $state(false);
	let map_toggle = $state(false);
</script>

<Header />
<body>
	<div class="left-div">
		<NavBar />
		{#if fight_toggle}
			<Monster />
		{/if}
		<Main />
	</div>
	<div class="right-div">
		<Side />
		{#if map_toggle}
			<Map />
		{/if}
	</div>
</body>
<Footer />

<style>

	.left-div {
		width: 60%;
		flex-direction: column;
	}

	.right-div {
		width: 40%;
		flex-direction: column;
	}


</style>