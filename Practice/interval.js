let id = setInterval(() => {
    console.log('Hello every 1 second');
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);