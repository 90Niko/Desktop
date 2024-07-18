function timeConversion(s) {

    // Extract the period (AM/PM)
    const period = s.slice(1,4);

    // Extract the hour part
    let hour = parseInt(s.slice(0, 2));

    // Extract the rest of the time (minutes and seconds)
    const rest = s.slice(2, 8);

    // Convert the hour part based on the period
    if (period === 'AM') {
        if (hour === 12) {
            hour = '00';
        } else {
            hour = hour.toString().padStart(2, '0');
        }
    } else { // PM case
        if (hour !== 12) {
            hour = (hour + 12).toString();
        }
    }

    // Return the formatted 24-hour time
    return `${hour}${rest}`;
}

// Sample input
const input = "07:05:65PM";
console.log(timeConversion(input)); // Output: 19:05:45