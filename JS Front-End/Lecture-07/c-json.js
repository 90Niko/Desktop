let cat={
    name: 'Fluffy',
    color: 'White',
    age: 3,
    isMale: true,
};

let catJson = JSON.stringify(cat);
console.log(catJson);
console.log(cat)

let catObject = JSON.parse(catJson);