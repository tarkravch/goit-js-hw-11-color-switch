const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const background = document.querySelector('body');

startButton.addEventListener('click', startChange);
stopButton.addEventListener('click', stopChange);

let intervalId = null;

function startChange() {
    changeColor();
    intervalId = setInterval(() => {
        changeColor();
    }, 1000);
}

function changeColor() {
    background.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    if (!startButton.hasAttribute('disabled')) {
        startButton.setAttribute('disabled', 'true');
    }
    return;

}

function stopChange() {
    startButton.removeAttribute('disabled');
    clearInterval(intervalId);
}