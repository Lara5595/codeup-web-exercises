
// Loops

// let slices = 4;
// console.log(`There are ${slices} slices`);
//
// while (slices > 0){
//     console.log("I'll have slice");
//     slices = slices -1;
//     //short hand ^ slices--;
//     console.log(`Now there's ${slices}  slices left`)
// }
// console.log("No more pizza.");

// How to count up
// let counter = 0;
// console.log("Count to 100");
// while (counter <= 100) {
//     console.log(counter);
//     counter++
// }

// // To count down is
// let counter = 100;
//     while (counter >= 0) {
//         console.log(counter);
//     counter--;
// }

// // how to multiply
// let number = 5;
// while (number < 200) {
//     console.log(number) // we move the console log up so its stops at 160 if its at the end its 320
//     number = number * 2;
//     // short hand ^ *= 2;
// }
//

//Pseducode
// Ask a user for input -- how much does something cost
// Assign the user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say when there's no more items
//
//  let total = 0;
//  let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
//  total = total + priceOfItem;
//  alert("Your total is now " + total);
//  // If you copy and past the code it will keep adding the items but there is a easier way to write
//
// First draft

// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput !== "stop") {
//     userInput = prompt("Enter the price of your next item:");
//     if (userInput === "stop") {
//         alert("Your final total is " + total);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is now " + total);
//     }
// }

// easy way below for the priceOfItem
// let total = 0;
// let priceOfItem;
// while(true) {
//     let userInput = prompt("Enter the price of your item: " + "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//         // .toFixed makes it not have alot of decimals if we type 2 its only ex 9.(99)
//     }
// }

// Math.floor() rounds the numbers
// Math.random picks a random number
// Math.floor(Math.random() * 6)  returns a number 0 to 5 a + 1 will be 1 to 5
// Math.ceil() will round up and Math.round will round down
// Math.sign() return a positive to a negative
// ** is a exponent operator

// Do while loop

let number = Math.ceil(Math.random() * 6);
let guess;
console.log(guess);
do {
    let guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);
alert(`Your guess of ${guess} matches the number ${number}!`);