'use strict'
import GameBoard from "./GameBoard.js"
import Player from "./Player.js"
import cpu from "./cpu.js"

export default async function gameLoop(player, weapon) {
    const board = new GameBoard()
    const playerOne = new Player('human', weapon)
    const weaponTwo = weapon === 'cross' ? 'circle' : 'cross'
    const playerTwo = player === "human" ? new Player('human', weaponTwo) : new Player('cpu', weaponTwo)
    while (board.gameOver() === false) {
        const currentPlayer = playerOne.turn === true ? playerOne : playerTwo
        const nextPlayer = playerOne.turn === true ? playerTwo : playerOne
        const turn = await tempFunc(currentPlayer)
        if (turn === 1) {
            currentPlayer.inverseTurn()
            nextPlayer.inverseTurn()
        }
    }
    return new Promise((res) => {
        const result = board.gameOver()
        res(result)
    })
}
async function tempFunc(curr) {
    return new Promise((res) => {
        const getClick = (e) => {
            // console.log(curr)
            document.querySelector('.board').removeEventListener('click', getClick)
            if (!e.target.classList.contains('played')) {
                e.target.classList.add(curr.weapon)
                e.target.classList.add('played')
                res(1)
            } else {
                res(0)
            }
        }
        document.querySelector('.board').addEventListener('click', getClick)
        cpu(curr)
    })
}


