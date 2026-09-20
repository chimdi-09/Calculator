// The two arguments
let firstNumber;
let secondNumber;

//The math functions
function addTwoNumbers(firstNumber,secondNumber) {
    let sumOfTwoNumbers = firstNumber + secondNumber;
    return(`${firstNumber} + ${secondNumber} = ${sumOfTwoNumbers}`);
};addTwoNumbers(firstNumber,secondNumber);

function subTwoNumbers(firstNumber,secondNumber){
    let diffOfTwoNumbers = firstNumber - secondNumber;
    return(`${firstNumber} - ${secondNumber} = ${diffOfTwoNumbers}`);
};subTwoNumbers(firstNumber,secondNumber);

function multiplyTwoNumbers(firstNumber,secondNumber){
    let productOfTwoNumbers = firstNumber * secondNumber;
    return(`${firstNumber} * ${secondNumber} = ${productOfTwoNumbers}`);
};multiplyTwoNumbers(firstNumber,secondNumber);

function divideTwoNumbers(firstNumber,secondNumber){
    let divisionOfTwoNumbers = firstNumber / secondNumber;
    return(`${firstNumber} / ${secondNumber} = ${divisionOfTwoNumbers}`);
};divideTwoNumbers(firstNumber,secondNumber);

//Operate function
function operate(operator, firstNumber, secondNumber){
    switch(operate){
        case "+":
            return addTwoNumbers(firstNumber,secondNumber);
        case "-":
            return subTwoNumbers(firstNumber,secondNumber);
        case "+":
            return multiplyTwoNumbers(firstNumber,secondNumber);
        case "/":
            return divideTwoNumbers(firstNumber,secondNumber);
        default:
            return "Invalid operator";
    }
}

//add event listeners to some buttons
const display = document.getElementById("calculations");
const numberedButtons = document.querySelectorAll(".numbered-button");

//add event listeners to the buttons
numberedButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
})