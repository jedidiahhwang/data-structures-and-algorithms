/*
Sliding Window Pattern
By creating a "window" (mini array or number from one position to another), you can analyze
a subset of data at a time and manipulate it depending on conditions.
*/

// Example: Given an array and a number n, calculate biggest number in the array with n consecutive values.

/*
Brute Force Solution
Iterate through the whole array one by one and keep track of the maximum.
    - The larger the array, the more cumbersome it gets (imagine if your array was 100000 digits long).
*/

function maxSubArraySum(arr, num) {
    // If the number is greater than the array length, that's not possible (edge case).
    if(num > arr) {
        return null;
    }

    var max = -Infinity; // Set the maximum as an infinitely small number (can only be bigger from here).
    // Cycle through the array, set the temporary max by adding the successive values until num.
    // Increment by one until you finish the whole arra.
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

/*
Refactored Solution
Only loops one time.
 - O(n).
*/

function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // Same edge case as before.
    if(arr.length < num) return null;

    // Add the first num amount of values in the array and set that to the temporary max.
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // Remove the first added number and replace it with the next one in line. That way, you're not readding values you already considered.
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}