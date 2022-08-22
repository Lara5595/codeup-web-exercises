let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}

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

let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

// to get the first array it would be. you would you their array location such as 0, 1, 2, etc
// you put the [0].time if you only want to target the time as so on.
console.log(hourlyWeather[0]);
console.log(hourlyWeather[0].time);
console.log(hourlyWeather[0].temperature);


// Loop over an array of objects

// using the for loop
for (let i = 0; i < hourlyWeather.length; i++){
    console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
}

// using a .forEach()










// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (opponent){
//         console.log(opponent.name + " has " + opponent.hitPoints + "hit ponts.");
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
//
// }