'use strict'
export default async function cpu(player) {
    if (player.type !== 'cpu') return
    if (player.turn === false) return
    // algo
    makeMove(player)
    return new Promise((res) => res(1))
}
function makeMove(cpu) {
    const tiles = document.querySelectorAll('.tile')
    let arrOfTiles = []
    for (let tile of tiles) {
        const index = tile.dataset.key.split(',').map(el => { return Number(el) })
        const splitClasses = tile.classList.value.split(' ')
        let weight
        if (splitClasses.length <= 1) {
            weight = 0
        } else {
            if (splitClasses.filter(el => el === cpu.weapon).length > 0) weight = 1 
            else weight = -1
        }
        const data = {
            index,
            weight
        }
        arrOfTiles.push(data)
    }
}