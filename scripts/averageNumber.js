// Asking user for three numbers
const firstNumberAverage = parseInt(prompt('Write first number pls', 0));
const secondNumberAverage = parseInt(prompt('Write first second pls', 0));
const thirdNumberAverage = parseInt(prompt('Write first third pls', 0));

// Displaying these numbers in console
console.log(`First number: ${firstNumberAverage}`);
console.log(`Second number: ${secondNumberAverage}`);
console.log(`Third number: ${thirdNumberAverage}`);

// Calculating average of these numbers
let averageNumber = firstNumberAverage + secondNumberAverage + thirdNumberAverage;
averageNumber /= 3;

// Displaying the result
console.log(`Here's ur average number: ${averageNumber}`);
alert(`Here's ur average number: ${averageNumber}`)