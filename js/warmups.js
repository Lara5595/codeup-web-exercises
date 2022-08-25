/// The function helps with non numeric values
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);  // Use this function if they want to  non -numeric to return false
}

// Write a function that accepts an array of numbers and returns its average.
// Bonus: if there are any non-numeric values in the array, return false. Numeric strings should count a numeric values.

let array = [5, 10, 15];

let array2 = [-25, -22, 258, 68];

let array3 = ["notAnumber", 25, 78];

// this function passes but it does not give you a false
// function arrayAverage(array){
//     let total = 0; // create a total acumelator
//     array.forEach(number => {total += number});
//     return total/array.length
// }


//Bonus runs and gives you a false
function arrayAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNumber(array[i])) {
            return false;
        }
        total += array[i];
    }

    return total / array.length;
}
// Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
//Bonus: if there are any values that are not strings, return false

let stringsArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings) {
    let longest = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longest.length) {
            longest = arrayOfStrings[i];
        }
    } return longest;
}