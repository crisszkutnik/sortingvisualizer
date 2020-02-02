'use strict'

// Define class
class arrayItem {
    constructor(centerX) {
        this.value = parseInt(430 * Math.random());
        this.centerX = centerX;
    }
}
//

let arraySize = 10; //Size of the array. Global variable for convenience

//Modify array size on input

document.querySelector('#menu input').addEventListener('change', () => {
    let newValue = parseInt(document.querySelector('#menu input').value);

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1200, 450); //CLear canvas to display new array

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
        itemArray[i] = new arrayItem(arrayLeft + 15 * i);
    }
}

generateArray(10);

function displayArray() {
    let centerY = 450;
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    itemArray.forEach(element => {
        ctx.strokeRect(element.centerX, centerY - element.value, 10, element.value);
        ctx.fillRect(element.centerX, centerY - element.value, 10, element.value);
    });
}

displayArray();