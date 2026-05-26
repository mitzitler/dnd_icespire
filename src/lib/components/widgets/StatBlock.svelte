<script lang="ts">
    import { stat } from "fs";

    let statList = $props();
    // this is [strength, strength_offset], [dex, dex_offset], etc
    let statNameList = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
</script>

<div class="container">
    {#each statList as stat, index}
    <div class="item">
        <p class="name">
            {statNameList[index]}
        </p>
        <br>
        <p>
            {stat[0]}
            {#if stat[1] > 0}
                (+{stat[1]})
            {:else}
                ({stat[1]})
            {/if}
        </p>

    </div>
    {/each}


</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 6;
        max-width: 20px;
    }
    .item {
        background-color: blanchedalmond;
        border-radius: 3px;
    }
    .name {
        font-weight: bold;
    }
</style>