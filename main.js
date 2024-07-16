// General Variables
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayVal = "0";

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
    } else if (buttonClass.contains("operator")) {
        getOperationValues(userInput);
        putDisplayValue();
    } else if (buttonId == "clear") {
        clearAll();
        putDisplayValue();
    } else if (buttonId == "sign") {
        addSign();
        putDisplayValue();
    } else if (buttonId == "percentage") {
        percentage();
        putDisplayValue();
    } else if (buttonId == "decimal") {
        putDecimal(userInput);
        putDisplayValue();
    }
}

// Get Display Value from Number Input
function getDisplayValue(num) {
    if (displayVal == "0") {
        displayVal = num;
    } else if (displayVal == firstOperand) {
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
    if (firstOperator != null) {
        secondOperand = displayVal;
        calculate(firstOperator);
        displayVal = result.toString();
        firstOperand = displayVal;
        secondOperand = null;
        firstOperator = null;
        if (operator != "=") {
            secondOperator = operator;
        }
        result = null;
    } else if (secondOperator != null) {
        secondOperand = displayVal;
        calculate(secondOperator);
        displayVal = result.toString();
        firstOperand = displayVal;
        secondOperand = null;
        if (operator != "=") {
            firstOperator = operator;
        }
        secondOperator = null;
        result = null;
    } else {
        firstOperand = displayVal;
        if (operator != "=") {
            firstOperator = operator;
        }
    }

    console.log(`${firstOperand}, ${firstOperator}, ${secondOperand}, ${secondOperator}, ${result}`);
}

// Clear all
function clearAll() {
    displayVal = "0";
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

// Percentage
function percentage() {
    displayVal = (displayVal/100).toString();
}

// Add Minus Sign for Negative Numbers
function addSign() {
    displayVal = (displayVal * -1).toString();
}

// Type Decimals
function putDecimal(decimal) {
    if (displayVal == firstOperand || displayVal == secondOperand) {
        displayVal = "0";
        displayVal += decimal;
    } else if (!displayVal.includes(decimal)) {
        displayVal += decimal;
    }
}

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