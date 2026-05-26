<script lang="ts">
    import { setContext } from "svelte";
    import { randomInt } from "crypto";
    import { MonsterList } from "../../../monsters.ts";

    import HP from "./HP.svelte";
    import StatBlock from "./StatBlock.svelte"

    let monster = $state('Orc');
    let initiativeOrder = $state(1);
    let monsterInstance = MonsterList['Orc'];
    setContext('monsterInstance', () => MonsterList[monster]);
    let statList = [monsterInstance.str, monsterInstance.dex, monsterInstance.con,
                    monsterInstance.int, monsterInstance.wis, monsterInstance.cha]

    function setInitiative() {

    }
    let health = $state(0);
    function setHealth(random = false) {
        if (random) {
            health = randomInt(monsterInstance.hitPoints[0], monsterInstance.hitPoints[2]);
        }
        else {
            health = monsterInstance.hitPoints[1];
        }
    }
</script>

<div class="container">
    <div class="heading">
        <title>
            {monster}
        </title>
        <p>
            {monsterInstance.size} {monsterInstance.monsterType} {monsterInstance.alignment}
        </p>
        <p class="initiative">
            {initiativeOrder}
        </p>
        <button onclick={() => setHealth(true)}>RANDOM</button>
        <button onclick={() => setHealth(false)}>STATIC</button>
        <HP health={health}></HP>
    </div>

    <div class="stat-block">
        <StatBlock/>
    </div>

    <div class="addtl-info">

    </div>

</div>

<style>
    .container {
        flex-direction: column;
    }
    .heading {
        flex-direction: row;
    }
    .initiative {
        font-weight: 400;
    }
    .stat-block {
        flex-direction: row;
    }
    .addtl-info {
        flex-direction: row;
    }


</style>