function printOffAndEvenSum(arr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arr.toString().length; i++) {
        let currentNum = Number(arr.toString().charAt(i));
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printOffAndEvenSum(123456); // Odd Sum: 9, Even Sum: 12