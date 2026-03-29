let ul = document.getElementById('todo');

ul.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = "lightblue";
    }
});

ul.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = "";
    }
});