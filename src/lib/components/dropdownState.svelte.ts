let openDropdownId = $state<string | null>(null);
export function getOpenId() { return openDropdownId; }
export function setOpenId(id: string | null) { openDropdownId = id; }