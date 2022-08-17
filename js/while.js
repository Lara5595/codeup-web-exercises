// did the wrong one but it worked its multiplication table
// let number = parseInt(prompt('Enter your number'));
// for(let i = 1; i <= 10; i++) {
//     let result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }



 //   Create a while loop that uses console.log() to create the output shown below.
// // while.js assignment
// let number = 2;
// while (number < 70000) {
//     console.log(number)
//     number = number * 2;
//}




// do while assignment

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

let allCones = Math.floor(Math.random() * 51) + 50;

do {
   let conesWanted = Math.floor(Math.random() * 5) + 1;
   if (conesWanted > allCones) {
      console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`)
   } else  {
      console.log(`${conesWanted} sold...`);
      allCones = allCones - conesWanted;
   }
   console.log(`${allCones} left`)
} while (allCones > 0);
console.log("Yay you sold them all");
