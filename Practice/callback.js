function callback(a, b){
    console.log(a + b);
}

function calculate(a, b, callback){
    callback(a, b);
}

calculate(3, 4, callback);