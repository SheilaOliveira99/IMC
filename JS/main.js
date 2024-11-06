import { Modal } from './modal.js'
import { alertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        alertError.open()
        return;
    }//Se não for número ele vai mostrar o alerta, se for, ele segue normalmente

    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open() //chamando a função do Modal.JS
    } 