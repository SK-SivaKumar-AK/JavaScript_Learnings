let displayValue = ``;
let firstValue = null;
let secondValue = null;
let currentOperation = null;

function updateDisplay(){
    const display = document.getElementById("display");
    display.value = displayValue;
}

function appendNumber(number){
    displayValue += number;
    updateDisplay();
}

function setOperation(operation){
    if(currentOperation !== null){
        calculateResult();
    }
    firstValue = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = "";
}

function calculateResult(){
    if(currentOperation === null || displayValue === ""){
        return;
    }
    secondValue = parseFloat(displayValue);

    switch(currentOperation){
        case "+":
            displayValue = firstValue + secondValue;
            break;
        case "-":
            displayValue = firstValue - secondValue;
            break;
        case "*":
            displayValue = firstValue * secondValue;
            break;
        case "/":
            displayValue = firstValue / secondValue;
            break;
    }
    currentOperation = null;
    firstValue = null;
    secondValue = null;
    updateDisplay();
}

function clearDisplay(){
    displayValue = "";
    currentOperation = null;
    firstValue = null;
    secondValue = null;
    updateDisplay();
}