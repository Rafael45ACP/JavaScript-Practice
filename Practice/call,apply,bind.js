function greet(){
    console.log("Hello" + this.name);
}

let user = {
    name: "Alex"
};

greet.call(user); // Output: Hello Alex 
