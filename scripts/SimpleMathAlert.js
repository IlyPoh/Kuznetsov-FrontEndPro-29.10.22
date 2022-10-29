// Asking user for numbers
const firstNumber = parseInt(prompt('Lets do some math, enter first number', 1));
const secondNumber = parseInt(prompt('Ok, now enter second number', 1));

// Checking if user entered a number
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('You did something wrong, please start from the beggining')
    alert('You did something wrong, please start from the beggining')
} else {
    // Displaying those numbers in console
    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);

    // Simple math
    const mathPlus = firstNumber + secondNumber;
    const mathMinus = firstNumber - secondNumber;
    const mathMultiplication = firstNumber * secondNumber;
    const mathDivision = firstNumber / secondNumber;

    // Displaying results
    console.log(`Ok, here's ur results:\n${firstNumber} + ${secondNumber} = ${mathPlus}\n${firstNumber} - ${secondNumber} = ${mathMinus}\n${firstNumber} * ${secondNumber} = ${mathMultiplication}\n${firstNumber} / ${secondNumber} = ${mathDivision}`);
    alert(`Ok, here's ur results:\n${firstNumber} + ${secondNumber} = ${mathPlus}\n${firstNumber} - ${secondNumber} = ${mathMinus}\n${firstNumber} * ${secondNumber} = ${mathMultiplication}\n${firstNumber} / ${secondNumber} = ${mathDivision}`);
}