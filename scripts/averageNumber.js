// Asking user for three numbers
const firstNumber = parseInt(prompt('Write first number pls', 0));
const secondNumber = parseInt(prompt('Write first second pls', 0));
const thirdNumber = parseInt(prompt('Write first third pls', 0));

// Displaying these numbers in console
console.log(`First number: ${firstNumber}`);
console.log(`Second number: ${secondNumber}`);
console.log(`Third number: ${thirdNumber}`);

// Calculating average of these numbers
let averageNumber = firstNumber + secondNumber + thirdNumber;
averageNumber /= 3;

// Displaying the result
console.log(`Here's ur average number: ${averageNumber}`);
alert(`Here's ur average number: ${averageNumber}`)