<script>
    import WindowHeader from "../ui/WindowHeader.svelte";
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

<div class="body">
    <div class="pane" style="width: 55em; margin-right: 0.5em">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={true}/>
    </div>
    <div style="width: 35em">
        <WindowHeader {WindowClose} {WindowMin} {WindowMax} main={false} />
    </div>
</div>

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

    .pane {
        display: flex;
        flex-direction: column;
        min-width: 20em;
    }

</style>