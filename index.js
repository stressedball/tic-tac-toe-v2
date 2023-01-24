'use strict'
import Header from "./components/Header.js"
import screens from "./components/screens.js"
import weaponChoice from "./components/weaponChoice.js"
import gameLoop from "./components/gameLoop.js"

async function Index() {
    Header()
    const player = await screens()
    const weapon = await weaponChoice()
    makeBoard()
    const result = await gameLoop(player, weapon)
    // might help returning the player winner or tie, yeah just strings
}
const makeBoard = () => {
    const container = document.querySelector('.container')
    const board = document.createElement('div')
    board.classList.add('board')
    container.appendChild(board)
    for (let i = 0; i < 9; i++){
        const tile = document.createElement('div')
        tile.classList.add('tile')
        tile.setAttribute('data-key', i)
        board.appendChild(tile)
    }
}
Index()