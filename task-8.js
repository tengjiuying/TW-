function summary(arr) {

    return arr.map((item) => {return Math.pow(item, 2)});
}
console.log(summary([2,3,4,5]));