<script lang="ts">
    let text: string = $props()
    // let encounterDescr = {text.length > 20 ? text.slice(0,20) : text }
    let encounterDescr = $derived(text)
</script>

<button>{encounterDescr}</button>

<style>
    button {
        width: 290px;
        height: 38px;
        margin-left: 145px;
        margin-top: auto;
        margin-bottom: auto;
        transform: scale(0.8);
        background-image: url('../../../assets/buttons/fight_resting_200.png');
    }
    button:hover {
        background-image: url('../../../assets/buttons/fight_hover_200.png');
        text-decoration: italic;
    }
    button:focus {
        background-image: url('../../../assets/buttons/fight_pressed_200.png');
        text-decoration: italic;
    }
</style>