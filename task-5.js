function find(collection) {
    var median = 0;
    collection = collection.sort((fir, las)=>{return fir - las});
    if ((collection.length % 2) === 0){
        median = (collection[collection.length/2-1] + collection[collection.length/2])/2;
    }else {
        median = collection[parseInt(collection.length/2)];
    }
    return median;
}

console.log(find([2,9,4,7]));
console.log(find([1,8,3,5,2]));