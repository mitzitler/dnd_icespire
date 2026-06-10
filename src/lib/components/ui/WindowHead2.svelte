<script lang="ts">
    // import type { Snippet } from "svelte";
    import { setSizes, setMain, setSide } from '../../../state.store.svelte.ts'

    // let { children, id }: { children: Snippet, id: number} = $props();
    let { id }: { id: number} = $props();

    function WindowClose() {
        setSizes(id, 0)
        if (id == 0 ) {
            setMain(null)
        }
        else if ( id == 1 ) {
            setSide(null)
        }
    }
    function WindowMin() {
        setSizes(id, 1)
    }
    function WindowMax() {
        setSizes(id, 5)
    }
    
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
        margin-left: 4px;
        margin-top: 4px;
        margin-right: 20px;
        width: 99%;
        gap: 1px;
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
    .close:active {
        background-image: url('../../../assets/buttons/x_pressed_200.png');
    }
    .min {
        background-image: url('../../../assets/buttons/-_resting_200.png');
    }
    .min:hover {
        background-image: url('../../../assets/buttons/-_hover_200.png');
    }
    .min:active {
        background-image: url('../../../assets/buttons/-_pressed_200.png');
    }
    .max {
        background-image: url('../../../assets/buttons/+_resting_200.png');
    }
    .max:hover {
        background-image: url('../../../assets/buttons/+_hover_200.png');
    }
    .max:active {
        background-image: url('../../../assets/buttons/+_pressed_200.png');
    }
</style>