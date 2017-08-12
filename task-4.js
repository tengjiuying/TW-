function find() {
    var i, a, b, c;
    for (i = 0; i < 1000; i++){
        a = parseInt(i/100);
        b = parseInt((i-a*100)/10);
        c = parseInt(i-a*100-b*10);
        if ((a*a*a + b*b*b + c*c*c) === i){
            console.log(i);
        }
    }
}
find();