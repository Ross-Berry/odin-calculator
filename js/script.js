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
  let computation = "";
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operator) {
    case "+":
      computation = add(Number.parseInt(num1), Number.parseInt(num2));
      break;
    case "-":
      computation = subtract(Number.parseInt(num1), Number.parseInt(num2));
      break;
    case "*":
      computation = multiply(Number.parseInt(num1), Number.parseInt(num2));
      break;
    case "/":
      computation = divide(Number.parseInt(num1), Number.parseInt(num2));
      break;
    default:
      return;
  }
  currentOperand = computation;
  previousOperand = "";
  operation = "";
}

function selectOperation(operator) {
  if (currentOperand === "") return;
  operation = operator;
  if (previousOperand !== "") {
    operate(operator, currentOperand, previousOperand);
  }
  previousOperand = currentOperand;
  currentOperand = "";
}

function updateDisplay(number) {
  currentOperand = currentOperand.toString() + number.toString();
  if (currentOperand.length > 6) {
    currentOperand = currentOperand.slice(0, 6);
  }
  display.innerText = currentOperand;
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operator = "";
  display.innerText = currentOperand;
}

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".ops");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
let currentOperand = "";
let previousOperand = "";
let operation = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    updateDisplay(number.innerText);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    selectOperation(operator.innerText);
  });
});

equal.addEventListener("click", () => {
  operate(operation, currentOperand, previousOperand);
  updateDisplay(currentOperand);
});

clear.addEventListener("click", () => {
  clearDisplay();
});

// console.log(add(2, 2));
// console.log(subtract(5, 2));
// console.log(multiply(3, 3));
// console.log(divide(10, 2));
// console.log(operate(divide, 10, 2));
