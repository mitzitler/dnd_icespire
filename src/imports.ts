interface DDRoute {
    [tag: string] : [ route: string, componentName: string ]
}

export const locationsRoutes: DDRoute = {
    'Phandalin': ['src/routes/locations/phandalin/+page.svx', 'Phandalin'], 
    'Dwarven Excavation': ['src/routes/locations/dwarven_excavation/+page.svx', 'DwarvenExcavation'], 
    'Gnomenguard': ['src/routes/locations/gnomenguard/+page.svx', 'Gnomenguard'], 
    'Butterskull Ranch': ['src/routes/locations/butterskull_ranch/+page.svx', 'ButterskullRanch'], 
    "Logger's Camp": ['src/routes/locations/loggers_camp/+page.svx', 'LoggersCamp'], 
    "Mountain's Toe Gold Mine": ['src/routes/locations/mountains_toe_gold_mine/+page.svx', 'MountainsToe'],
};

export const plotsRoutes: DDRoute = {
    'Zhentarim': ['text/dm_content/plotlines/zhentarim.svx', 'Zhentarim'],
    'Harpers': ['text/dm_content/plotlines/harpers.svx', 'Harpers'],
    'The Iron Throne': ['text/dm_content/plotlines/ironthrone.svx', 'IronThrone'], 
    'Anchorites of Talos': ['text/dm_content/plotlines/anchorites.svx', 'Anchorites']
};

export const extrasRoutes: DDRoute = {
    'Secret Goals': ['text/dm_content/secret_goals/0full_goals_descr.svx', 'SecretGoals'],
    'Side Quests':  ['text/dm_content/side_quests/0full_side_quests_descr.svx', 'SideQuests']
}

export const refRoutes: DDRoute = {
    'NPCs': ['text/npc_content/all_npcs.svx', 'NPCs'],
    'Items': ['text/npc_content/magic_items.svx', 'Items'],
    'Players': ['text/dm_content/players/all_players.svx', 'Players'],
    'Prints': ['text/npc_content/prints_list.svx', 'Prints'],
}

// is there more needed here?
export interface FightConfigItem {
    name: string,
    initiative_default: number,
    monster_type: boolean,
    gray: boolean,
}

// export interface FightItems {
//     [player: string] : FightConfigItem
// }

export interface Monster {
    ruleset: Ruleset,
    size: Sizes,
    monsterType: string,
    alignment: Alignments,
    // name: string,
    armorClass: number,
    str: [number, number], // score, offset
    dex: [number, number], // score, offset
    con: [number, number], // score, offset
    int: [number, number], // score, offset
    wis: [number, number], // score, offset
    cha: [number, number], // score, offset
    hitPoints: [number, number, number], // inclusive: minimum, prescribed avg, maximum
    speed: string,
    initiative: [number, number], // score, offset
    actions: Record<string, string>,
    reactions: Record<string, string>,
    attributes: Record<string, string>,
    description: string,
    sprite: string|null
}

export const enum Ruleset {
    FiveE,
    Legacy
}

export const enum Sizes {
    Tiny,
    Small,
    Medium,
    Large
}

export const enum Alignments {
    Unaligned,
    LawfulGood,
    NeutralGood,
    ChaoticGood,
    LawfulNeutral,
    TrueNeutral,
    ChaoticNeutral,
    LawfulEvil, 
    NeutralEvil,
    ChaoticEvil
}

export interface MonsterAttributes {
    [actionName: string] : string
}

export interface MonsterConfig {
    [monster: string] : number
}