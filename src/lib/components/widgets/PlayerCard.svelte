<script>
    let {player: String} = $props();
    // let player = 'Eve';
    let asset_map = {
        'Al' : '../../assets/static/al_card_200.png',
        'Arfer' : '../../assets/static/arfer_card_200.png',
        'Dopio' : '../../assets/static/dopio_card_200.png',
        'Eve' : '../../assets/static/eve_card_200.png',
        'Gasshole' : '../../assets/static/gasshole_card_200.png',
    }
    let defaultInitiative = 0;
    let img = asset_map[player];
</script>

<div class="player-card" >

</div>
