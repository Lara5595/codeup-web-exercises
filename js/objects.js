/// Lecture

// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }

// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// another way is with the brackets you can use variables


// User bracket notation to access object property values
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);

// You can do anything to an object property that you can do to any other variable-driven property names

// If statement with objects
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95) {
//     console.log("It's kind of hot");
// } else {
//     console.log("It's cool today for Texas");
// }
//

// Loop through an array using for in loop
// for in loop
// for(let property in currentWeather) {
//     console.log(property + " :" + currentWeather[property]);
// }


// Dynamically add new properties to existing object
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);




// Array of objects

// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

// to get the first array it would be. you would you their array location such as 0, 1, 2, etc
// you put the [0].time if you only want to target the time as so on.
// console.log(hourlyWeather[0]);
// console.log(hourlyWeather[0].time);
// console.log(hourlyWeather[0].temperature);


// Loop over an array of objects

// using the for loop
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }

// using a .forEach()
// hourlyWeather.forEach(function (forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });


// forEach loop with arrow syntax
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`));


// Array of object where the properties have objects


// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];

// if you want to access a object from a property that has a object you chose the array then you .example and .example
// console.log(texasInfo[0].currentWeather.temp);
//
//
// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);


// wrong way
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (opponent){
//         console.log(opponent.name + " has " + opponent.hitPoints + "hit points.");
//         console.log(this.name + " attacks!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         opponent.hitPoints -= damage;
//         console.log(this.name + " does " + damage + " points of damage");
//         console.log(opponent.name + " now has " + opponent.hitPoints + " hit points.");
// } }
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 8,
//     attack: function (){
//         console.log(this.name + " attacks!")
//     }
// }



// easier way to code is
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//   };
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 8,
// };

// Let's create a controller object to handle anything players or game objects do that affects the state of the game. The controller might handle taking user input and calculating the input's effect on the game.

// let controller = {
//     attack: function (attacker, defender) {
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
// }
//
// let view = {
//     displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage) {
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         defender.hitPoints -= damage;
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points`);
//         console.log("------------");
//     }
// }

// let model = {
//         fighter : {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     },
//
//         monster : {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 8,
//     }
// }
//
// controller.attack(fighter,monster);
// controller.attack(monster,fighter);


// creating objects
// define an empty object and create properties dynamically

// let goblin = {};
// goblin.name = "Goblin";
//
//
// // create a function that returns objects
// function  makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     } }

// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);

// use an object constructor

// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamge;
// }
//
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
// controller.attack(model.hobgoblinCaptain, model.fighter);

// list of models
// for (let property in model){
//     console.log(model[property].name);
// }





// Assigment

// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName : "David",
        lastName : "Lara",
        sayHello : "Hello from"
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

console.log(`${person.sayHello}  ${person.firstName} ${person.lastName}`);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(shoppers =>
    console.log(`For ${shoppers.name} the price before is ${shoppers.amount} and the price after the discount is ${shoppers.amount - shoppers.amount * .12}`));


/** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    let books = [
        {
            title: "Codeup",
            author: {
                firstName: "Javier",
                lastName:  "instructor"
            }
        },

        {
            title: "Game of thrones",
            author: {
                firstName: "George",
                lastName: "Martin"
            }
        },

        {
            title: "Harry Potter",
            author: {
                firstName: "Simons",
                lastName: "simons"
            }
        },

        {
            title: "Green Eggs and Ham",
            author: {
                firstName: "Dr",
                lastName: "Seus"
            }
        },

        {
            title: "Army",
            author: {
                firstName: "Joe",
                lastName: "biden"
            }
        }

    ];
    console.log(books[0].title);
    console.log(books[4].author.lastName);
console.log(books[3].author.firstName);
console.log(books[2].author);
console.log(books[1].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    for (let i = 0; i < books.length; i++) {
        console.log(`Book # ${i + 1} \n title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
    }



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

function createBook(title,firstName,lastName) {
    return {
     title: title,
     author: {
         firstName: firstName,
         lastName: lastName
     }
    }}



