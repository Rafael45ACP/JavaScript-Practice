let students = [
    {name: "John", score: 74},
    {name: "Joe", score: 90},
    {name: "Jeb", score: 87}
];

for(let i = 0; i < 3; i++){
    if(students[i].score > 75){
        console.log(students[i].name + ": " +  students[i].score);
    }
}

