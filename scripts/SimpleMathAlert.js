// Asking user for numbers
const firstNumber = prompt('Lets do some math, enter first number', 1);
const secondNumber = prompt('Ok, now enter second number', 1);

// Displaying those numbers in console
console.log(`First number: ${firstNumber}`);
console.log(`Second number: ${secondNumber}`);

// Simple math
const mathPlus = (parseInt(firstNumber)+parseInt(secondNumber));
const mathMinus = (parseInt(firstNumber)-parseInt(secondNumber));
const mathMultiplication = (parseInt(firstNumber)*parseInt(secondNumber));
const mathDivision = (parseInt(firstNumber)/parseInt(secondNumber));

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