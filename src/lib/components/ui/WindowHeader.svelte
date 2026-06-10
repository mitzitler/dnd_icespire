<script>
    let { WindowClose, WindowMin, WindowMax, main } = $props();
</script>

<div class="container pixel-corners">
    <button class="close"  aria-label="close" onclick={()=>WindowClose()}></button>
    <button class="min"    aria-label="min"   onclick={()=>WindowMin()}></button>
    <button class="max"    aria-label="max"   onclick={()=>WindowMax()}></button>
    <!-- <span class="space"></span> -->
</div>

<style>
    .container {
        flex-direction: row;
        border: var(--color-idx-8) solid 2px ;
        background-color: var(--color-idx-9);
        height: 32px;
        margin-left: 2px;
        margin-top: 2px;
        margin-right: 4px;
        gap: 1px;
        /* padding-left: 0.2em;
        padding-top: 0.2em;
        padding-bottom: 0.2em; */
        /* gap: 0.3em; */
    }
    button {
        height: 48px;
        width: 48px;
        transform: scale(0.5);
        margin: -10px;
        color: black;
        cursor: pointer
    }
    .close {
        background-image: url('../../../assets/buttons/x_resting_200.png');
    }
    .close:hover {
        background-image: url('../../../assets/buttons/x_hover_200.png');
    }
    /* .close:touch {
        background-image: url('../../../assets/buttons/x_pressed_200.png');
    } */
    .min {
        background-image: url('../../../assets/buttons/-_resting_200.png');
    }
    .min:hover {
        background-image: url('../../../assets/buttons/-_hover_200.png');
    }
    /* .min:touch {
        background-image: url('../../../assets/buttons/-_pressed_200.png');
    } */
    .max {
        background-image: url('../../../assets/buttons/+_resting_200.png');
    }
    .max:hover {
        background-image: url('../../../assets/buttons/+_hover_200.png');
    }
    /* .max:touch {
        background-image: url('../../../assets/buttons/+_pressed_200.png');
    } */
</style>