function solve(input) {
    let employees = {};

    input.forEach(name => {
        employees[name] = name.length;
    });

    Object.entries(employees).forEach(([name, length]) => {
        console.log(`Name: ${name} -- Personal Number: ${length}`);
    });

}

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);