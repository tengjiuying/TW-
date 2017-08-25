function leftpad(string, count, otherstring) {
    if (count > string.length){
        console.log((otherstring.repeat(count - string.length)) + string);
    }else {
        console.log(string);
    }
}

console.log(leftpad('hello',20,'1'));
