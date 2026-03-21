function callback(){
  console.log("Callback executed");  
}

function delayedMessage(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
}

delayedMessage("Hello, this is a delayed message!", callback);