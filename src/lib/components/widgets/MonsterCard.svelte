<script lang="ts">
    import { randomInt } from "node:crypto";


    // let rand = randomInt(5)
    // let imgPath = "../../../assets/static/"
    // switch (rand) {
    //      case 0: imgPath = imgPath + "fight_blue_card_200.png";
    //      case 1: imgPath = imgPath + "fight_orange_card_200.png";
    //      case 2: imgPath = imgPath + "fight_red_card_200.png";
    //      case 3: imgPath = imgPath + "fight_teal_card_200.png";
    //      case 4: imgPath = imgPath + "fight_yellow_card_200.png";
    // }
    // let bgImg = `url("../../../assets/static/fight_teal_card_200.png")`
    // let downedImg = `url( {imgPath} fight_downed_card_200.png")`
    // let turnoverImg = imgPath + "fight_turnover_card_200.png"
    // let turnover = $state(false)
    // let downed = $state(false)

    let downed = false
    let turnover = false

    // temp state vars
    let hp_total = 15
    let hp_left = $state(hp_total)
    let init = 3
    let p = "15"
    let ac = 12
    let name = "orc"
    let stats = ["16", "12", "16", "7", "11", "10", "(+3)", "(+1)", "(+3)", "(-2)", "(+0)", "(+0)"]
</script>

<div class="card"
    // class={` card ${downed ? 'downed' : turnover ? 'turnover' : '' } } `} 
    // style="--bg-image={bgImg}"
    // style:--bg-downed-image={downedImg}
    // style:--bg-turnover-image={turnoverImg}
    >
    x
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

        </div>
        <div class="sprite-space">

        </div>
    </div>

    <div class="card-row">
        <div class="stat-space ac">
            {ac}
        </div>
        <div class="stat-space hp-input">
            <input type="text" placeholder={p}>
        </div>
        <div class="stat-space hp-total">
        
        </div>
        <div class="stat-space init">
        
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

        </div>
    </div>

</div>


<style>
    .card {

        /* position:relative;
        background-position:bottom;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; */
        
        width: 508px;
        height: 252px;
        transform: scale(0.5);
        direction: columns;
        color: var(--color-idx-2);
        background-color: var(--color-idx-8);
        /* background-image: var(--bg-image); */
    }
    /* .downed { background-image: var(--bg-downed-image); } */
    /* .turnover { background-image: var(--bg-turnover-image); } */
    .card-row {
        direction: row;
    }
    /* .name-space {
        position: fixed;
        left: 57px;
        top: 11px;
    } */
    /* .sprite-space {
        position: fixed;
        left: 168px;
        top: 18px
    } */
    /* .descr-space {
        position: fixed;
        left: 147px;
        top: 99px;
    } */
    /* .stat-space {
        color: var(--color-idx-7);
    } */
    /* .ac {
        position: fixed;
        left: 37px;

    } */
    /* .hp-input {
        position: fixed;
        left: 72px;

    } */
    /* .hp-total {
        position: fixed;
        left: 87px;

    } */
    /* .init {
        position: fixed;
        left: 135px;

    } */

    /* .button-downed {
        background-image: url('../../../assets/buttons/downed_resting_200.png');
        width: 36px;
        height: 36px;
        transform: scale(0.5);
        position: fixed;
        left: 12px;
        top: 10px;
    } */
    /* .button-downed:hover { background-image: url('../../../assets/buttons/downed_hover_200.png'); } */
    /* .button-downed:active { background-image: url('../../../assets/buttons/downed_pressed_200.png'); } */
    
    /* .button-turnover {
        background-image: url('../../../assets/buttons/turnover_resting_200.png');
        width: 36px;
        height: 36px;
        transform: scale(0.5);
        position: fixed;
        left: 32px;
        top: 10px;
    } */
    /* .button-turnover:hover { background-image: url('../../../assets/buttons/turnover_hover_200.png');} */
    /* .button-turnover:active { background-image: url('../../../assets/buttons/turnover_pressed_200.png');} */
    
    /* .button-rand-hp {
        background-image: url('../../../assets/buttons/randhp_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.5);
        position: fixed;
        left: 18px;
        top: 99px;
    } */
    /* .button-rand-hp:hover { background-image: url('../../../assets/buttons/randhp_hover_200.png');} */
    /* .button-rand-hp:active { background-image: url('../../../assets/buttons/randhp_pressed_200.png');} */
    
    /* .button-static-hp {
        background-image: url('../../../assets/buttons/statichp_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.5);
        position: fixed;
        left: 60px;
        top: 99px;

    } */
    /* .button-static-hp:hover { background-image: url('../../../assets/buttons/statichp_hover_200.png'); } */
    /* .button-static-hp:active { background-image: url('../../../assets/buttons/statichp_pressed_200.png'); } */

    /* .button-see-more {
        background-image: url('../../../assets/buttons/seemore_resting_200.png');
        width: 80px;
        height: 34px;
        transform: scale(0.5);
        position: fixed;
        left: 104px;
        top: 99px;
    } */
    /* .button-see-more:hover { background-image: url('../../../assets/buttons/seemore_hover_200.png');} */
    /* .button-see-more:active { background-image: url('../../../assets/buttons/seemore_pressed_200.png');} */

</style>