<script lang="ts">
    import type { Snippet } from "svelte";
    import { getOpenId, setOpenId } from '../dropdownState.svelte.ts'

    let { children, dropDownList, id}: { children: Snippet, dropDownList: Snippet, id: string } = $props();
    let isOpen = $derived(getOpenId() === id);
    function toggleOpen() {
        setOpenId(getOpenId() === id ? null : id);
    }

</script>

<div>
</div>
    <div class="dropdown dropdown-hover" 
        style="background-color: {id === 'references' ? 'orange' : '' }; font-style: {id === 'references' ? 'italic' : 'bold'} " >
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <button onmouseenter={() => setOpenId(id)} 
            // onmouseleave={() => setOpenId(null)}
            // onclick={toggleOpen} 
            class="button" tabindex="0">
            {@render children()}
        </button>
        {#if isOpen}
            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
            <ul tabindex="0">
                <!-- class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow" -->
                {@render dropDownList()}
            </ul>
        {/if}
    </div>

<style>

	.dropdown {
		background-color: orangered;
		border-radius: 12px;
		width: 9em;
		height: 3em;
        margin-top: 0.2em;
		/* margin-left: 1em; */
		text-align: center;
        font-size: large;
		padding-top: 0.7em;
		color: rgb(28, 16, 6);
        transition: all 0.5s ease;
	}

	/* .main-nav {
		font-style: bold;
	}

	.side-nav {
		font-style: italic;
		background-color: orange;
	} */

</style>
