// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean");
}
// for equivalent of while(true) -- for(;;)
// while (true) {
//     let oddNumber = prompt("Please enter an odd number:");
//     if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)) {
//         console.log("Number to skip is: " + oddNumber);
//         console.log(" ");
//
//         for (let i = 1; i <= 50; i+=2)
//             if (i == oddNumber){
//                 console.log("Yikes! Skipping number " + oddNumber)
//                     continue;
//                 } else {
//                     console.log("Here is an odd number: " + i);
//                 }
//             }
//         break;
//     }
//
