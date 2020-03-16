'use strict'
let mainInterval; //Timeouts are stored here in case they need to be cancelled

let timeouts = [];

const centerY = 450;

// Define class
class arrayItem {
    constructor(centerX) {
        this.value = parseInt(430 * Math.random());
        this.centerX = centerX;
    }
}

class displayChange {
    constructor(center1, center2, value1, value2) {
        this.center1 = center1;
        this.center2 = center2;
        this.value1 = value1;
        this.value2 = value2;
    }
}
//

let arraySize = 10; //Size of the array. Global variable for convenience

//Event handler to modify array size
document.querySelector('#newArray').addEventListener('click', () => {
    let newValue = parseInt(document.querySelector('#menu input').value);

    clearInterval(mainInterval);

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

    let arrayLeft = (document.querySelector('canvas').offsetWidth / 2) - Math.ceil(newValue / 2) * 15;

    for(let i = 0; i < newValue; i++) {
        itemArray[i] = new arrayItem(arrayLeft + 15 * i);
    }
}

function displayArray() {
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.fillStyle = '#000000';

    itemArray.forEach(element => {
        ctx.strokeRect(element.centerX, centerY - element.value, 10, element.value);
        ctx.fillRect(element.centerX, centerY - element.value, 10, element.value);
    });
}

//Event handler to start sorting
document.querySelector('#sortStart').addEventListener('click', () => {
    let sortingMethod = document.querySelector('select').value;

    if(sortingMethod == 'bubble') bubbleSort();
    else if(sortingMethod == 'selection') selectionSort();
    else if(sortingMethod == 'insertion') insertionSort();
    else if(sortingMethod == 'cocktail') cocktailSort();
    else if(sortingMethod == 'gnome') optimizedGnome();
});

//Initiall call functions
generateArray(10);
displayArray();

//
//  Responsiveness functions
//

let canvas = document.querySelector('canvas');

canvas.style.width = `${(window.innerWidth * 1200) / 1920}px`;
canvas.style.heigth = `${(window.innerHeight * 450) / 1920}px`;

window.addEventListener('resize', () => {
    canvas.style.width = `${(window.innerWidth * 1200) / 1920}px`;
    canvas.style.heigth = `${(window.innerHeight * 450) / 1920}px`;
})
