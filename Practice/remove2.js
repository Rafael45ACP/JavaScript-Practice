let ul = document.querySelector('ul');

let btn =document.getElementById('add');
btn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = 'New Item';
    ul.appendChild(li);
});