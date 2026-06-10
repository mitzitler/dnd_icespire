<script lang="ts">
    import WindowHeader from "./WindowHeader.svelte";
    import Main from "../panes/Main.svelte";
    let { WindowClose, WindowMin, WindowMax, main } = $props()
</script>

<!-- need to find a way to have pixel corner take a border color arg -->
<div class="pixel-corners">
    <WindowHeader {WindowClose} {WindowMin} {WindowMax} {main} />
    <Main/>
</div>

<style>
    div {
        background-color: var(--color-idx-11);
        width: 40%;
        margin-right: 0.5em;
        margin-left: 0.75em;
        height: 400px;
        display: flex;
        flex-direction: column;
        min-width: 20em;
        /* need box inset to be hard not blurry */
        box-shadow: inset 0px 0px 1px 1px var(--color-idx-8);
    }
</style>