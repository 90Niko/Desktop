// function solve(input){

//     let phoneBook = {};

//     for(let line of input){
//         let [name, number] = line.split(' ');
//         phoneBook[name] = number;
//     }

//     Object.keys(phoneBook).forEach(key => {
//         console.log(`${key} -> ${phoneBook[key]}`);
//     });
// }

function fancySolve(input) {

    let result = input.map(x => x.split(' '))
        .reduce((phoneBook, [name, number]) => {
            phoneBook[name] = number;

            return phoneBook;

        }, {})

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }

}

fancySolve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']); // Tim -> 0834212554, Peter -> 0877547887, Bill -> 0896543112