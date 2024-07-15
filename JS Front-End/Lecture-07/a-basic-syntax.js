//Object literal
let cat = { name: 'Fluffy', color: 'White' };

console.log(cat);

//Empty object
let person = {};

//Set properties dynamically (runtime)
person.name = 'John';
person.age = 25;
person.isMale = true;

console.log(person);

//Access properties
console.log(person.name);

//Access properties using dot notation
console.log(person['age']);

//Object literal with short hand syntax
let firstName = 'Peter';
let lastName = 'Pan';
let age = 20;
let person1 = {
    firstName,
    lastName,
    age
};