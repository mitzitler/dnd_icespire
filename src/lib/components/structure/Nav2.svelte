<script lang="ts">
    import Dropdown2 from "../ui/Dropdown2.svelte";
</script>

<!-- ref: -->
<!-- https://www.reddit.com/r/sveltejs/comments/1dv1n9d/just_found_the_most_amazing_svelte_5_thing_which/ -->
<nav>
    <Dropdown2 id="locations">
        <span>Locations</span>
        {#snippet dropDownList(main = true)}
            <div class="list-format">
                <li>Phandalin</li>
                <li>Dwarven Excavation</li>
                <li>Gnomenguard</li>
                <li>Butterskull Ranch</li>
                <li>Logger's Camp</li>
                <li>Mountain's Toe Gold Mine</li>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="plots">
        <span>Plots</span>
        {#snippet dropDownList(main = true)}
            <div class="list-format">
                <li>Zhentarim</li>
                <li>Harpers</li>
                <li>The Iron Throne</li>
                <li>Anchorites of Talos</li>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="extras">
        <span>Extras</span>
        {#snippet dropDownList(main = true)}
            <div class="list-format">
                <li>Secret Goals</li>
                <li>Side Quests</li>
            </div>
        {/snippet}
    </Dropdown2>


    <Dropdown2 id="references">
        <span>References</span>
        {#snippet dropDownList(main = false)}
            <div class="list-format">
                <li>NPCs</li>
                <li>Items</li>
                <li>Players</li>
                <li>Prints</li>
            </div>
        {/snippet}
    </Dropdown2>

</nav>

<style>
	nav {
		display: flex;
		gap: 3em;
		flex-direction: row;
		border-radius: 12px;
		margin: 1em;
		height: 5em;
		/* width: 90%; */
		background-color: rgba(240, 248, 255, 0.298);
		padding-top: 0.5em;
        padding-left: 4em;

	}	

    .list-format {
        transform: translate(-20px, 2.5em);
        width: 200px;
        font-size: medium;
        /* border: 1px solid blue; */
		border-radius: 12px;
		background-color: rgba(240, 248, 255, 0.2);
    }

    li {
        margin-bottom: 0.2em;
        transition-duration: 0.5s;
        inline-size: 100%;
    }


    li:hover, li:focus {
        background-color: yellowgreen;
        cursor: pointer;
        border-radius: 12px;
    }

</style>