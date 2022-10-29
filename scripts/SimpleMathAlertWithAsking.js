// Asking user to choose operation
const mathOperation = prompt('Hi! Choose operation u want to do (add, sub, mult, div, +, -, *, /)')

// Asking user for numbers
const firstNumber = parseInt(prompt('Lets do some math, enter first number', 1));
const secondNumber = parseInt(prompt('Ok, now enter second number', 1));

// Displaying operation and numbers in console
console.log(`Operation: ${mathOperation}`);
console.log(`First number: ${firstNumber}`);
console.log(`Second number: ${secondNumber}`);

// Checking if user entered a number
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('You did something wrong, please start from the beggining')
    alert('You did something wrong, please start from the beggining')
} else {
    // Simple math
    const mathPlus = firstNumber + secondNumber;
    const mathMinus = firstNumber - secondNumber;
    const mathMultiplication = firstNumber * secondNumber;
    const mathDivision = firstNumber / secondNumber;

    // Displaying result
    if (mathOperation == "add" || mathOperation == "+") {
        console.log (`Ok, here's ur result:\n${firstNumber} + ${secondNumber} = ${mathPlus}`);
        alert(`Ok, here's ur result:\n${firstNumber} + ${secondNumber} = ${mathPlus}`);
    } else if (mathOperation == "sub" || mathOperation == "-") {
        console.log (`Ok, here's ur result:\n${firstNumber} - ${secondNumber} = ${mathMinus}`);
        alert(`Ok, here's ur result:\n${firstNumber} - ${secondNumber} = ${mathMinus}`);
    } else if (mathOperation == "mult" || mathOperation == "*") {
        console.log (`Ok, here's ur result:\n${firstNumber} * ${secondNumber} = ${mathMultiplication}`);
        alert(`Ok, here's ur result:\n${firstNumber} * ${secondNumber} = ${mathMultiplication}`);
    } else if (mathOperation == "div" || mathOperation == "/") {
        console.log (`Ok, here's ur result:\n${firstNumber} / ${secondNumber} = ${mathDivision}`);
        alert(`Ok, here's ur result:\n${firstNumber} / ${secondNumber} = ${mathDivision}`);
    } else {
        console.log ("You did smth wrong, refresh and start from beggining");
        alert("You did smth wrong, refresh and start from beggining");
    };
}