function reBuild(collection){
    let str = " ";
    for(var i=0; i < collection.length-1; i++){
        str += (collection[i] + "->");
    }
    str += collection[collection.length-1];
    return str;
}
function deletCount(str, val){
    let array = str.split('->');
    let newArray = [];
    for(let item of array){
        if(Number(val) != item){
            newArray.push(item);
        }
    }
    if(newArray.length > 0){
        return reBuild(newArray);
    }
}
console.log(deletCount("1->2->3->3->4->5->3",3));
console.log(deletCount("1->2->1->1->1->1->1",1));