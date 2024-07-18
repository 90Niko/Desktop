function miniMaxSum(arr) {
    // Calculate total sum
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    
    // Find the minimum and maximum values in the array
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    
    // Calculate the minimum and maximum sums
    const minSum = totalSum - maxValue; // Min sum by excluding the max element
    const maxSum = totalSum - minValue; // Max sum by excluding the min element
    
    // Print the results
    console.log(minSum, maxSum);
}

// Sample input
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Output: 10 14