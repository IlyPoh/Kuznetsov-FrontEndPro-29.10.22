// Asking user to choose operation
const mathOperation = prompt('Hi! Choose operation u want to do (add, sub, mult, div, +, -, *, /)')

// Asking user for numbers
const firstNumberConvert = parseInt(prompt('Lets do some math, enter first number', 1));
const secondNumberConvert = parseInt(prompt('Ok, now enter second number', 1));

// Displaying operation and numbers in console
console.log(`Operation: ${mathOperation}`);
console.log(`First number: ${firstNumberConvert}`);
console.log(`Second number: ${secondNumberConvert}`);

// Checking if user entered a number
if (isNaN(firstNumberConvert) || isNaN(secondNumberConvert)) {
    console.log('You did something wrong, please start from the beggining')
    alert('You did something wrong, please start from the beggining')
} else {
    // Simple math
    const mathPlusConvert = firstNumberConvert + secondNumberConvert;
    const mathMinusConvert = firstNumberConvert - secondNumberConvert;
    const mathMultiplicationConvert = firstNumberConvert * secondNumberConvert;
    const mathDivisionConvert = firstNumberConvert / secondNumberConvert;

    // Displaying result
    if (mathOperation == "add" || mathOperation == "+") {
        console.log (`Ok, here's ur result:\n${firstNumberConvert} + ${secondNumberConvert} = ${mathPlusConvert}`);
        alert(`Ok, here's ur result:\n${firstNumberConvert} + ${secondNumberConvert} = ${mathPlusConvert}`);
    } else if (mathOperation == "sub" || mathOperation == "-") {
        console.log (`Ok, here's ur result:\n${firstNumberConvert} - ${secondNumberConvert} = ${mathMinusConvert}`);
        alert(`Ok, here's ur result:\n${firstNumberConvert} - ${secondNumberConvert} = ${mathMinusConvert}`);
    } else if (mathOperation == "mult" || mathOperation == "*") {
        console.log (`Ok, here's ur result:\n${firstNumberConvert} * ${secondNumberConvert} = ${mathMultiplicationConvert}`);
        alert(`Ok, here's ur result:\n${firstNumberConvert} * ${secondNumberConvert} = ${mathMultiplicationConvert}`);
    } else if (mathOperation == "div" || mathOperation == "/") {
        console.log (`Ok, here's ur result:\n${firstNumberConvert} / ${secondNumberConvert} = ${mathDivisionConvert}`);
        alert(`Ok, here's ur result:\n${firstNumberConvert} / ${secondNumberConvert} = ${mathDivisionConvert}`);
    } else {
        console.log ("You did smth wrong, refresh and start from beggining");
        alert("You did smth wrong, refresh and start from beggining");
    };
}