let amount = document.querySelector('#cifra');

function getRandomCard (min, max) {
    min = 1;
    max = 78;

    return Math.random() * (max - min) + min;
}