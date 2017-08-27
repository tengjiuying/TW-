'use strict';
function newString(number) {
    let result = '';
    if (number % 3 === 0){
        result += 'fizz';
    }
    if (number % 5 === 0){
        result += 'buzz';
    }
    return result === '' ? number: result;
}

function getresult(n) {
    let i = 1;
    while (i !== n+1){
        console.log(newString(i));
        i++;
    }
}

getresult(10);