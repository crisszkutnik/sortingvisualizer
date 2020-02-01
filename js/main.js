'use strict'

let arraySize = 10; //Size of the array. Global variable for convenience

//Modify array size on input

document.querySelector('#menu input').addEventListener('change', () => {
    let newValue = parseInt(document.querySelector('#menu input').value);

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1200, 450);

    if(newValue <= 50 && newValue > 1) {
        arraySize = newValue;
        generateArray(newValue);
        displayArray();
    } else {
        alert('Array value must be between 1 or 50 for compatibility convenience!');
        arraySize = 10;
        document.querySelector('#menu input').value = '10';
        displayArray();
    }
});


let itemArray = []; //Array of items

function generateArray(newValue) {
    itemArray = [];
    for(let i = 0; i < newValue; i++) itemArray[i] = parseInt(430 * Math.random());
}

generateArray(10);

function displayArray() {
    let centerX = 600;
    let centerY = 450;

    let arrayCenter = Math.ceil((itemArray.length - 1) / 2);
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    for(let i = arrayCenter; i > 0; i--) {
        ctx.strokeRect(centerX - i * 15, centerY - itemArray[i], 10, itemArray[i]);
        ctx.fillRect(centerX - i * 15, centerY - itemArray[i], 10, itemArray[i]);
    }

    for(let i = 0; i < Math.ceil((itemArray.length - 1) / 2); i++) {
        ctx.strokeRect(centerX + i * 15, centerY - itemArray[i], 10, itemArray[i]);
        ctx.fillRect(centerX + i * 15, centerY - itemArray[i], 10, itemArray[i]);
    }
}

displayArray();