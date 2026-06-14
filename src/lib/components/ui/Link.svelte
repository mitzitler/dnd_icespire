<script lang="ts">
    import { setSide } from "../../../state.store.svelte.ts";
    let { text, path } = $props()
    async function loadSide() {
        const mod = await import(path);
        console.log("clicked: ", path)
        setSide(mod.default)
    }
</script>

<!-- <span onclick={()=>loadSide()}>
    <a>
    {text}
    </a>
</span> -->

<span></span>

<style>
    span:hover {
        cursor: pointer
    }
</style>