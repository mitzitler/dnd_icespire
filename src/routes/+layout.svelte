<script lang="ts">
	import './layout.css';

	// structure
	import Header from '../lib/components/structure/Header.svelte';
	import NavBar from '../lib/components/structure/NavBar.svelte';
	import Nav2 from '../lib/components/structure/Nav2.svelte';
	import Footer from '../lib/components/structure/Footer.svelte';

	// panes
	import Main from '../lib/components/panes/Main.svelte';
	import Side from '../lib/components/panes/Side.svelte';
    import Monster from '../lib/components/panes/Monster.svelte';
	import Map from '../lib/components/panes/Map.svelte';

	// const { children } = $props();
	let fight_toggle = $state(false);
	let map_toggle = $state(false);

	let { children } = $props();
</script>

<!-- <Header />
<body>
	<div class="left-div">
		<NavBar />
		{#if fight_toggle}
			<Monster />
		{/if}
		
	</div>
	<div class="right-div">
		<Side />
		{#if map_toggle}
			<Map />
		{/if}
	</div>
</body>
<Footer /> -->

<Header />
<!-- <NavBar /> -->
<Nav2 />

{#if fight_toggle}
	<Monster />
{/if}

{@render children()}

<Footer />


<style>

	:root {
		--color-1: #294545	;
		--color-2: #2f4f4f ; 
		--color-3: #345353 ;
		--color-4: #3c5d5d ;
		--color-5: #476565 ;
		--color-6: #577474 ;
	}

	:global(body) {
		/* background: #2f4f4f; */
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		/* background: radial-shape(elipse); */
		background-image: radial-gradient(
			ellipse farthest-corner at -10% -5%,
			var(--color-1) 0%,
			var(--color-1) 15%,
			var(--color-2) 15%,
			var(--color-2) 60%,
			var(--color-3) 60%,
			var(--color-3) 70%,
			var(--color-4) 70%,
			var(--color-4) 80%,
			var(--color-5) 80%,
			var(--color-5) 90%,
			var(--color-6) 90%,
			var(--color-6) 100%
		);
		background-attachment: fixed;
		background-size: cover;
		height: 300%;
		width: 150%
	}

	/* .left-div {
		width: 60%;
		flex-direction: column;
	}

	.right-div {
		width: 40%;
		flex-direction: column;
	} */


</style>