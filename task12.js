'use strict';
function findthemostwords(string) {
    let array = string.split('');
    let Arr = {};
    for (let i = 0; i < array.length; i++){
        Arr[array[i]]? Arr[array[i]] += 1: Arr[array[i]] = 1;
    }
    let max = 0;
    let result = {};
    for (let item in Arr){
        if (Arr[item] > max){
            max = Arr[item];
        }
    }
    for (let item in Arr){
        if (Arr[item] === max){
            result[item] = Arr[item];
        }
    }
    console.log(result);
}

findthemostwords('abcsbaddbizdbas');
findthemostwords('aaaaabbdbdbb');