let id = setInterval(() => {
    console.log("Running");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);