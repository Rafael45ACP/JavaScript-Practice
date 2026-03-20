let i = 1;
        let id = setInterval(() => {
            console.log(i++);
        }, 1000);
       
setTimeout(() => {
    clearInterval(id);
}, 7000);