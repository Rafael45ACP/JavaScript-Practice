let input = document.getElementById("text");

input.addEventListener("input", () => {
  let text = input.value;
  console.log("Current value: " + text);
}); 