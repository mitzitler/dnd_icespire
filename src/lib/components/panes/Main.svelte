<script lang="ts">
    // import { siteState } from '../../../state.store.svelte.ts';
    // import Gnomenguard from './Gnomenguard.svx';
    // import * as Pane from siteState.mainPaneContent;
    // import siteState.mainPaneContent[1] from siteState.mainPaneContent[2]

    import { getMain } from '../../../state.store.svelte.ts';



</script>

<div>
    {#if getMain()}
        <svelte:component this={getMain()} />
    {/if}
</div>