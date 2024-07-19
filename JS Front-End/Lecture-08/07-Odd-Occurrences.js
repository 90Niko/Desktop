function solve(inputArr) {

    const occurrences = inputArr.split(" ").reduce((acc, curr) => {
        const key = curr.toLowerCase();
        if (acc[key]) {
            acc[key]++;
        }
        else {
            acc[key] = 1;
        }
        return acc;
    },{});

    const keys = Object.keys(occurrences).filter(key => occurrences[key] % 2 !== 0).sort((a, b) => occurrences[b] - occurrences[a]);
    console.log(keys.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); // php, 3, 1, 5

