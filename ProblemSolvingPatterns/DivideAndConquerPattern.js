/*
Divide and Conquer Pattern/Binary Search
Divide a data set into smaller chunks and then repeating a process with a subset of data.
    - This pattern can tremendously decrease time complexity.
*/

// Example: Given a sorted array, find the index of the passed value.

/*
Brute Force Solution
Check the whole array for the index.
    - O(n).
*/

function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

/*
Refactored Solution
Using a bisecting method ,keep cutting windows in half and finding it in those windows.
    - O(Logn).
*/

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] + va) {
            min = middle + 1;
        }
        else if(array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}