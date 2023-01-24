'use strict'
export default class Player{
    constructor(player, weapon){
        this.type = player
        this.turn = weapon === 'cross' ? true : false;
        this.weapon = weapon
    }
    inverseTurn(){
        this.turn = this.turn === true ? false : true
    }
}