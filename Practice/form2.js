let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;

    let li = document.createElement('li');
    li.textContent = name;

    let ul = document.getElementById('list');
    ul.appendChild(li); 
});