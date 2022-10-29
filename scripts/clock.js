// Asking user for hours
let convertingHours = parseInt(prompt('Tell me any number of hours'));

// Displaying hours in console
console.log(`Hours: ${convertingHours}`);

// Checking if number of hours more or equals 0 and giving user the result
if (convertingHours >= 0) {
    convertingHours *= 3600;

    console.log(`That's how many seconds in those hours: ${convertingHours}`);
    alert(`That's how many seconds in those hours: ${convertingHours}`);
} else {
    console.log('You did something wrong, start from the beggining.')
    alert('U did smth wrong, start from the beggining.')
}