// General Variables
const firstNum = 2;
const secondNum = 3;
const operator = "+";

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