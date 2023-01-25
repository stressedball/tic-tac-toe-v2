'use strict'
import Header from "./components/Header.js"
import weaponChoice from "./components/weaponChoice.js"
import gameLoop from "./components/gameLoop.js"
import opponentChoice from "./components/opponent-choice.js"

async function Index() {
    Header()
    const player = await opponentChoice()
    const weapon = await weaponChoice()
    const result = await gameLoop(player, weapon)
    // might help returning the player winner or tie, yeah just strings
    console.log('result' , result)
}

Index()