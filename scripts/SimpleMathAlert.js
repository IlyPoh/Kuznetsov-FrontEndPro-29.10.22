// Asking user for numbers
const firstNumber = parseInt(prompt('Lets do some math, enter first number', 1));
const secondNumber = parseInt(prompt('Ok, now enter second number', 1));

// Displaying those numbers in console
console.log(`First number: ${firstNumber}`);
console.log(`Second number: ${secondNumber}`);

// Simple math
const mathPlus = firstNumber + secondNumber;
const mathMinus = firstNumber - secondNumber;
const mathMultiplication = firstNumber * secondNumber;
const mathDivision = firstNumber / secondNumber;

// Displaying results
console.log(`Ok, here's ur results:
${firstNumber} + ${secondNumber} = ${mathPlus}
${firstNumber} - ${secondNumber} = ${mathMinus}
${firstNumber} * ${secondNumber} = ${mathMultiplication}
${firstNumber} / ${secondNumber} = ${mathDivision}
`);
alert(`Ok, here's ur results:
${firstNumber} + ${secondNumber} = ${mathPlus}
${firstNumber} - ${secondNumber} = ${mathMinus}
${firstNumber} * ${secondNumber} = ${mathMultiplication}
${firstNumber} / ${secondNumber} = ${mathDivision}
`);