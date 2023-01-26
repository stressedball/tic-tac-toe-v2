'use strict'
export default function symbolChoice(){
    removeFirstScreen()
    domManipulation()
    const cross = document.querySelector('img[alt="cross"]')
    const circle = document.querySelector('img[alt="circle"]')
    const message = document.querySelector('p')

    return new Promise((resolve) => {
        const handleClick = (e) => {
            cleanScreen(cross, circle, message)
            cross.removeEventListener('click', handleClick)
            circle.removeEventListener('click', handleClick)
            resolve(e.target.alt)
        }
        cross.addEventListener('click', handleClick)
        circle.addEventListener('click', handleClick)
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
    const message = document.createElement('p')
    message.textContent = "Player one, choose your symbol.\nDon't forget, X plays first!"
    message.classList.add('instruction')
    container.appendChild(message)

    const cross = document.createElement('img')
    cross.src = "../assets/cross-sign-svgrepo-com.svg"
    cross.classList.add('symbols')
    cross.alt = "cross"
    container.appendChild(cross)

    const circle = document.createElement('img')
    circle.src = "../assets/circle-stroked-svgrepo-com.svg"
    circle.classList.add('symbols')
    circle.alt = "circle"
    container.appendChild(circle)
}

const removeFirstScreen = () => {
    const container = document.querySelector('.container')
    container.removeChild(document.querySelector('h2'))
    container.removeChild(document.querySelector('button.choice-buttons'))
    container.removeChild(document.querySelector('button.choice-buttons'))
}