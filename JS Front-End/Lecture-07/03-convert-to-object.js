function solve(jsonInput) {
   
    let data = JSON.parse(jsonInput);

    Object.keys(data).forEach(key => {
        console.log(`${key} -> ${data[key]}`);
    });
    
}

solve('{"name" : "Sofia", "area" : 492, "population" : 1238438, "country" : "Bulgaria", "postCode" : "1000"}'); //name -> Sofia, area -> 492, population -> 1238438, country -> Bulgaria, postCode -> 1000  