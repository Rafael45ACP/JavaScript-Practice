let promise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to test rejection
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });