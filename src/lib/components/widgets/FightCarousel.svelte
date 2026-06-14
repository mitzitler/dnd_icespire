<script lang="ts">
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import { MonsterConfig, FightConfigItem } from "../../../imports.ts";
    import FightCard from "./FightCard.svelte";
    import PlayerCard from "./PlayerCard.svelte";
    // this receives as a prop a FightConfig object from the svx in main panel

    let cardInfoReady = $state(false);

    let players = ['Al', 'Arfer', 'Eve', 'Dopio', 'Gasshole'];
    let monsters: MonsterConfig = $props();
    // let allItems = $derived(monsters);
    let items: FightConfigItem[] = $state([]);

    function createCardInfo() {
        
        // let playerSettings = {initiative_default: 0, monster_type: false};
        // let monsterSettings = {initiative_default: 1, monster_type: true};
        for (let p in players) {
            items = [...items, 
                {name: p, initiative_default: 0, monster_type: false, gray: false}]
        }
        for (let m in monsters) {
            let index = 0;
            for (index; index < monsters[m]; index++) {
                let mKey = m + '-' + String(index);
                items = [...items, 
                    {name: mKey, initiative_default: 1, monster_type: true, gray: false}]
            }
        }
        cardInfoReady = true
    }
    onMount(() => createCardInfo())

    const flipDurationMs = 300;
    function handleDndConsider(e: CustomEvent) {
        items = e.detail.items;
    }
    function handleDndFinalize(e: CustomEvent) {
        items = e.detail.items;
    }

    // <div use:dndzone="{{items: myItems, ...otherOptions}}" on:consider="{handler}" on:finalize="{handler}">
    //     {#each myItems as item(item.id)}
    //         <div>this is now a draggable div that can be dropped in other dnd zones</div>
    //     {/each}
    // </div>



</script>

{#if cardInfoReady}
    <section class="carousel-container" 
        use:dndzone="{{items, flipDurationMs}}"
        onconsider="{handleDndConsider}"
        onfinalize="{handleDndFinalize}" >
            {#each items as item(item.name)}
            <!-- svelte-ignore a11y_click_events_have_key_events a11y-no-static-element-interactions -->
                    <div class="card" class:grayscale = {item.gray} class:monster = {item.monster_type} animate:flip="{{duration: flipDurationMs}}"
                        ondblclick={() => item.gray = !item.gray} 
                        role="button" tabindex="0">
                        {#if item.monster_type = false}
                            <PlayerCard player= {item.name} />
                        {:else}
                            <FightCard monsterAndIdentifier={item.name} defaultInitiative={item.initiative_default}/>
                        {/if}
                    </div>
            {/each}
            <!-- {#each Object.entries(players) as p, i}
                <div class="player-card">
                    <h1>{p}</h1>
                    (small photo?)
                    <span>
                        <p>Initiative: </p>
                        <input type="text" defaultValue={i}/>
                    </span>
                </div>
            {/each}
            {#each Object.entries(monsters) as [m, c] }
                {#each {length: c} as _}
                    <div class="monster-card">
                        <FightCard monster={m} />
                    </div>
                {/each}
            {/each} -->
    </section>
{/if}


<style>
    .carousel-container {
        overflow: scroll;
        width: 50%;
        padding: 0.3em;
        height: 200px;
        cursor: grab;
        border: 1px solid black;
        /* width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px 0; */
    }

    /* .carousel-container.active {
        cursor: grabbing;
    } */

    .card {
        width: 50%;
        padding: 0.2em;
        margin: 0.15em;
        border: 1px solid blue;
    }

    .grayscale {
        filter: grayscale(90%)
    }

    .monster {
        border: 1px solid red;
    }

    /* .player-card .monster-card {
        flex: 0 0 200px; 
        height: 250px;
        background-color: #3498db;
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        pointer-events: none; 
    } */

</style>