'use strict'

export default class GameBoard{
    constructor(){
        this.board = document.querySelector('.board')
    }
    gameOver() {
        const tiles = document.querySelectorAll('.tile')
        // check combination to return another value 
        for (let tile of tiles){
            if (tile.classList.contains('played') === false) return false
        }
        // returning 1 for default ie tie
        return 1
    }
}

