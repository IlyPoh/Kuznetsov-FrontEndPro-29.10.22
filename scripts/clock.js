// Asking user for hours
let hoursToConvert = parseInt(prompt('Tell me any number of hours'));

// Displaying hours in console
console.log(`Hours: ${hoursToConvert}`);

// Checking if number of hours more or equals 0 and giving user the result
if (hoursToConvert >= 0) {
    const hoursConverted = hoursToConvert * 60;

    console.log(`That's how many seconds in those hours: ${hoursConverted}`);
    alert(`That's how many seconds in those hours: ${hoursConverted}`);
} else {
    console.log('You did something wrong, start from the beggining.')
    alert('U did smth wrong, start from the beggining.')
}