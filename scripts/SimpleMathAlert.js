// Asking user for numbers
const firstNumberAlert = parseInt(prompt('Lets do some math, enter first number', 1));
const secondNumberAlert = parseInt(prompt('Ok, now enter second number', 1));

// Checking if user entered a number
if (isNaN(firstNumberAlert) || isNaN(secondNumberAlert)) {
    console.log('You did something wrong, please start from the beggining')
    alert('You did something wrong, please start from the beggining')
} else {
    // Displaying those numbers in console
    console.log(`First number: ${firstNumberAlert}`);
    console.log(`Second number: ${secondNumberAlert}`);

    // Simple math
    const mathPlusAlert = firstNumberAlert + secondNumberAlert;
    const mathMinusAlert = firstNumberAlert - secondNumberAlert;
    const mathMultiplicationAlert = firstNumberAlert * secondNumberAlert;
    const mathDivisionAlert = firstNumberAlert / secondNumberAlert;

    // Displaying results
    console.log(`Ok, here's ur results:\n${firstNumberAlert} + ${secondNumberAlert} = ${mathPlusAlert}\n${firstNumberAlert} - ${secondNumberAlert} = ${mathMinusAlert}\n${firstNumberAlert} * ${secondNumberAlert} = ${mathMultiplicationAlert}\n${firstNumberAlert} / ${secondNumberAlert} = ${mathDivisionAlert}`);
    alert(`Ok, here's ur results:\n${firstNumberAlert} + ${secondNumberAlert} = ${mathPlusAlert}\n${firstNumberAlert} - ${secondNumberAlert} = ${mathMinusAlert}\n${firstNumberAlert} * ${secondNumberAlert} = ${mathMultiplicationAlert}\n${firstNumberAlert} / ${secondNumberAlert} = ${mathDivisionAlert}`);
}