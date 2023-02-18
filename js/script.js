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
  return operator(parseInt(num1), parseInt(num2));
}

function setDisplay(number) {
  display.textContent = number;
}

const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btns");
let previousBtnType = undefined;
let firstValue = undefined;
let secondValue = undefined;
let operator = undefined;

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let btn = e.target;
    let action = btn.dataset.action;
    let btnContent = btn.textContent;
    let displayedNum = display.textContent;

    if (!action) {
      if (displayedNum == "0" || previousBtnType == "operator") {
        displayedNum = btnContent;
      } else {
        displayedNum += btnContent;
      }
      setDisplay(displayedNum);
    }

    if (action == "equal") {
      secondValue = displayedNum;
      setDisplay(operate(operator, firstValue, secondValue));
    }

    if (action == "add") {
      previousBtnType = "operator";
      firstValue = displayedNum;
      operator = add;
    } else if (action == "subtract") {
      previousBtnType = "operator";
      firstValue = displayedNum;
      operator = subtract;
    } else if (action == "multiply") {
      previousBtnType = "operator";
      firstValue = displayedNum;
      operator = multiply;
    } else if (action == "divide") {
      previousBtnType = "operator";
      firstValue = displayedNum;
      operator = divide;
    }

    if (action == "clear") {
      previousBtnType = undefined;
      firstValue = undefined;
      secondValue = undefined;
      operator = undefined;
      setDisplay("0");
    }
  })
);