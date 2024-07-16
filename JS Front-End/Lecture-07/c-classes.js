class Cat{

    examCount = 0;
    #internalField = 'Secret';

    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    meow(){
        console.log(`${this.name} says Meow!`);
    }

    static exam(cat){
        console.log('Exam!');
    }

}

const cat = new Cat('Misty', 'Siamese');
const cat2 = new Cat('Nayla', 'Angora');
cat.meow();

for (let key in cat){
    console.log(cat[key]);
}
cat2.meow();
console.log(Cat.exam(cat2));

