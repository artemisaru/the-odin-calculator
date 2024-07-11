// General Variables
const firstNum = 2;
const secondNum = 3;
const operator = "+";

// Buttons
const operandButtons = document.querySelectorAll("button.operand");
const operatorButtons = document.querySelectorAll("button.operator");
const clearBtn = document.querySelector("#clear");

// Display
const display = document.querySelector("#display");

// Store Value Input


// Put Number Value on Display
function putDisplayVal(e) {
    const operand = e.target.textContent;
    if (display.textContent == "0") {
        display.textContent = "";
    }
    display.textContent += operand;
}

// Reset Display Value
function resetDisplayVal() {
    display.textContent = "0";
}

// Basic Math Operations
function add() {
    let sum = firstNum + secondNum;
    return sum;
}
function substract() {
    let substraction = firstNum - secondNum;
    return substraction;
}
function multiply() {
    let multiplication = firstNum * secondNum;
    return multiplication;
}
function divide() {
    let division = firstNum / secondNum;
    return division;
}

function operate() {
    if (operator === "+") {add()};
    if (operator == "-") {substract()};
    if (operator == "*") {multiply()};
    if (operator == "/") {divide()};
}

// Event Listeners
operandButtons.forEach(operandButton => {
    operandButton.addEventListener("click", (e) => {putDisplayVal(e)})
})

clearBtn.addEventListener("click", () => {resetDisplayVal()})