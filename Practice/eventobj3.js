let li = document.querySelectorAll('li');

li.forEach(function(item) {
  item.addEventListener('click', function(e) {
    console.log(e.target.textContent);
  });
});