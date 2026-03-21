function callback(){
  console.log("Callback executed");  
}

function greet(callback) {
    console.log("Hello");
    callback();
}

greet(callback);