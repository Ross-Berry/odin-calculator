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

function populateDisplay(displayValue) {
  display.innerText = displayValue;
}

const display = document.getElementById("display");
const nums = document.querySelectorAll(".nums");
let displayValue = 0;

nums.forEach((num) =>
  num.addEventListener("click", (e) => {
    displayValue = e.target.innerText;
    populateDisplay(displayValue);
  })
);

// console.log(add(2, 2));
// console.log(subtract(5, 2));
// console.log(multiply(3, 3));
// console.log(divide(10, 2));
// console.log(operate(divide, 10, 2));
