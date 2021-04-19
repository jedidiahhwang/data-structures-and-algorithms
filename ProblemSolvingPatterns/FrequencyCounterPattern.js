// There are some problem solving pattersn to code, but is hardly applicable to all.

/*
Frequency Counter Pattern
Use an object to collect a bunch of objects and compare values.
    - Usually O(n) timevs O(n^2) of nested loops.
*/

// Example: Check if an array contains squared values of another array.
/*
Brute Force Solution
    - Nested for loop and indexOf yields O(n^2).
        i. This is bad since 1000 x 1000 = 1000000.
*/

function same(arr1, arr2) {
    // Check the edge cases. If the lengths aren't the same, it has to be false.
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        // Find the index of the squared value in arr2. If it doesn't exist (correctIndex === -1), return false.
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        // If the index does exist, remove that value using splice. This removes issues regarding duplicate values.
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

/*
Refactored Solution
    - There are several for loops, but none of them are nested, hence the time complexity is O(3n).
        i. 3000 << 1000000.
*/

function same(arr1, arr2) {
    // Same edge case as before.
    if(arr1.length !== arr2.length) {
        return false;
    }

    // Using objects, you can use key-value pairs to keep track of the numbers (keys) and how many times it occurs (values).
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // If the value occurrs in arr1/arr2, check to see if it is in the frequencyCounter. Add 1 or initialize appropriately.
    for(let val of arr1) {
        frequencyCounter1[val] = (frequenceyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequenceyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // The first if statement checks to see if the squared value of frequencyCounter1 exists in frequencyCounter2. If not, return false.
    // The second if statement checks how often a value occurs. If there are a different number of occurrences of squared values and non-squared, return false.
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}