import { Monster, Ruleset, Sizes, Alignments } from "./imports.ts";
interface Monsters {
    [monster: string] : Monster
}

export const MonsterList: Monsters = {
    'Ochre Jelly' : {
        ruleset: Ruleset.FiveE,
        size: Sizes.Large,
        monsterType: "Ooze",
        alignment: Alignments.Unaligned,
        // name: "Ochre Jelly",
        armorClass: 8,
        str: [15, 2], // score, offset
        dex: [6, -2], // score, offset
        con: [14, 2], // score, offset
        int: [2, -4], // score, offset
        wis: [6, -2], // score, offset
        cha: [1, -5], // score, offset
        hitPoints: [21, 52, 84], // inclusive: minimum, prescribed avg, maximum
        speed: "20 ft., Climb 20 ft.",
        initiative: [2, 8], // score, offset
        actions: {
            'Pseudopod': 'Melee Weapon Attack: +4 to hit, reach 5 ft., One Target. Hit: (3d6 + 2) Acid damage.'
        },
        reactions: {
            'Split' : ' *Trigger:* While the jelly is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. *Response:* The jelly splits into two new **Ochre Jellies**. Each new jelly is one size smaller than the original jelly and acts on its Initiative. The original jelly’s Hit Points are divided evenly between the new jellies (round down).'
        },
        attributes: {
            'Amorphous': 'The jelly can move through a space as narrow as 1 inch without expending extra movement to do so',
            'Spider Climb': 'The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check.' 
        },
        description: "Saving Throws Str +2, Dex -2, Con +2, Int -4, Wis -2, Cha -5\\ Damage Resistance Acid\\ Damage Immunities Lightning, Slashing\\ Condition Immunities Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained\\ Senses Blindsight 60 ft., passive Perception 8\\ Languages None\\ Challenge 2 (450 XP)\\ Habitat Underdark\\ Treasure None",
        sprite: null
    },
    'Orc' : {
        ruleset: Ruleset.Legacy,
        size: Sizes.Medium,
        monsterType: "Humanoid",
        alignment: Alignments.ChaoticEvil,
        // name: "Ochre Jelly",
        armorClass: 13,
        str: [16, 3], // score, offset
        dex: [12, 1], // score, offset
        con: [16, 3], // score, offset
        int: [7, -2], // score, offset
        wis: [11, 0], // score, offset
        cha: [10, 0], // score, offset
        hitPoints: [8, 13, 22], // inclusive: minimum, prescribed avg, maximum
        speed: "30 ft.",
        initiative: [0, 10], // score, offset
        actions: {
            'Greataxe': 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.',
            'Javelin': 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.'
        },
        reactions: {
            'Opportunity Attack' : ' *Trigger:* While the jelly is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. *Response:* The jelly splits into two new **Ochre Jellies**. Each new jelly is one size smaller than the original jelly and acts on its Initiative. The original jelly’s Hit Points are divided evenly between the new jellies (round down).'
        },
        attributes: {
            'Aggressive': 'As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.' 
        },
        description: "Skills Intimidation +2\\ Senses Darkvision 60 ft., Passive Perception 10\\ Languages Common, Orc\\ Challenge 1/2 (100 XP)\\ Proficiency Bonus +2",
        sprite: null
    },

}
