// 2.
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

// let number = parseInt(prompt('Enter your number'));
// for(let i = 1; i <= 10; i++) {
//     let result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }


// function showMultiplicationTable(num) {
// for ( let = i = 1; i <= 10; i++) {
//     console.log(`${num} X ${i} = ${num * i}`);
//     }
// }

//3.
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is even");
//     } else {
//         console.log(randomNum + " is odd");
//     }
// }


// 4. Pyramid of doom
// .string makes them into a string
// . repeat makes them repeat

// easy way
// for (let i = 1; i <= 9; i++){
//     console.log(i.toString().repeat(i));
// }
// another way is

// for (let i = 1; i <= 9; i++) {
// let outputString = "";
// for ( let count = 0; count < i; count++) {
//     outputString = outputString + i;
//     count++;
// }}
// console.log(outputString);


// 5.
//  for (let count =100;  count > 0; count-= 5) {
//      console.log(count);
//  }

for (let i = 100; i >= 5; i = i - 5) {
    console.log(i);
}






