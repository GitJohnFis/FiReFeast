export function saveGame() {
localStorage.setItem('fireFeastSave', JSON.stringify(state));
}

export function loadGame() {
const state = localStorage.getItem('fireFeastSave');
return state ? JSON.parse(state) : null; 
