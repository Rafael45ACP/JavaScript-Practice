let ul = document.querySelector('ul');

ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});