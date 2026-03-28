function introduce(age, city) {
    console.log(this.name + " is " + age + " from " + city);}

let person = {name: "Alex"};

introduce.apply(person, [20, "Manila"]);
