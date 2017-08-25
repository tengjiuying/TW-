'use strict';
function getSameArr(arr , site , flag) {
    return arr.join('').substr(site , flag + 1).split('').map( item => parseInt(item));
}

function sameArr(arr1 , arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let site = arr2.indexOf(arr1[i]);

        if( site !== -1 ){
            let flag = site;
            for (let k = site + 1 , j = i + 1 ; k < arr2.length; k++ , j++) {
                if( arr2[k] === arr1[j] ){
                    flag = k;
                }
            }
            if( flag !== site )
                return getSameArr(arr2 , site , flag);
        }
    }

    return [];
}

console.log(sameArr([1, 2, 2, 1],[2, 2]));
console.log(sameArr([3, 3, 2, 6],[3, 3]));