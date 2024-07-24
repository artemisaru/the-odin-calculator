// General Variables
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayVal = "0";

// Text Variables
const errorMessageText = "..."

// Calculator
const calculator = document.querySelector("#calculator")

// Buttons
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector("#clear");

// Display
const display = document.querySelector("#display");

// Snarky Error Message
const errorMessage = document.querySelector(".error-message");

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
    } else if (buttonId == "backspace") {
        clearOneLeft();
    } else if (buttonId == "clear") {
        clearAll();
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
        clearBtn.textContent = "C";
    } else if (displayVal == firstOperand) {
        displayVal = num;
    } else {
        displayVal += num;
    }
}

// Put Number Value on Display
function putDisplayValue() {
    display.textContent = displayVal;
    if (displayVal.length > 6) {
        decreaseFontSize(5);
    }
}

//
function decreaseFontSize(currentSize) {
    currentSize -= 1;
    display.style.fontSize = `${currentSize}rem`;
}

// Get Operands and Operators from Operator Input
function getOperationValues(operator) {
    if (firstOperator != null) {
        secondOperand = displayVal;
        getResult(firstOperator);
        firstOperator = null;
        if (operator != "=") {
            secondOperator = operator;
        }
        result = null;
    } else if (secondOperator != null) {
        secondOperand = displayVal;
        getResult(secondOperator);
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

// Get Operation Result and Pass it as the First Operand of the Next Operation
function getResult(operator) {
    calculate(operator);
    if (result == errorMessageText) {
        displayVal = result.toString();
        firstOperand = null;
        firstOperand = displayVal;
    } else {
        displayVal = roundResult(result).toString();
        firstOperand = displayVal;
    }
    secondOperand = null;
}

// Round Result with Long Decimals Accurately
function roundResult(num) {
    const roundedResult = Number(Math.round(num + "e" + 8) + "e-" + 8);
    return roundedResult;
}

// Backspace
function clearOneLeft() {
    const currentDisplay = Array.from(displayVal);
    const clearedDisplay = [];
    if (currentDisplay.length == 1) {
        clearAll();
    } else {
        for (let i = 0; i < currentDisplay.length - 1; i++) {
            clearedDisplay.push(currentDisplay[i]);
        }
        displayVal = clearedDisplay.join("");
    }
    putDisplayValue();
}

// Clear all
function clearAll() {
    displayVal = "0";
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    clearBtn.textContent = "AC"
    putDisplayValue();
}

// Percentage
function percentage() {
    displayVal = (displayVal/100).toString();
    firstOperand = displayVal;
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

// Show Error Message
function showMessage() {
    errorMessage.classList.add("show-message");
    calculator.classList.add("focus-gordon");
}

// Hide Error Message
function hideMessage() {
    errorMessage.classList.remove("show-message");
    calculator.classList.remove("focus-gordon");
    setTimeout(clearAll, 600)
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
    if (secondOperand == "0") {
        showMessage();
        setTimeout(hideMessage, 3500);
        return errorMessageText;
    } else {
        return division;
    }
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