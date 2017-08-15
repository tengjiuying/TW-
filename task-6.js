function count(arr, item) {
    var num = 0;
    arr.forEach(function (elem) {
        if (elem === item){
            num++;
        }
    })
    return num;
}

console.log(count([1,2,3,4,3],3));
