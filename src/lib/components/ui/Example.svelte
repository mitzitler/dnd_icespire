<script lang="ts">

    const bgs = [
        '/cards/fight_blue_card_200.png',
        '/cards/fight_orange_card_200.png',
        '/cards/fight_red_card_200.png',
        '/cards/fight_teal_card_200.png',
        '/cards/fight_yellow_card_200.png'
    ]
    const rand = Math.floor(Math.random() * 5)
    let bgImg = `url("${bgs[rand]}")`

    let downed = $state(false)
    let turnover = $state(false)

    // temp state vars
    let hp_total = 15
    let hp_left = $state(hp_total)
    let init = 3
    let p = "15"
    let ac = 12
    let name = "orc"
    let descr = "blonde"
    let stats = ["16", "12", "16", "7", "11", "10", "(+3)", "(+1)", "(+3)", "(-2)", "(+0)", "(+0)"]
    let spriteUrl = `/sprites/${name}_200.png`
</script>


<div class="card {downed ? 'downed' : turnover ? 'turnover' : ''}" style="--bg-image: {bgImg}">       
    <div class="card-row">
        <button class="button-downed" aria-label="downed" onclick={() => downed = true}>
        </button>
        <button class="button-turnover" aria-label="turnover" onclick={() => turnover = true}>
        </button>
        <div class="name-space">
            {name}
        </div>
    </div>

    <div class="card-row">
        <div class="stat-grid">
            <!-- {#each stats as stat, index} 
                {#if index < 5}
                    <div class="stat">
                        {stat}
                    </div>
                {:else}
                    <div class="modifier">
                        {stat}
                    </div>
                {/if}
            {/each} -->
        </div>
        <div class="sprite-space">
            <img src={spriteUrl} alt={name} />
        </div>
    </div>

    <div class="card-row">
        <div class="stat-space ac">
            {ac}
        </div>
        <!-- <div class="stat-space hp-input">
            <input type="text" placeholder={p}>
        </div> -->
        <div class="stat-space hp-total">
        
        </div>
        <div class="stat-space init">
            {init}
        </div>
    </div>

    <div class="card-row">
        <div class="button-rand-hp">

        </div>
        <div class="button-static-hp">

        </div>
        <div class="button-see-more">

        </div>
        <div class="descr-space">
            {descr}
        </div>
    </div>

</div>

<style>
    .card {
        /* background-image: url("/cards/fight_teal_card_200.png"); */
        background-image: var(--bg-image);
        width: 508px;
        height: 252px;
        /* transform: scale(0.5), translate(-200px, 10px); */
        transform: scale(0.75);
        direction: columns;
        color: var(--color-idx-2);
    }
    .downed { background-image: url("/cards/fight_downed_card_200.png"); }
    .turnover { background-image: url("/cards/fight_turnover_card_200.png"); }
    .card-row {
        direction: row;
    }
    .name-space {
        position: fixed;
        left: 57px;
        top: 11px;
    }
    .name-space {
        position: fixed;
        left: 116px;
        top: 26px;
    }
    .sprite-space {
        position: fixed;
        left: 296px;
        top: 21px;
        background-image: url("../../../assets/sprites/orc_200.png");
    }
    .stat-grid {
        left: 24px;
        top: 140px;
        gap: 34px;
        direction: row
    }
    .stat {
        font-size: smaller;
        color: var(--color-idx-7);
        direction: row
    }
    .modifier {
        font-size: small;
        color: var(--color-idx-2);
    }
    .descr-space {
        position: fixed;
        left: 300px;
        top: 206px;
        font-size: smaller
    }
    .stat-space {
        color: var(--color-idx-7);
    }
    .ac {
        position: fixed;
        top: 156px;
        left: 73px;
        font-size: smaller;

    }
    /* .hp-input {
        position: fixed;
        left: 72px;

    } */
    /* .hp-total {
        position: fixed;
        left: 87px;

    } */
    .init {
        position: fixed;
        top: 156px;
        left: 276px;
        font-size: smaller;
    }
    .button-downed {
        background-image: url('../../../assets/buttons/downed_resting_200.png');
        width: 36px;
        height: 36px;
        transform: scale(0.9);
        position: fixed;
        left: 20px;
        top: 16px;
    }
    .button-downed:hover { background-image: url('../../../assets/buttons/downed_hover_200.png'); }
    .button-downed:active { background-image: url('../../../assets/buttons/downed_pressed_200.png'); }
    
    .button-turnover {
        background-image: url('../../../assets/buttons/turnover_resting_200.png');
        width: 36px;
        height: 36px;
        transform: scale(0.9);
        position: fixed;
        left: 60px;
        top: 16px;
    }
    .button-turnover:hover { background-image: url('../../../assets/buttons/turnover_hover_200.png');}
    .button-turnover:active { background-image: url('../../../assets/buttons/turnover_pressed_200.png');}
    
    .button-rand-hp {
        background-image: url('../../../assets/buttons/randhp_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.9);
        position: fixed;
        left: 20px;
        top: 198px;
    }
    .button-rand-hp:hover { background-image: url('../../../assets/buttons/randhp_hover_200.png');}
    .button-rand-hp:active { background-image: url('../../../assets/buttons/randhp_touch_200.png');}
    
    .button-static-hp {
        background-image: url('../../../assets/buttons/statichp_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.9);
        position: fixed;
        left: 100px;
        top: 198px;

    }
    .button-static-hp:hover { background-image: url('../../../assets/buttons/statichp_hover_200.png'); }
    .button-static-hp:active { background-image: url('../../../assets/buttons/statichp_touch_200.png'); }

    .button-see-more {
        background-image: url('../../../assets/buttons/seemore_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.9);
        position: fixed;
        left: 180px;
        top: 198px;
    }
    .button-see-more:hover { background-image: url('../../../assets/buttons/seemore_hover_200.png');}
    .button-see-more:active { background-image: url('../../../assets/buttons/seemore_touch_200.png');}
</style>