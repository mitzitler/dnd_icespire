<script lang="ts">
    let {classType : className, ...rest} = $props();
</script>

<div class={className}>{rest.buttonText}</div>


<style>

	.main-nav {
		color: peachpuff
	}

	.side-nav {
		color: slategray
	}

</style>