function newArray(arr, elem) {
    arr.forEach(function (t, number, ts) {
        if (t === elem){
            ts.splice(number,1);
            ts.push(t);
        }
    });
    return arr;
}

console.log(newArray([0, 1, 0, 3, 12],0));