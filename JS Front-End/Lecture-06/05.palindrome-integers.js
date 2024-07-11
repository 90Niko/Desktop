function palindromeIntegers(input) {
   
    // for (let i = 0; i < input.length; i++) {
    //     let currentNumber = input[i];
    //     let reversedNumber = Number(currentNumber.toString().split('').reverse().join(''));
    //     if (currentNumber === reversedNumber) {
    //         console.log(true);
    //     } else {
    //         console.log(false);
    //     }
    // }

function isPalindrome(num) {
    let reversedNum = Number(num.toString().split('').reverse().join(''));
    return num === reversedNum;
}

input.forEach(num => {
    console.log(isPalindrome(num));
    
});

}   palindromeIntegers([123,323,421,121]); // false true false true