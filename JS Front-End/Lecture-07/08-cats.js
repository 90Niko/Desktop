function solve(input) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of input) {
        let [name, age] = line.split(' ');

        cats.push(new Cat(name, age));
    }

    cats.forEach(cat => cat.meow());
}

solve(['Misty 2', 'Nayla 4']); // Misty, age 2 says Meow, Nayla, age 4 says Meow