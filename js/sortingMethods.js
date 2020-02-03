'use strict'

function bubbleSort() {
    let n = itemArray.length;
    let change;
    let allChanges = [];

    do {
        change = false;

        for(let i = 1; i < n; i++) {
            if(itemArray[i-1].value > itemArray[i].value) {
                let saveChanges = {
                    center1: itemArray[i].centerX,
                    center2: itemArray[i-1].centerX,
                    value1: itemArray[i].value,
                    value2: itemArray[i-1].value
                }

                allChanges.push(saveChanges); //Save all changes to be made on canvas on an arrau

                //Swap values according to latest standars
                [itemArray[i-1].centerX, itemArray[i].centerX] = [itemArray[i].centerX, itemArray[i-1].centerX];
                [itemArray[i - 1], itemArray[i]] = [itemArray[i], itemArray[i - 1]]

                change = true;
            }  
        }
        n--;
    }while(change);

    allChanges.forEach((element, index) => {
        setTimeout(() => {
            swapDisplay(element.center1, element.center2, element.value1, element.value2)
        }, 50 * (index + 1));
    })
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