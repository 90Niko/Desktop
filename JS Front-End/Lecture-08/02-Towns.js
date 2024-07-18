function solve(input){

    let towns = [];

    input.forEach(town => {
        let [name, latitude, longitude] = town.split(' | ');
        let townObj = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        towns.push(townObj);
    });

    towns.forEach(town => {
        console.log(town);
    });

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);