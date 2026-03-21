async function name(){
    let promise = new Promise((resolve, reject) => {  
        setTimeout(() => resolve("First"), 1000)
    });
  
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Second"), 2000)
    });
    let result = await promise;
    console.log(result);
    let result2 = await promise2;
    console.log(result2);
}
name();