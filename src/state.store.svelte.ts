// onmount svx state
let currentMain = $state<any>(null);
let currentSide = $state<any>(null);

export function getMain() { return currentMain; }
export function setMain(component: any) { currentMain = component; }

export function getSide() { return currentSide; }
export function setSide(component: any) { currentSide = component; }



// sizing state
// main and side widths can either add to 6 or only 4
// ex: [4, 0], [0, 4], [4, 2], [1, 5], [5, 1]
// id = 0 is main, id = 1 is side
let currentSizes = $state<[number, number]>([4, 0]);
export function getSizes() { return currentSizes; }
export function setSizes(sourceSide: number, sourceSize: number ) {
    if (sourceSize == 3 || sourceSize > 5 || sourceSize < 0) {
        // error
        currentSizes = currentSizes;
    }
    // closing a tab sets the other one to 4
    else if (sourceSize == 0) {
        if (sourceSide == 0) {
            currentSizes[0] = 0
            currentSizes[1] = 4
        }
        else if (sourceSide == 1) {
            currentSizes[0] = 4
            currentSizes[1] = 0
        }
    }
    // else we are just resizing the cols
    else if (sourceSide == 0) {
        currentSizes[0] = sourceSize;
        currentSizes[1] = 6 - sourceSize;
    }
    else if (sourceSide == 1) {
        currentSizes[0] = 6 - sourceSize;
        currentSizes[1] = sourceSize;
    }
}

let currentMainPaneCol = $state<number>(0);
export function getMainPaneCol() { return currentMainPaneCol; }
export function setMainPaneCol(newCol: number) { currentMainPaneCol = newCol; }



// dropdown state
let openDropdownId = $state<string | null>(null);
export function getOpenId() { return openDropdownId; }
export function setOpenId(id: string | null) { openDropdownId = id; }



// fight state
import { MonsterConfig } from "./imports.ts";

let fightToggle = $state(false)
export function getFightToggle() { return fightToggle; }
export function setFightToggle(fight: boolean) { fightToggle = fight; }
export function toggleFight() { fightToggle = !fightToggle; }

let fightStateMonsters: MonsterConfig | null = $state(null)
export function getFightStateMonsters() { return fightStateMonsters; }
export function setFightStateMonsters(monsterConfig: MonsterConfig) { fightStateMonsters = monsterConfig; }
