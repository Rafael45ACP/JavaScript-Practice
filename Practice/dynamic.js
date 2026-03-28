let ul = document.getElementById('todo');
let input = document.getElementById('taskInput');
let btn = document.getElementById('addTask');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);

    li.addEventListener('click', function() {
        li.remove();
    });
});