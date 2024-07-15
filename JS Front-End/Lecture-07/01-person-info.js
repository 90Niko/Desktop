function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;
}

console.log(solve('Peter', 'Pan', 20)); // { firstName: 'Peter', lastName: 'Pan', age: 20 }