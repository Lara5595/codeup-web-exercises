const prices1 = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
    // // This loops prices in arrow syntax

// prices1.forEach(price=> console.log(price));
// // this makes it output to the page i put a div on html
// let output = '';

                            // // element

// prices1.forEach(price => {
//     output += `<p>${price}</p>`
//     console.log(output) // logs the output
//     // this a jquery
//     $("div").html(output);
// });
//
                            // // index
//
// prices1.forEach((price, index) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number: ${index + 1}. Price: $${price}. Tax:
//      $${tax}. Total: $${total}.</p>`;
//     $("div").html(output);
// });
//
//
                            // //array
//
// prices1.forEach((price, index, array) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number: ${index + 1}. Price: $${price}. Tax:
//      $${tax}. Total: $${total}.</p>`;
//     $("div").html(output);
//     if (index === array.length-1) {
//         $("div").append("<p>That's It!!!</p>");
//     }
// });
//
//
                            // // .map
//
// const pricesAfterTax =  prices.map(price =>{
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
//
// console.log(prices);
// console.log("After tax " + pricesAfterTax);
//
// // another example is
//
// const doubledArray = prices.map(price => price * 2);
// // console.log(doubledArray);
//
// // the old way would be without .map
// const array = [4, 5, 6, 7];
//
// function  doubleTheArray(array){
//     let newArray = [];
//     for (let i=0; i < array.length; i++){
//         newArray.push(array[i] * 2);
//     }
//     return newArray;
// }
//
// // console.log(doubleTheArray(array));
//
// // another way is
// const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];
//
// const eatingDessert = desserts.map(dessert => ` Eating ${dessert} Yummm!!`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// })
//
//
//
                        // // .map makes a new array
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
//
// const mileages = cars.map(car => car.mileage);
// // console.log(mileages);
//
// // adding something to the object
// // const newObject = cars.map(car => {
// //     car.newProp = 'new property';
// //     return car;
// // })
//
// // console.log(cars[0]);
//
// // .delete takes the array of cars and deletes the mileage property
// // const newObject = cars.map(car => {
// //     delete car.mileage;
// //     return car;
// // })
//
// // console.log(cars[0]);
//
//
                        // // .map makes a new array ^^
//
//
                            // // .filter

// const under10K = cars.filter(car => car.mileage < 10000);
// // we are using object deconstruction   you can also add the index so it loop with numbers
// under10K.forEach(({make, model, mileage}, index) => {
//     output += `<p>Car number: ${index + 1} I found a ${make} ${model} with ${mileage} miles</p>`;
//     $("#output").html(output);
// })
//
//
// // console logs the prices under 10
// // const under10DollarsWithTax = prices.filter(price => price < 10);
// // console.log(under10DollarsWithTax);
//
//
// // you can use .filter and .map
// const under10DollarsWithTax = prices.filter(price => price < 10)
//
// .map(price =>{
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
// console.log(under10DollarsWithTax);
//
//
//
                // // .reduce it reduces an array to one value ///////////////////////////////
// // you need a accumulator and a element

// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// const totalCost = prices.reduce(function (total, price){
//     return total + price;
// })
//
// console.log(totalCost);


// At index 0 it is like it does let total = array[0]

// let total = prices.reduce(function(total, itemPrice, index){
//     console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
//     return total + itemPrice;
// });
// $("#output").append(`<p>The total is ${totalCost}</p>`);


// The function passed to the reduce method takes an extra parameter, the accumulator is often abbreviated "acc"


// const averagePrice = prices.reduce((function (accumulator, current, index, array){
//     accumulator += current;
//     if (index === array.length -1) {
//         return accumulator/array.length;
//     }
//     return accumulator;
// }))


const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

//                      This creates a array with the car mileages
const mileages = cars.reduce((accumulator, car) =>{
    accumulator.push(car.mileage);
    return accumulator;
}, []);
console.log(mileages);


//              This returns the highest mileage from the array
// const highestMileage = cars.reduce((accumulator, car, index, array) =>{
//     accumulator.push(car.mileage);
//     if (index === array.length -1){
//         return accumulator.sort(function (a, b){
//             return b-a
//         })[0];
//     }
//     return accumulator;
// }, []);
// console.log(highestMileage);
//
//
// // or
// const highestMileage2 = cars.reduce((accumulator, car, index, array) => {
//     accumulator.push(car.mileage);
//     return accumulator;
//     },[]).reduce((accumulator, mileage) => {
//     return Math.max(accumulator, mileage);
//     });
// console.log(highestMileage);





//// Assignment -------------------

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array

let knowsMoreThanThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(knowsMoreThanThreeLanguages)
//3. Use .map to create an array of strings where each element is a user's email address
let emailAddress = users.map(user => user.email)
console.log(emailAddress);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce((acc, element, index, array) => {
    // console.log(element.yearsOfExperience);
    return  acc + element.yearsOfExperience / array.length
}, 0)
console.log(`The total years of experience is ${totalYears}`);

// 5. Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((acc, element) => {
    // console.log(element.email.length);
    if (acc.length < element.email.length) {
        return element.email
    } return acc
},"")
console.log(longestEmail);


// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let listUser = users.reduce((acc, element) => {
    return acc +  element.name + ","

}, "")
console.log(listUser)


//          Bonus

// TODO: Given the following array, complete the todos...
const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];
// MAP
// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:');

let dogNames = dogs.map(dog => dog.dogName);
console.log(dogNames);

// or
// let dogNames = dogs.map(function (dog){
//     return dog.dogName
// })
console.log(dogNames)

// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
let dogAges = dogs.map(dog => dog.age);
console.log(dogAges);

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
let newDogsArray = dogs.map(dog => {
    delete dog.isTrained
    return dog
})
console.log(newDogsArray)

let dogsValues = dogs.map(dog => {
    dog.values = 'new property'
    return dog
})

console.log(dogsValues)

// FILTER
// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');

let dogsUnderTen = dogs.filter(dog => dog.age <= 9);
console.log(dogsUnderTen)

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
let dogsNamedLexis = dogs.filter(dog => dog.dogName === "Lexie");
console.log(dogsNamedLexis);

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
const dogsTrainedAndYounger = dogs.filter(dog => dog.age < 10 && dog.isTrained == "true");
console.log(dogsTrainedAndYounger)

// REDUCE
// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');
// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');
// EXTRA CHALLENGES
// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');
// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');
// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');
// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');
// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');