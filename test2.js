function Fibonacci(n) {
    let result=0;
    var num1 = 1;
    var num2 = 1;
    for(var i = 3; i <= n; i++) {
        var temp = num2;
        num2 = num1 + num2;
        num1 = temp;
    }
    result = num2;
    return result;
}
module.exports=Fibonacci;