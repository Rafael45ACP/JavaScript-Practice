let promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Operation failed.");
    }
});
promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });