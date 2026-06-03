<script lang="ts">
    let {classType : className, ...rest} = $props();
</script>

<button class={className}>{rest.buttonText}</button>


<style>

	button {
		background-color: orangered;
		border-radius: 12px;
		width: 7em;
		height: 2em;
		margin-left: 1em;
		text-align: center;
		padding: auto;
		color: rgb(28, 16, 6)
	}

	.main-nav {
		font-style: bold;
	}

	.side-nav {
		font-style: italic;
		background-color: orange;
	}

</style>
