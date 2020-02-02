'use strict'

function bubbleSort() {
    let n = itemArray.length;
    let change, aux;

    do {
        change = false;

        for(let i = 1; i < n - 1; i++) {
            if(itemArray[i-1].value > itemArray[i].value) {
                aux = itemArray[i + 1];
                itemArray[i + 1] = itemArray[i];
                itemArray[i] = aux;
                change = true;
            }
        }
        n--;
    }while(change);
}