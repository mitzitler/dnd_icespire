<script>
    let {children} = $props()
    // let { children } = props;
</script>

<main class="ref-content">
    {@render children()}
</main>

<style>

    .ref-content :global(main) {
        font-family: 'Krungthep';
        color: var(--color-idx-2);
        font-weight: 200;
        font-size: 10px;
    }
    .ref-content :global(h1) {
        margin-left: 20px;
        color: var(--color-idx-2);
        margin-top: 6px;
        font-size: 22px;
        font-weight: 500;
    }

    .ref-content :global(h2) {
        margin-left: 20px;
        color: var(--color-idx-2);
        margin-top: 4px;
        font-size: 18px;
    }

    .ref-content :global(h3) {
        margin-left: 20px;
        color: var(--color-idx-2);
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
    }

    .ref-content :global(h4) {
        margin-left: 20px;
        color: var(--color-idx-2);
        margin-top: 4px;
        font-size: 10px;
        font-weight: 400;
    }

    .ref-content :global(p) {
        margin-left: 10px;
        margin-bottom: 10px;
        color: var(--color-idx-2);
        font-size: 10px;
    }

    .ref-content :global(li) {
        margin-left: 20px;
        color: var(--color-idx-2);
        font-size: 10px;
    }

    /* .ref-content :global(li::before) {
        content: "•"; 
        position: absolute;

        left: 20px;
        color: var(--color-idx-3); 
    } */

    .ref-content :global(a) {
        color: var(--color-idx-7);
        text-decoration: underline;
    }

    .ref-content :global(a:hover) {
        color: var(--color-idx-4)
    }

    .ref-content :global(blockquote), :global(img) {
        /* margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px; */
        margin: 15px 40px;
        background-color: var(--color-idx-9);
        color: var(--color-idx-4);
        font-style: italic;
    }

    .ref-content :global(strong) {
        font-weight: 800;
    }

    .ref-content :global(img) {
        margin: 15px 40px;
        background-color: var(--color-idx-9);
    }

</style>
