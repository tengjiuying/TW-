'use strict'
var str ='aaaaabbdbdbb';
var result = {};
for (var i = 0; i < str.length; i++){
    if (!result[str.charAt((i))]){
        result[str.charAt(i)] = 1;
    }else{
        result[str.charAt(i)]++;
    }
}

var string = '';
var count = 0;
for (var item in result){
    if (result[item] > count){
        string = item;
        count = result[item];
    }
}
console.log(['出现最多的值是'+char+'出现的次数是'+count]);