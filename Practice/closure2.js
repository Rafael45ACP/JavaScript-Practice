function makeCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

let counter = makeCounter();

counter();