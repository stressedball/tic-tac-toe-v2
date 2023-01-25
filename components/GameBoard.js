'use strict'
export default class GameBoard{
    constructor(){
        this.board = makeBoard()
    }
    gameOver() {
        const tiles = document.querySelectorAll('.tile')
        let xMoves = []
        let oMoves = []
        let count = 0
        for (let tile of tiles){
            const index = tile.dataset.key.split(',').map(el => Number(el))
            if (tile.classList.contains('cross')) xMoves.push(index)
            if (tile.classList.contains('circle')) oMoves.push(index)
            if (tile.classList.contains('played')) count++
            if (count === 9) return 'tie'
        }
        if (checkCombinations(xMoves) !== false) return 'x'
        if (checkCombinations(oMoves) !== false) return 'o'
        return false
    }
}
function checkCombinations(arr){
    for (let i = 0; i <= arr.length - 1; i++) {
        const x = arr[i][0]
        const y = arr[i][1]
        if (arr.filter(el => el[0] === x).length >= 3) return true
        if (arr.filter(el => el[1] === y).length >= 3) return true
        if (arr[i + 1] !== undefined && arr[i + 2] !== undefined) {
            if (arr[i + 1][0] === x + 1 && arr[i + 1][1] === y + 1
                && arr[i + 2][0] === x + 2 && arr[i + 2][1] === y + 2) {
                return true
            }
            if (arr[i + 1][0] === x + 1 && arr[i + 1][1] === y - 1
                && arr[i + 2][0] === x + 2 && arr[i + 2][1] === y - 2) {
                return true
            }
        }
    }
    return false
}
const makeBoard = () => {
    const container = document.querySelector('.container')
    const board = document.createElement('div')
    board.classList.add('board')
    container.appendChild(board)
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
        const tile = document.createElement('div')
        tile.classList.add('tile')
        tile.setAttribute('data-key', [i, j])
        board.appendChild(tile)
        }
    }
}