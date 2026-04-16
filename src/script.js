// Tudo que aparecerá na interface do jogo será feito aqui.

/*
Importar as variáveis de interesse de game.js e declarar necessárias aqui
Decidir se o número está certo ou não.
Se estiver certo: Conste internamente que o número está correto, depois mostrar na tela.
Se estiver errado: Conste internamente que o número está errado, tratar a resposta na tela.
*/

import { increaseAttempts, getAttempts, resetGame, newSecretNumber, getSecretNumber } from "./game.js";

export function treatedShowAttempts() {
    const inputValue = document.getElementById("numberInput").value;
    const textBox = document.getElementById("ifCorrect");
    if (inputValue.length == 0) {
        textBox.innerText = "You need to write a number";
    }
    else if (inputValue >= 1 && inputValue <= 100) {
        showAttempts()
    } else if (inputValue < 1 || inputValue > 100) {
        textBox.innerText = "Try a valid number.";       
    }
}

export function showAttempts() {
    increaseAttempts();
    const windowAttempts = document.getElementById("attemptsHTML");
    windowAttempts.innerText = getAttempts();
    verify();
}

export function showAttemptsReset() {
    const windowAttempts = document.getElementById("attemptsHTML");
    windowAttempts.innerText = getAttempts();
}

export function resetButton() {
    resetGame();
    showAttemptsReset();
    document.getElementById("numberInput").value = "";
    document.getElementById("ifCorrect").innerText = "";
}

export function verify() {
    const textBox = document.getElementById("ifCorrect");
    const inputValue = document.getElementById("numberInput").value;
    const inputValueParsed = Number.parseInt(inputValue);
    var secretNumber = getSecretNumber();
    if (inputValueParsed === secretNumber) {
        textBox.innerText = "Congratulations! The number is correct!";
    } else if (inputValueParsed > secretNumber) {
        textBox.innerText = "Wrong number! Try guessing lower.";
    } else if (inputValueParsed < secretNumber){
        textBox.innerText = "Wrong number! Try guessing higher.";
    } else {
        textBox.innerText = "ERROR";
    }
}