'use strict'
export default async function cpu(player){
    if (player.type !== 'cpu') return
    if (player.turn === false) return
    const tiles = document.querySelectorAll('.tile')
    // algo
    for (let tile of tiles) {
        if (!tile.classList.contains('played')) {
            tile.click()
            return new Promise((res) => res(1))
        }
    }
}
