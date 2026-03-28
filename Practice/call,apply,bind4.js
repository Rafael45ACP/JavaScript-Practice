function createUser(name) {
    return {
        name: name,
        greet: function() {
            setTimeout(function() {
                console.log("Hello " + this.name);
            }.bind(this), 1000);
        }
    };
}

let user = createUser("Dan");

user.greet();