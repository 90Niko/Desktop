// function solve(){

//     let store = {};

//     for(let i = 0; i < arguments[0].length; i+=2){
//         let product = arguments[0][i];
//         let quantity = Number(arguments[0][i + 1]);
//         store[product] = quantity;
//     }

//     for(let i = 0; i < arguments[1].length; i+=2){
//         let product = arguments[1][i];
//         let quantity = Number(arguments[1][i + 1]);

//         if(store.hasOwnProperty(product)){
//             store[product] += quantity;
//         } else {
//             store[product] = quantity;
//         }
//     }

//     for(let product in store){
//         console.log(`${product} -> ${store[product]}`);
//     }
// }

function solve(inStock, ordered) {

    function generateObjectData(input) {

        return new Array(input.length / 2).fill({}).reduce((acc, curr, i) => {

            const product = input[i + i];
            const quantity = Number(input[i + i + 1]);


            if (!curr[product]) {
                curr[product] = 0;
            }

            curr[product] += quantity;

            return Object.assign(acc, curr);
        }, {});
    }

    const inStockData = generateObjectData(inStock);
    const orderedData = generateObjectData(ordered);

    const allProducts =
        { ...inStockData }

    Object.keys(orderedData).forEach(product => {
        if (allProducts.hasOwnProperty(product)) {
            allProducts[product] += orderedData[product];
        } else {
            allProducts[product] = orderedData[product];
        }
    });

    for (const product in allProducts) {
        console.log(`${product} -> ${allProducts[product]}`);
    }
}



solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);