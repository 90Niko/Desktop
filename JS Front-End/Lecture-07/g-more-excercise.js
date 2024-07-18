function findTheMedian(arr){
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Find the middle element
    const middleIndex = Math.floor(arr.length / 2);
    const median = arr[middleIndex];
    
    // Print the result
    console.log(median);
}

// Sample input
const arr = [ 0,1, 2, 4, 6, 5, 3];

// Call the function
findTheMedian(arr); // Output: 4

function aVeryBigSum(n, ar) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ar[i];
    }
    return sum;
}

// Sample input
const n = 5;
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// Calculate the sum
const result = aVeryBigSum(n, ar);

// Output the result
console.log(result); // Output: 5000000015