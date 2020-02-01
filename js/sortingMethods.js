'use strict'

function bubbleSort() {
    let aux;
    let n = itemArray.length;

    for(let i = 0; i < n; i++) { 
            for(let j = 0; j < n - i - 1; j++) { 
                if (itemArray[j].value > itemArray[j + 1].value) { 
                    aux = itemArray[j]; 
                    itemArray[j] = itemArray[j + 1]; 
                    itemArray[j + 1] = aux; 
                } 
            } 
        } 
} 