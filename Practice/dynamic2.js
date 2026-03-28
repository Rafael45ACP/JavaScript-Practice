let ul = document.getElementById('todo');
let input = document.getElementById('taskInput');
let btn = document.getElementById('addTask');

btn.addEventListener('click', function() {
    ul.innerHTML += `<li>${input.value}</li>`;
    input.value = '';
});

ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        ul.removeChild(e.target);
    }
}   );
