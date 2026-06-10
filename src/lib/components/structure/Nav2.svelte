<script lang="ts">
    import Dropdown2 from "../ui/Dropdown2.svelte";

    import { setMain } from "../../../state.store.svelte.ts";
    import { mainRoutes } from "../../../imports.ts";

    // async function loadMain(name: string) {
    //     const path = mainRoutes[name][0]
    //     const mod = await import(path);
    //     console.log("clicked: ", name)
    //     setMain(mod.default)
    // }
    async function loadMain(path: string) {
        const mod = await import(path);
        console.log("clicked: ", path)
        setMain(mod.default)
    }

</script>

<!-- ref: -->
<!-- https://www.reddit.com/r/sveltejs/comments/1dv1n9d/just_found_the_most_amazing_svelte_5_thing_which/ -->
<!-- having class="pixel-corners" using position:fixed ruins the dropdown, for now removing -->
<nav >
    <Dropdown2 id="places">
        <div></div>
        {#snippet dropDownList(main = true)}
            <div class="outer-format pixel-corners">
                <div class="list-format">
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/phandalin.svx')}>Phandalin</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/dwarven_excavation.svx')}>Dwarven Excavation</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/gnomenguard.svx')}>Gnomenguard</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/butterskull_ranch.svx')}>Butterskull Ranch</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/loggers_camp.svx')}>Logger's Camp</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/locations/mountains_toe_gold_mine.svx')}>Mountain's Toe Gold Mine</button></li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="plots">
        <span></span>
        {#snippet dropDownList(main = true)}
            <div class="outer-format pixel-corners">
                <div class="list-format">
                    <li><button onclick={()=>loadMain('../../text/dm_content/plotlines/zhentarim.svx')}>Zhentarim</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/plotlines/harpers.svx')}>Harpers</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/plotlines/ironthrone.svx')}>The Iron Throne</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/plotlines/anchorites.svx')}>Anchorites of Talos</button></li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="extras">
        <span></span>
        {#snippet dropDownList(main = true)}
            <div class="outer-format pixel-corners">
                <div class="list-format">
                    <li>Secret Goals</li>
                    <li>Side Quests</li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="references">
        <span></span>
        {#snippet dropDownList(main = false)}
            <div class="outer-format pixel-corners">
                <div class="list-format">
                    <li><button onclick={()=>loadMain('../../text/npc_content/all_npcs.svx')}>NPCs</button></li>
                    <li><button onclick={()=>loadMain('../../text/npc_content/magic_items.svx')}>Items</button></li>
                    <li><button onclick={()=>loadMain('../../text/dm_content/players/all_players.svx')}>Players</button></li>
                    <li><button onclick={()=>loadMain('../../text/npc_content/prints_list.svx')}>Prints</button></li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>

</nav>

<style>
	nav {
		display: flex;
		/* gap: 0.5em; */
		flex-direction: row;
		/* border-radius: 12px; */
		/* margin: 1em; */
		/* height: 5em; */
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0.75em;
        margin-right: 0.75em;
		/* width: 90%; */
		background-color: var(--color-idx-8);
        border: 2px solid var(--color-idx-1);
		padding-top: 0.2em;
        padding-left: 1em;
        position: relative;
        z-index: 1000;
        font-family: 'Krungthep';
        

	}	

    .outer-format {
        transform: translate(-22px, 2.5em) scale(1, 1.01);
        /* width: 206px;
        height: 100%;
		border-radius: 12px; */
        margin-top: 10px;
        background-color: var(--color-idx-8) ;
        position: absolute;
        z-index: 1001;
        /* box-shadow: 0px 0px 3px 5px rgba(240, 248, 255, 0.5); */
    }

    .list-format {
        transform: translate(2px, 0.02em) scale(1, 0.99);
        /* transform: scale(1, 0.8); */
        width: 200px;
        /* font-size: medium; */
        /* border: 1px solid blue; */
		/* border-radius: 12px; */
		/* background-color: rgba(240, 248, 255, 0.2); */
    }

    li {
        /* margin-bottom: 0.2em;
        margin-left: 2px; */
        margin: 4px;
        /* transition-duration: 0.5s; */
        /* inline-size: 100%; */
        background: var(--color-idx-9);
        font-size: small;
        color: var(--color-idx-6);
    }
    li:nth-child(odd) { background: var(--color-idx-10); }


    li:hover, li:focus {
        font-weight: 500;
        color: var(--color-idx-11);
        cursor: pointer;
    }

    /* .places {
        background-image: url('../../../assets/buttons/0places_resting_200.png');
    } */

</style>