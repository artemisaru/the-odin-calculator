// General Variables
const firstNum = 2;
const secondNum = 3;
const result = 5;
//const operator = operandButtons.textContent;
let displayVal = "";
let displayTxt = "0";



// Buttons
const operandButtons = document.querySelectorAll("button.operand");
const operatorButtons = document.querySelectorAll("button.operator");
const clearBtn = document.querySelector("#clear");
const signBtn = document.querySelector("#sign");
const percentageBtn = document.querySelector("#percentage");

// Display
const display = document.querySelector("#display");

// S
function getOperandVal(e) {
    const btnClass = e.target.classList;
    const userInput = e.target.textContent;
    if (btnClass.contains("operand")) {
        for (let i = 0; i <= 0; i++) {
            putDisplayVal(userInput);
            if (btnClass.contains("operator")) {
                break;
            }
        }
        
    }
}


// Put Number Value on Display
function putDisplayVal(num) {
    //const input = e.target.textContent;
    displayVal += num;
    displayTxt = displayVal;
    display.textContent = displayTxt;
    return displayTxt;
}

// Reset Display Value
function resetDisplayVal() {
    displayTxt = "0";
    displayVal = "";
    display.textContent = displayTxt;
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
    operandButton.addEventListener("click", (e) => {getOperandVal(e)})
})

clearBtn.addEventListener("click", () => {resetDisplayVal()})