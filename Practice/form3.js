let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;

    if (name.trim() === '') {
        alert('Please enter a name');
        return;
    }

    let li = document.createElement('li');
    li.textContent = name;

    let ul = document.getElementById('list');
    ul.appendChild(li); 

    form.reset();
});