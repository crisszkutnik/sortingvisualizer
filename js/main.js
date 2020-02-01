'use strict'

let arraySize = 10;

//Modify array size on input

document.querySelector('#menu input').addEventListener('change', () => {
    let newValue = parseInt(document.querySelector('#menu input').value);

    if(newValue <= 50 && newValue >= 2) arraySize = newValue;
    else {
        alert('Array value must be between 1 or 50 for compatibility convenience!');
        arraySize = 10;
        document.querySelector('#menu input').value = '10';
    }
});

// The class of each item on the array

class arrayItem {
    constructor(value, centerX) {
        this.width = 10;
        this.value = value;
        this.centerX = centerX
        this.centerY = 0;
    }
}