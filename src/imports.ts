interface DDRoute {
    [tag: string] : string
}

export const locationsRoutes: DDRoute = {
    'Phandalin': 'text/dm_content/locations/phandalin.md', 
    'Dwarven Excavation': 'text/dm_content/locations/dwarven_excavation.md', 
    'Gnomenguard': 'text/dm_content/locations/gnomenguard.md', 
    'Butterskull Ranch': 'text/dm_content/locations/butterskull_ranch.md', 
    "Logger's Camp": 'text/dm_content/locations/loggers_camp.md', 
    "Mountain's Toe Gold Mine": 'text/dm_content/locations/mountains_toe_gold_mine.md'
};

export const plotsRoutes: DDRoute = {
    'Zhentarim': 'text/dm_content/plotlines/zhentarim.md', 
    'Harpers': 'text/dm_content/plotlines/harpers.md', 
    'The Iron Throne': 'text/dm_content/plotlines/ironthrone.md', 
    'Anchorites': 'text/dm_content/plotlines/anchorites.md'
};

export const extrasRoutes: DDRoute = {
    'Secret Goals': 'text/dm_content/secret_goals/0full_goals_descr.md', 
    'Side Quests':  'text/dm_content/side_quests/0full_side_quests_descr.md',}

export const refRoutes: DDRoute = {
    'NPCs': 'text/npc_content/all_npcs.md', 
    'Items': 'text/npc_content/magic_items.md',  
    'Players': 'text/dm_content/players/all_players.md', 
    'Prints': 'text/npc_content/prints_list.md'
}