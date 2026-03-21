let promise = new Promise((resolve, reject) => {
    let success = Math.random() >= 0.5; // Simulating success or failure

    if (success) {
        resolve("Success"); // Operation was successful
    } else {
        reject("Failure"); // Operation failed
    }
});

promise
    .then((message) => {
        console.log(message); // Output: Operation was successful!
    })
    .catch((error) => {
        console.error(error); // Output: Operation failed.
    });