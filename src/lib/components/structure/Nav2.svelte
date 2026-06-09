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
<nav>
    <Dropdown2 id="places">
        <span>places</span>
        {#snippet dropDownList(main = true)}
            <div class="outer-format">
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
        <span>Plots</span>
        {#snippet dropDownList(main = true)}
            <div class="outer-format">
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
        <span>Extras</span>
        {#snippet dropDownList(main = true)}
            <div class="outer-format">
                <div class="list-format">
                    <li>Secret Goals</li>
                    <li>Side Quests</li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="references">
        <span>References</span>
        {#snippet dropDownList(main = false)}
            <div class="outer-format">
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
		gap: 3em;
		flex-direction: row;
		border-radius: 12px;
		margin: 1em;
		height: 5em;
		width: 90%;
		background-color: rgba(240, 248, 255, 0.298);
		padding-top: 0.5em;
        padding-left: 4em;

	}	

    .outer-format {
        transform: translate(-22px, 2.5em) scale(1, 1.01);
        /* transform: scale(1, 1.2); */
        width: 206px;
        height: 100%;
		border-radius: 12px;
        /* height: 110%; */
        background-color: rgba(240, 248, 255, 0.55);
        box-shadow: 0px 0px 3px 5px rgba(240, 248, 255, 0.5);
        /* box-shadow: inset 0px 0px 40px 40px rgba(240, 248, 255, 0.7); */
    }

    .list-format {
        transform: translate(2px, 0.02em) scale(1, 0.99);
        /* transform: scale(1, 0.8); */
        width: 200px;
        font-size: medium;
        /* border: 1px solid blue; */
		border-radius: 12px;
		background-color: rgba(240, 248, 255, 0.2);
    }

    li {
        margin-bottom: 0.2em;
        transition-duration: 0.5s;
        inline-size: 100%;
    }


    li:hover, li:focus {
        background-color: yellowgreen;
        cursor: pointer;
        border-radius: 12px;
    }

</style>