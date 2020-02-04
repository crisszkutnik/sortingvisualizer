'use strict'

let delay = 100;

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

    //Visual representation of sorting
    allChanges.forEach((element, index) => {
        timeouts.push(
            setTimeout(() => {
                swapDisplay(element.center1, element.center2, element.value1, element.value2)
            }, delay * (index + 1))
        )
    });
}

function swapDisplay(center1, center2, value1, value2) {

        let coordinateY = 450;

        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();

        ctx.clearRect(center1 - 1, 0, 15, 450);
        ctx.clearRect(center2 - 1, 0, 15, 450);

        ctx.strokeRect(center1, coordinateY - value2, 10, value2);
        ctx.fillRect(center1, coordinateY - value2, 10, value2);

        ctx.strokeRect(center2, coordinateY - value1, 10, value1);
        ctx.fillRect(center2, coordinateY - value1, 10, value1); 
}

function swapValues(val1, val2) {
    [itemArray[val1].centerX, itemArray[val2].centerX] = [itemArray[val2].centerX, itemArray[val1].centerX];
    [itemArray[val1], itemArray[val2]] = [itemArray[val2], itemArray[val1]]
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
    //Visual representation of sorting
    allChanges.forEach((element, index) => {
        timeouts.push(
            setTimeout(() => {
                swapDisplay(element.center1, element.center2, element.value1, element.value2)
            }, delay * (index + 1))
        )
    });
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

    //Visual representation of sorting
    allChanges.forEach((element, index) => {
        timeouts.push(
            setTimeout(() => {
                swapDisplay(element.center1, element.center2, element.value1, element.value2)
            }, delay * (index + 1))
        )
    });
}