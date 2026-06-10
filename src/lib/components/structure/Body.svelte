<script>
    import WindowHeader from "../ui/WindowHeader.svelte";
    import Window from "../ui/Window.svelte";
    function WindowClose() {
        console.log("window close function")
    }
    function WindowMin() {
        console.log("window min function")
    }
    function WindowMax() {
        console.log("window max function")
    }
</script>

<!-- do a snippet here -->
<div class="body">
    <Window>
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={true}/>
    </Window>
    <Window>
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={false} />
    </Window>
</div>

<!-- <div class="body">
    <div class="pane" style="width: 35em; margin-right: 0.5em">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={true}/>
    </div>
    <div style="width: 15em">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={false} />
    </div>
</div> -->

<!-- <div class="body">
    <div class="pane">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} />
        <div class="window">
            <Main />
        </div>
        <span class="window-footer"></span>
    </div>

    <div class="pane">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} />
        <div class="window">
            <Side />
        </div>
        <span class="window-footer"></span>
    </div>
</div> -->

<style>
    .body {
        display: flex;
        flex-direction: row;
    }


</style>


<!-- 

<script lang="ts">
    import WindowHeader from "./WindowHeader.svelte";
    import Main from "../panes/Main.svelte";
    let { WindowClose, WindowMin, WindowMax, main } = $props()
</script>

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
        box-shadow: inset 0px 0px 0px 2px var(--color-idx-8);
    }
</style>

-->