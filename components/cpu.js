'use strict'
export default async function cpu(cpu) {
    // not lying. Used the tutorial from geeksforgeeks. Pretty straight forward.
    if (cpu.turn === true && cpu.type === 'cpu') {
        const board  = getBoard(cpu)
        const bestMove = findBestMove(board).index
        const x = bestMove.charAt(0)
        const y = bestMove.charAt(2)
        document.querySelector(`.tile[data-key ="${x},${y}"]`).click()
    }
}
function findBestMove(board){
    let bestMove = { index : null, weight : -1000}
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const move = board.filter(el => el.index === `${i},${j}`)
            if (move[0].weight === 0) {
                const index = board.findIndex(el => el.index === move[0].index)
                if (index !== -1) {
                    board[index].weight = 1
                }
                let moveVal = miniMax(board, 0, false)
                if (moveVal > bestMove.weight) {
                    bestMove.index = move[0].index
                    bestMove.weight = move[0].weight
                }
                board[index].weight = 0
            }
        }
    }
    return bestMove
}
function miniMax(board, depth, isMax){
    let score = checkCombinations(board)
    if (score === 10) return score
    if (score === -10) return score
    if (isMoveLeft(board) === false) return 0
    if (isMax === true) {
        let best = - 1000
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const move = board.filter(el => el.index === `${i},${j}`)
                if (move[0].weight === 0) {
                    const index = board.findIndex(el => el.index === move[0].index)
                    if (index !== -1) board[index].weight = 1
                    best = Math.max(best, miniMax(board, depth + 1, !isMax))
                    board[index].weight = 0
                }
            }
        }
        return best
    } else {
        let best = 1000
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const move = board.filter(el => el.index === `${i},${j}`)
                if (move[0].weight === 0) {
                    const index = board.findIndex(el => el.index === move[0].index)
                    if (index !== -1) board[index].weight = 1
                    best = Math.min(best, miniMax(board, depth + 1, !isMax))
                    board[index].weight = 0
                }
            }
        }
        return best
    }
}
function checkCombinations(board){
    const cpuCombinations = board.filter(el => el.weight === 1)
    const playerCombinations = board.filter(el => el.weight === -1)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3;j++) {
            // horizontals
            if (cpuCombinations.filter(el => el.index[0] === `${i}`).length >= 3) {
                return 10
            }
            if (playerCombinations.filter(el => el.index[0] === `${i}`).length >= 3) {
                return -10
            }

            // verticals
            if (cpuCombinations.filter(el => el.index[2] === `${j}`).length >= 3) {
                return 10
            }
            if (playerCombinations.filter(el => el.index[2] === `${j}`).length >= 3) {
                return -10
            }

            // diagonals
            if (cpuCombinations.filter(el => el.index[0] === `${i}` 
                && el.index[2] === `${j}`).length >= 1 
                && cpuCombinations.filter(el => el.index[0] === `${i + 1 }`
                && el.index[2] === `${j + 1}`).length >= 1 
                && cpuCombinations.filter(el => el.index[0] === `${i + 2}` 
                && el.index[2] === `${j + 2}`).length >= 1) {
                return 10
            }

            if (playerCombinations.filter(el => el.index[0] === `${i}` 
                && el.index[2] === `${j}`).length >= 1 
                && playerCombinations.filter(el => el.index[0] === `${i + 1}` 
                && el.index[2] === `${j + 1}`).length >= 1 
                && playerCombinations.filter(el => el.index[0] === `${i + 2 }`
                && el.index[2] === `${j + 2}`).length >= 1) {
                return -10
            }
        }
    }
    return 0
}
function getBoard(cpu) {
    const tiles = document.querySelectorAll('.tile')
    let arrOfTiles = []
    for (let tile of tiles) {
        const index = `${tile.dataset.key}`
        const splitClasses = tile.classList.value.split(' ')
        let weight = 0
        if (splitClasses.length <= 1) {
            weight = 0
        } else {
            if (splitClasses.filter(el => el === cpu.weapon).length > 0) {
                weight = 1
            } else {
                weight = -1
            }
        }
        const data = {
            index,
            weight
        }
        arrOfTiles.push(data)
    }
    return arrOfTiles
}
const isMoveLeft = board => {
    if (board.filter(el => el.weight !== 0).length >= board.length) return false
    return true
}