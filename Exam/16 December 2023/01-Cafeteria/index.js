
function solve(input) {

    const n = Number(input.shift());
    const person = [];

    for (let index = 0; index < n; index++) {

        const [name, shift, coffeeTypes] = input.shift().split(' ');

        person.push({ name, shift, coffeeTypes: coffeeTypes.split(',') });
    }

    let command = input.shift();

    function findName(name) {
        return person.find(barista => barista.name === name);
    }

    while (command !== 'Closed') {

        const [cmd, name, param1, param2] = command.split(' / ');

        if (cmd == 'Prepare') {

            const baristaName = findName(name);
            const shift = param1;
            const coffeeType = param2;

            if (baristaName && baristaName.shift == shift && baristaName.coffeeTypes.includes(coffeeType)) {
                console.log(`${baristaName.name} has prepared a ${coffeeType} for you!`);
            }
            else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`);
            }
        }
        else if (cmd == 'Change Shift') {
            const baristaName = findName(name);
            const shift = param1;

            if (baristaName) {

                baristaName.shift = shift;
                console.log(`${baristaName.name} has updated his shift to: ${shift}`);
            }
        }

        else if (cmd == 'Learn') {
            const baristaName = findName(name);
            const coffeeType = param1;

            if (baristaName && !baristaName.coffeeTypes.includes(coffeeType)) {
                baristaName.coffeeTypes.push(coffeeType);
                console.log(`${baristaName.name} has learned a new coffee type: ${coffeeType}.`)
            }
            else{
                console.log(`${baristaName.name} knows how to make ${coffeeType}.`)
            }
        }
        command = input.shift();
    }

    person.forEach(person => {
        console.log(`Barista: ${person.name}, Shift: ${person.shift}, Drinks: ${person.coffeeTypes.join(', ')}`)
    })
}

solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Change Shift / Bob / day',
    'Prepare / Carol / day / Cappuccino',
    'Learn / Bob / Mocha',
    'Closed']
);