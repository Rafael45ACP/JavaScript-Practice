let ul = document.querySelector('ul');
let btn = document.getElementById('add');



ul.addEventListener('click', function(event) {
   if (event.target.tagName === 'LI') { 
    console.log(event.target.textContent);
   }
});

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'Item 3';
    ul.appendChild(li);
});