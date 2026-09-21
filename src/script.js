//the results of the calculations
const result = document.getElementById("result");
const calculations = document.getElementById("calculations");

//add event listeners to some buttons
const numberedButtons = document.querySelectorAll(".numbered-button");
//arithmetic buttons
const arithButtons = document.querySelectorAll(".arith-buttons");
const equalsTo = document.getElementById("equals-to");
const clear = document.getElementById("clear");
const clearEverything = document.getElementById("CE");

//The math functions
function addTwoNumbers(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
};

function subTwoNumbers(firstNumber,secondNumber){
    return firstNumber - secondNumber;
};

function multiplyTwoNumbers(firstNumber,secondNumber){
    return firstNumber * secondNumber;
};

function divideTwoNumbers(firstNumber,secondNumber){
    if (secondNumber === 0){
        return "Cannot divide by zero";
    }
    return firstNumber / secondNumber;
};

//Operate function
function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case "+":
            return addTwoNumbers(firstNumber,secondNumber);
        case "-":
            return subTwoNumbers(firstNumber,secondNumber);
        case "*":
            return multiplyTwoNumbers(firstNumber,secondNumber);
        case "/":
            return divideTwoNumbers(firstNumber,secondNumber);
        default:
            return "Invalid operator";
    }
}

//add event listeners to the buttons
numberedButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculations.textContent += button.textContent;
    })
});

arithButtons.forEach(button => {
    
    button.addEventListener("click", () => {
        const lastChar = calculations.textContent.slice(-1);
        if (["+", "-", "*", "/"].includes(lastChar)) {
            result.textContent = "Maths error";
            return;
        };
        calculations.textContent += button.textContent;
    })
});

clear.addEventListener("click", () => {
    calculations.textContent = calculations.textContent.slice(0,-1);
    result.textContent = "";
});
clearEverything.addEventListener("click", () => {
    calculations.textContent = "";
    result.textContent = "";
});

//displays results on clicking equalsTo button
equalsTo.addEventListener("click", () => {
    let expression = calculations.textContent;
    if (!expression) {
        result.textContent = "";
        return;
    };

    let operator;
    if (expression.includes("+")) operator = "+";
    else if (expression.includes("-")) operator = "-";
    else if (expression.includes("*")) operator = "*";
    else if (expression.includes("/")) operator = "/";

    let parts = expression.split(operator);
    let firstNumber = Number(parts[0]);
    let secondNumber = Number(parts[1]);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result.textContent = "Invalid input";
        return;
    }
    result.textContent = operate(operator, firstNumber, secondNumber);
});