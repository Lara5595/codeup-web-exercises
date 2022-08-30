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





// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// The array has objects
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].students
    }
    return total;
}

console.log(calculateTotalStudents(classes)+ "The total is");



// adds the total in a array
let numbericArray = [8, 10, 20];
function arraySum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(arraySum(numbericArray));



// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
// This is a function expression
const convertToObject = function (nameOfClass, numberOfStudents) {
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
}
console.log(convertToObject("Intro to Programming", 20));

// convertToObject as a arrow function
// const convertToObject = (nameOfClass, numberOfStudents) => {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }



// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

function desirableNeighborhood(neighborhoodObject) {
        let total = 0;
        for (let i = 0; i < neighborhoodObject.schools.length; i++) {
            total += neighborhoodObject.schools[i].rating;
        }

    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low";
}



//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// What's the cost of each level? level * level * priceOfCan

// so i need the totalCost accumulator variable and some kind of level variable that keeps track of what level i'm one  and i need to keep looping until totalCost > bonus

function beeramid(bonus,price) {
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus) {
        totalCost += levels * levels * price;
        levels++;
    }
    return levels;
}





// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// ```
//
// The shape of the output should be the following:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
// }
//
// Regardless of the case of the first name and last name input, the output should be in all lower case.