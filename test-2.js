function findNum(arr) {
    for(var i=0; i<arr.length; i++){
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i];
        }
    }
    return false;
}

console.log(findNum([1,1,2,3,3]));
console.log(findNum([1,3,3,5,5]));
console.log(findNum([1,1,9,2,2]));