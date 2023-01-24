'use strict'
export default function weaponChoice(){
    removeFirstScreen()
    domManipulation()
    const cross = document.querySelector('img[alt="cross"]')
    const circle = document.querySelector('img[alt="circle"]')
    const message = document.querySelector('h2')

    return new Promise((resolve) => {
        cross.addEventListener('click', () => {
            cleanScreen(cross, circle, message)
            resolve(cross.alt) 
        })
        circle.addEventListener('click', () => {
            cleanScreen(cross, circle, message)
            resolve(circle.alt)
        })
    })
}

const cleanScreen = (cross, circle, message) => {
    const container = document.querySelector('.container')
    container.removeChild(message)
    container.removeChild(cross)
    container.removeChild(circle)
}

const domManipulation = () => {
    const container = document.querySelector('.container')
    const message = document.createElement('h2')
    message.textContent = "Player one, choose your weapon. \nDon't forget, X plays first!"
    container.appendChild(message)

    const cross = document.createElement('img')
    cross.src = "../assets/cross-sign-svgrepo-com.svg"
    cross.classList.add('weapons')
    cross.alt = "cross"
    container.appendChild(cross)

    const circle = document.createElement('img')
    circle.src = "../assets/circle-stroked-svgrepo-com.svg"
    circle.classList.add('weapons')
    circle.alt = "circle"
    container.appendChild(circle)
}

const removeFirstScreen = () => {
    const container = document.querySelector('.container')
    container.removeChild(document.querySelector('h2'))
    container.removeChild(document.querySelector('button.choice-buttons'))
    container.removeChild(document.querySelector('button.choice-buttons'))
}