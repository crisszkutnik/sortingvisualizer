'use strict'

function bubbleSort() {
    let n = itemArray.length;
    let change, aux, auxCenter;

    do {
        change = false;

        for(let i = 1; i < n; i++) {
            if(itemArray[i-1].value > itemArray[i].value) {
                setTimeout(swapDisplay(i),5000);
                auxCenter = itemArray[i-1].centerX;
                itemArray[i - 1].centerX = itemArray[i].centerX;
                itemArray[i].centerX = auxCenter;
                aux = itemArray[i - 1];
                itemArray[i - 1] = itemArray[i];
                itemArray[i] = aux;
                change = true;
            }
        }
        n--;
    }while(change);
}

function swapDisplay(i) {
    let coordinateY = 450;

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.clearRect(itemArray[i].centerX-1, 0, 15, 450);
    ctx.clearRect(itemArray[i-1].centerX-1, 0, 15, 450);

    ctx.strokeRect(itemArray[i].centerX, coordinateY - itemArray[i-1].value, 10, itemArray[i-1].value);
    ctx.fillRect(itemArray[i].centerX, coordinateY - itemArray[i-1].value, 10, itemArray[i-1].value);

    ctx.strokeRect(itemArray[i-1].centerX, coordinateY - itemArray[i].value, 10, itemArray[i].value);
    ctx.fillRect(itemArray[i-1].centerX, coordinateY - itemArray[i].value, 10, itemArray[i].value);
}