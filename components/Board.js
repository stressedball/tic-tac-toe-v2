'use strict'
export default class Board{
    constructor(){
        this.tiles = (() => {
            const container = document.querySelector('.container')
            const board = document.createElement('div')
            board.classList.add('board')
            container.appendChild(board)
            for (let i = 0; i < 9; i++) {
                const tile = document.createElement('div')
                tile.classList.add('tile')
                tile.dataset.index = 'i'
                board.appendChild(tile)
            }
        })
    }
}