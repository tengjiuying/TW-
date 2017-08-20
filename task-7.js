
function find(arr) {
    var result = [];
    arr.sort();
    for (var i=0; i<arr.length-1; i++){
        if (arr[i] == arr[i+1]){
           result.push(arr[i]);
        }
    }
    return result.map(x => "'" + x + "'").join(',');
}
arr=['a' , 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(find(['a' , 'ab', 'ed', 'da', 'a', 'ed', 'b']));
