function addAndSubstract(a, b, c) {
    return console.log(a + b - c);
}

addAndSubtract(2, 3, 1) // 4

function addAndSubtracts(a, b, c) {

    const SumTwoNumbers = (x, y) => x + y;
    const subtract = (x, y) => x - y;

    const firstResult = SumTwoNumbers(a, b);
    const secondResult = subtract(firstResult, c);

    //const result=subtract(SumTwoNumbers(a,b),c);

    return console.log(secondResult);

}

addAndSubtracts(2, 3, 1) // 4