'use strict'

let delay = 100;

let delayChange = document.querySelector('div#menu div input');

delayChange.addEventListener('input', () => {
    delay = parseInt(delayChange.value);
    document.querySelector('div#menu div p').innerHTML = delayChange.value + 'ms';
})

//
// Swap functions
//

function swapDisplay(center1, center2, value1, value2, color1, color2, pDel) {

    let coordinateY = 450;

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.fillStyle = color1;

    ctx.clearRect(center1 - 1, 0, 15, 450);
    ctx.clearRect(center2 - 1, 0, 15, 450);

    ctx.strokeRect(center1, coordinateY - value2, 10, value2);
    ctx.fillRect(center1, coordinateY - value2, 10, value2);

    ctx.fillStyle = color2;

    ctx.strokeRect(center2, coordinateY - value1, 10, value1);
    ctx.fillRect(center2, coordinateY - value1, 10, value1);

    setTimeout(() => {
        ctx.clearRect(center1 - 1, 0, 15, 450);
        ctx.clearRect(center2 - 1, 0, 15, 450);

        ctx.fillStyle = '#000000';

        ctx.strokeRect(center1, coordinateY - value2, 10, value2);
        ctx.fillRect(center1, coordinateY - value2, 10, value2);

        ctx.strokeRect(center2, coordinateY - value1, 10, value1);
        ctx.fillRect(center2, coordinateY - value1, 10, value1);
    }, pDel/2);
}

function swapValues(val1, val2) {
    [itemArray[val1].centerX, itemArray[val2].centerX] = [itemArray[val2].centerX, itemArray[val1].centerX];
    [itemArray[val1], itemArray[val2]] = [itemArray[val2], itemArray[val1]]
}

function displayChanges(allChanges) {
    let n = itemArray.length - 1;
    let i = 0;
    let thisDel = delay;

    allChanges.forEach((element, index) => {
        setTimeout(() => {
            swapDisplay(element.center1, element.center2, element.value1, element.value2, '#ff0000', '#05961f', thisDel);
        }, index * delay);
    });
}

function bubbleSort() {
    let n = itemArray.length;
    let change;
    let allChanges = [];

    do {
        change = false;

        for(let i = 1; i < n; i++) {
            if(itemArray[i-1].value > itemArray[i].value) {
                allChanges.push(new displayChange(itemArray[i].centerX, itemArray[i - 1].centerX, itemArray[i].value, itemArray[i - 1].value));
                swapValues(i, i-1);

                change = true;
            }  
        }
        n--;
    }while(change);

    displayChanges(allChanges);
}

function selectionSort() {
    let n = itemArray.length;
    let min;
    let allChanges = [];

    for(let i = 0; i < n - 1; i++) {
        min = i;
        for(let j = i + 1; j < n; j++) {
            if(itemArray[j].value < itemArray[min].value) min = j;
        }

        if(min != i) {
            allChanges.push(new displayChange(itemArray[i].centerX, itemArray[min].centerX, itemArray[i].value, itemArray[min].value));
            swapValues(min, i);
        }
    }
    displayChanges(allChanges);
}

function insertionSort() {
    let n = itemArray.length;
    let allChanges = [];

    for(let i = 1; i < n; i++) {
        let el = itemArray[i];
        let j = i - 1;

        while(j >= 0 && itemArray[j].value > itemArray[j+1].value) {
            allChanges.push(new displayChange(itemArray[j].centerX, itemArray[j + 1].centerX, itemArray[j].value, itemArray[j + 1].value))
            swapValues(j, j+1);
            j--;
        }
    }
    displayChanges(allChanges);
}

function cocktailSort() {
    let allChanges = [];
    let change = true;
    let start = 0, end = itemArray.length;

    while(change) {
        change = false;
        
        for(let i = start; i < end - 1; ++i) {
            if(itemArray[i].value > itemArray[i + 1].value) {
                allChanges.push(new displayChange(itemArray[i + 1].centerX, itemArray[i].centerX, itemArray[i + 1].value, itemArray[i].value));
                swapValues(i, i + 1);
                change = true;
            }
        }

        if(!change) break;

        change = false;
        end--;

        for(let i = end - 1; i >= start; i--) {
            if(itemArray[i].value > itemArray[i + 1].value) {
                allChanges.push(new displayChange(itemArray[i].centerX, itemArray[i + 1].centerX, itemArray[i].value, itemArray[i + 1].value));
                swapValues(i, i + 1);
                change = true;
            }
        }
        start++;
    }
    displayChanges(allChanges);
}

function optimizedGnome() {
    let allChanges = [];
    for(let pos = 1; pos < itemArray.length; pos++) gnomeSort(pos, allChanges);
    displayChanges(allChanges);
}

function gnomeSort(pos, allChanges) {
    while(pos > 0 && itemArray[pos - 1].value > itemArray[pos].value) {
        allChanges.push(new displayChange(itemArray[pos - 1].centerX, itemArray[pos].centerX, itemArray[pos - 1].value, itemArray[pos].value));
        swapValues(pos, pos - 1);
        pos--;
    }
}