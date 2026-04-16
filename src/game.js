// Tudo que é parte do jogo e não aparecerá na interface será escrito em game.
/*
Generate a secret number.
Read the number of attempts
*/

var secretNumber;
var attempts = 0;

// Secret number generator
export function newSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    return secretNumber;
}

export function getSecretNumber() {
    return secretNumber;
}

export function increaseAttempts() {
    attempts = attempts + 1;
    return attempts;
}

export function getAttempts() {
    return attempts;
}

export function resetGame() {
    attempts = 0;
    newSecretNumber();
}

document.addEventListener("DOMContentLoaded", ()=> { newSecretNumber() });