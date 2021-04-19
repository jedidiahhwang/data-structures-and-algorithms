/*
Multiple Pointers Pattern
Creating pointers or values that correspond to an index or positon and move towards beginning, middle, or end
depending on the condition.
    - Very efficient, has minimal time complexity as well.
*/

// Example: Using a sorted array, return an array with pair of numbers that adds up to zero, or undefined otherwise.
/*
Brute Force Solution
Compare each number to the rest of the numbers.
    - O(n^2).
    - Inefficint because you're iterating through items at are irrelevant.
*/

function sumZero(arr) {
    // i will check first item, j checks the next. Add them together to see if they equal 0. If not, move on.
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/*
Refactored Solution
Using an iterative process, checks the sum of numbers using the sum between them (positive or negative). The pointer
moves according to the sign of the sum.
    - O(n).
    - This is an example of two pointers moving towards the middle.
*/

function sumZero(arr) {
    // Assign two variables, one at the beginning and one at the end.
    let left = 0;
    let right = arr.length - 1;

    // Make the increments move in the direction depending on the sign. 
    // If the sum is positive, it means the right is larger.
    // If the sum is negative, the left is larger.
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            /// If the numbers add to zero, return an array with the two values.
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}