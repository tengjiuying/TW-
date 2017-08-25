'use strict';
function regroup(arr) {
    let arr1 = arr.reduce((x, y) => x.concat(y), []);
    let arr2 = arr1.reduce((x, y) => x.concat(y), []);
    let arr3 = arr2.reduce((x, y) => x.concat(y), []);
    console.log(arr3);
}
regroup([1,2,[1,2],[3,4]]);
regroup([4,[3,[2,[1]]]]);