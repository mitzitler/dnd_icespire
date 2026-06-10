<script lang="ts">
    import Dropdown2 from "../ui/Dropdown2.svelte";
    import { setMain, setSide } from "../../../state.store.svelte.ts";

    async function loadMain(path: string) {
        const mod = await import(path);
        console.log("clicked: ", path)
        setMain(mod.default)
    }
    async function loadSide(path: string) {
        const mod = await import(path);
        console.log("clicked: ", path)
        setSide(mod.default)
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
                    <li><button onclick={()=>loadSide('../../text/npc_content/all_npcs.svx')}>NPCs</button></li>
                    <li><button onclick={()=>loadSide('../../text/npc_content/magic_items.svx')}>Items</button></li>
                    <li><button onclick={()=>loadSide('../../text/dm_content/players/all_players.svx')}>Players</button></li>
                    <li><button onclick={()=>loadSide('../../text/npc_content/prints_list.svx')}>Prints</button></li>
                </div>
            </div>
        {/snippet}
    </Dropdown2>

</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		height: 4.7em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: 0.75em;
        margin-right: 0.75em;
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
        margin-top: 14px;
        padding-top: 6px;
        padding-bottom: 8px;
        background-color: var(--color-idx-8) ;
        position: absolute;
        z-index: 1001;
    }

    .list-format {
        transform: translate(2px, 0.02em) scale(1, 0.99);
        width: 200px;
    }

    li {
        margin-left: 4px;
        margin-right: 10px;
        /* transition-duration: 0.5s; */
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

</style>