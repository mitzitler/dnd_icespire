<script lang="ts">
	import './layout.css';
	import { getFightToggle } from '../state.store.svelte.ts';

	// structure
	import Header from '../lib/components/structure/Header.svelte';
	import Body2 from '../lib/components/structure/Body2.svelte';
	import Nav2 from '../lib/components/structure/Nav2.svelte';
	import Footer from '../lib/components/structure/Footer.svelte';

	// panes

	// import MonsterCard from '../lib/components/widgets/MonsterCard.svelte';


	// const { children } = $props();
	let map_toggle = $state(false);

	let { children } = $props();
</script>


<Header />
<Nav2 />

<!-- {#if getFightToggle()}
	<Monster />
{/if} -->

<!-- <MonsterCard /> -->

<Body2 />

{@render children()}

<Footer />


<style>

	:root {
		--color-idx-1: #8f154f;
		--color-idx-2: #162c54;
		--color-idx-3: #1c4c62;
		--color-idx-4: #3b6166;
		--color-idx-5: #46857b;
		--color-idx-6: #924931;
		--color-idx-7: #b82d46;
		--color-idx-8: #df803e;
		--color-idx-9: #e2a560;
		--color-idx-10: #edce5e;
		--color-idx-11: #fff6d4;
	}
	

	:global(body) {
		font-family: 'Krungthep';
		background-color: var(--color-idx-10);
		height: 100vh;
		border: 4px solid var(--color-idx-2);
		z-index: -1;
	}

</style>