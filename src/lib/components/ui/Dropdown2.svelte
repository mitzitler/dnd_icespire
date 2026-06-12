<script lang="ts">
    import type { Snippet } from "svelte";
    import { getOpenId, setOpenId } from '../../../state.store.svelte.ts'

    let { children, dropDownList, id}: { children: Snippet, dropDownList: Snippet, id: string } = $props();
    let isOpen = $derived(getOpenId() === id);
    let closeTimer: ReturnType<typeof setTimeout>;
    function toggleOpen() {
        setOpenId(getOpenId() === id ? null : id);
    }
    function handleMouseEnter() {
        clearTimeout(closeTimer);
        setOpenId(id);
    }
    function handleMouseLeave() {
        closeTimer = setTimeout(() => setOpenId(null), 150);
    }

</script>

<div>
</div>

    <!-- make this div box slightly big on the bottom to have a grace area for toggling closed -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="dropdown dropdown-hover {id}"
        onmouseenter={handleMouseEnter}
        onmouseleave={handleMouseLeave}
        >
        <button 
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
        width: 166px;
        height: 64px;
        transform: scale(0.9);
        transition: all 0.5s ease;
	}
    .places {
        background-image: url('../../../assets/buttons/1places_resting_200.png');
    }

    .places:hover {
        background-image: url('../../../assets/buttons/1places_hover_200.png');
        /* transform: scale(0.9) translate(1px, -1px); */
        transform: scale(0.9);
    }
    .plots {
        background-image: url('../../../assets/buttons/1plots_resting_200.png');
    }
    .plots:hover {
        background-image: url('../../../assets/buttons/1plots_hover_200.png');
        /* transform: scale(0.9) translate(1px, -1px); */
        transform: scale(0.9);
    }

    .extras {
        background-image: url('../../../assets/buttons/1extras_resting_200.png');
    }
    .extras:hover {
        background-image: url('../../../assets/buttons/1extras_hover_200.png');
        /* transform: scale(0.9) translate(1px, -1px); */
        transform: scale(0.9);
    }

    .references {
        background-image: url('../../../assets/buttons/1refs_resting_200.png');
    }
    .references:hover {
        background-image: url('../../../assets/buttons/1refs_hover_200.png');
        /* transform: scale(0.9) translate(1px, -1px); */
        transform: scale(0.9);
    }

	/* .main-nav {
		font-style: bold;
	}

	.side-nav {
		font-style: italic;
		background-color: orange;
	} */

</style>
