let firstNumber;
let secondNumber;

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
