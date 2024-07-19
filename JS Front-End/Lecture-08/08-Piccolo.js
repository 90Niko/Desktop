function solve(inputArr) {

    const parking = {};

    for (const line of inputArr) {
        const [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }

    if (Object.keys(parking).length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }

    Object.keys(parking).sort((a, b) => a.localeCompare(b)).forEach(carNumber => console.log(carNumber));
}
    solve(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']);