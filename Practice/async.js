async function sayHello() {
    let promise = new Promise((resolve, reject) => {
        resolve("Hello Async!");
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "Hello Async!"

}
sayHello();