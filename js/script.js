function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function populate() {
  const display = document.getElementById("display");
  display.innerText = displayValue;
}

function inputHandler(e) {
  if (e.target.classList.contains("nums")) {
    displayValue = e.target.innerText;
    populate();
  }
}

let displayValue = 0;
const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => btn.addEventListener("click", inputHandler));

// console.log(add(2, 2));
// console.log(subtract(5, 2));
// console.log(multiply(3, 3));
// console.log(divide(10, 2));
// console.log(operate(divide, 10, 2));
