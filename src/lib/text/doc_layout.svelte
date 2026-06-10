<script>
    let data = $props()
</script>

<div>
<h1>{data.title}</h1>
<br>
    {@render data()}
</div>

<style>

    :global(body) {
        margin-left: 12px;
        font-family: 'Krungthep';
        color: var(--color-idx-10);
        font-weight: 200;
    }
    h1 {
        font-size: 20px;
        font-weight: 500;
    }

    h2 {
        font-size: 16px;
    }

    h3 {
        font-size: 12px;
        font-weight: 400;
    }

    p {
        margin-left: 4px;
        font-size: 10px;
    }

    a {
        color: var(--color-idx-7);
        text-decoration: underline;
    }

    a:hover {
        color: var(--color-idx-4)
    }

    /* also need styling for block quotes */

</style>
