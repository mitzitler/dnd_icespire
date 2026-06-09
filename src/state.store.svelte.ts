// export const siteState = $state({
// 	mainPaneContent: ['text/dm_content/locations/phandalin.svx', 'Phandalin'],
//     sidePaneContent: ['text/npc_content/all_npcs.svx', 'NPCs'],
//     activeOpen: "",
// 	/* ... */
// });

let currentMain = $state<any>(null);

export function getMain() { return currentMain; }
export function setMain(component: any) { currentMain = component; }