async function wait() {
    try {
        let promise = new Promise((resolve, reject) => {
            let success = true;
            if (success) {
                resolve("Hello Async!");
            } else {
                reject("Oops!");
            }
        });
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

wait();