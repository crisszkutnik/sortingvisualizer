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

    let arrayLeft = 450 - Math.ceil(itemArray.length / 2) * 15;

    for(let i = 0; i < newValue; i++) {
        let object = {
            value: parseInt(430 * Math.random()),
            centerX: arrayLeft + 15 * i
        }
        itemArray[i] = object;
    }
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
        ctx.strokeRect(itemArray[i].centerX, centerY - itemArray[i].value, 10, itemArray[i].value);
        ctx.fillRect(itemArray[i].centerX, centerY - itemArray[i].value, 10, itemArray[i].value);
    }

    for(let i = 0; i < Math.ceil((itemArray.length - 1) / 2); i++) {
        ctx.strokeRect(itemArray[i].centerX, centerY - itemArray[i].value, 10, itemArray[i].value);
        ctx.fillRect(itemArray[i].centerX, centerY - itemArray[i].value, 10, itemArray[i].value);
    }
}

displayArray();