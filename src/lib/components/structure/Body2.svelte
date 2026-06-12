<script>
    import WindowHead2 from "../ui/WindowHead2.svelte";
    import Main from "../panes/Main.svelte";
    import Side from "../panes/Side.svelte";
    import { getMainPaneCol } from "../../../state.store.svelte.ts";
    // let mainRightCol = getMainPaneCol()
    // let sideLeftCol = getMainPaneCol() + 1
    let mainRightCol = 4
    let sideLeftCol = mainRightCol - 1
    // import { getSizes } from "../../../state.store.svelte.ts";
    // let mainRightCol = getSizes()[0]
    // let sideLeftCol = getSizes()[0] + 1
</script>

<div class="body">
    <div class="main window pixel-corners">
       <WindowHead2 id={0}/>
       <!-- div with Main and scroll bar -->
       <Main/>
    </div>
    <div class="side window pixel-corners">
       <WindowHead2 id={1}/>
       <!-- div with Side and scroll bar -->
       <Side/>
    </div>
</div>



<style>
    .body {
        display: grid;
        grid-template-columns: 6;
        gap: 0.5em;
        /* flex-direction: row; */
        
    }
    .main {
        margin-left: 0.75em;
        /* margin-right: 0.25em; */
        grid-column: 1 / 4;
    }
    .side {
        /* margin-left: 0.25em; */
        margin-right: 0.75em;
        grid-column: 4 / 6;
        
    }
    .window {
        background-color: var(--color-idx-11);
        /* width: 40%; */
        /* margin-right: 0.5em;
        margin-left: 0.75em; */
        /* height: 400px; */
        display: flex;
        padding-right: 3px;
        flex-direction: column;
        /* min-width: 20em; */
        box-shadow: inset 0px 0px 0px 2px var(--color-idx-8);
        height: 36em;
    }


</style>

