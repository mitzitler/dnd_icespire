<script>
    let { WindowClose, WindowMin, WindowMax, main } = $props();
</script>

<div class="container">
    <button  class="close" onclick={()=>WindowClose()}>x</button>
    <button class="min"   onclick={()=>WindowMin()}>-</button>
    <button class="max"   onclick={()=>WindowMax()}>+</button>
    <!-- <span class="space"></span> -->
</div>

<style>
    .container {
        flex-direction: row;
        border: rgb(39, 37, 37) solid 2px ;
        background-color: rgb(176, 176, 176);
        height: 1.9em;
        margin-left: 1em;
        margin-right: 0.8em;
        margin-bottom: 0.2em;
        padding-left: 0.2em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        gap: 0.3em;
    }
    button {
        border-radius: 7px;
        height: 1.3em;
        width: 1.3em;
        color: black;
    }
    .close {
        background-color: red;
    }
    .min {
        background-color: rgb(226, 204, 13);
    }
    .max {
        background-color: rgb(109, 157, 13);
    }
</style>