// General Variables
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayVal = "";

// Buttons
const buttons = document.querySelectorAll("button");

// Display
const display = document.querySelector("#display");

// Make the Calculator Work
function operate(e) {
    const buttonClass = e.target.classList;
    const buttonId = e.target.id;
    const userInput = e.target.textContent;

    if (buttonClass.contains("operand")) {
        getDisplayValue(userInput);
        putDisplayValue();
        //getOperationValues();
    } else if (buttonClass.contains("operator")) {
        getOperationValues(userInput);
        putDisplayValue();
    } else if (buttonId == "result") {
        //test();
        //putDisplayValue();
    } else if (buttonId == "clear") {

    } else if (buttonId == "sign") {

    } else if (buttonId == "percentage") {

    } else if (buttonId == "decimal") {

    }
}

// Get Display Value from Number Input
function getDisplayValue(num) {
    if (displayVal == firstOperand) {
        displayVal = num
    } else {
        displayVal += num;
    }
}

// Put Number Value on Display
function putDisplayValue() {
    display.textContent = displayVal;
}

// Get Operands and Operators from Operator Input
function getOperationValues(operator) {
    if (firstOperator != null && secondOperator == null) {
        secondOperand = displayVal;
        secondOperator = operator;
        calculate(firstOperator);
        displayVal = result.toString();
        firstOperand = displayVal;
        secondOperand = null;
        result = null;
        console.log(`${firstOperand}, ${firstOperator}, ${secondOperand}, ${secondOperator}, ${result}`);
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = displayVal;
        firstOperator = operator;
        calculate(secondOperator);
        displayVal = result.toString();
        firstOperand = displayVal;
        secondOperand = null;
        secondOperator = null;
        result = null;
        console.log(`${firstOperand}, ${firstOperator}, ${secondOperand}, ${secondOperator}, ${result}`);
    } else {
        firstOperand = displayVal;
        firstOperator = operator;
        console.log(`${firstOperand}, ${firstOperator}, ${secondOperand}, ${secondOperator}, ${result}`);
    }
}

// Reset Display Value

// Basic Math Operations
function add() {
    let sum = Number(firstOperand) + Number(secondOperand);
    return sum;
}
function substract() {
    let substraction = Number(firstOperand) - Number(secondOperand);
    return substraction;
}
function multiply() {
    let multiplication = Number(firstOperand) * Number(secondOperand);
    return multiplication;
}
function divide() {
    let division = Number(firstOperand) / Number(secondOperand);
    return division;
}

function calculate(operator) {
    if (operator == "+") {
        result = add();
        return result;
    } else if (operator == "-") {
        result = substract();
        return result;
    } else if (operator == "*") {
        result = multiply();
        return result;
    } else if (operator == "/") {
        result = divide();
        return result;
    }
}

// Event Listeners
buttons.forEach(button => {
    button.addEventListener("click", (e) => {operate(e)})
})