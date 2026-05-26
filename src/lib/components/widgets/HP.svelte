<script>
    let health = $props();
    let change = 0;
</script>

<span class="health">
    <input type="text" value="Remove Health" 
        onchange="{(change) => health = health - Number(change)}"/>
    <p>HP: {health}</p>
    <input type="text" value="Add Health" 
        onchange="{(change) => health = health + Number(change)}"/>
</span>

<style>
    .health {
        background: darkcyan;
        height: 20px;
        font-size: 12px;
        display: inline-flex;
        justify-content: space-between;
        border-radius: 3px;
    }
    input {
        height:16px;
        margin-top: 2px;
        margin-bottom: 2px;
        font-weight: italic;
        background: rgb(1, 108, 108);
        border-radius: 3px;
    }
    p {
        border: none;
        font-size: 16px;
        font-weight: bold;
        margin-top: 2px;
        margin-bottom: 2px;
    }

</style>