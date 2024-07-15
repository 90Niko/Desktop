function solve(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor
    };

    return JSON.stringify(person);
}

console.log(solve('Peter', 'Pan', 'blonde')); // {"name":"Peter","lastName":"Pan","hairColor":"blonde"}