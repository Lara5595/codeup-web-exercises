// let flavor = prompt("Welcome to Codeup ice cream. What flavor do you want?");
//
// flavor = flavor.toLowerCase();

//Else If statements

// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!")
// } else if (flavor === "vanilla"){
//     alert("One vanilla comimng right up");
// } else {
//     alert("We do not have that flavor. Sorry!");
// }


//Switch statements
// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//     case ("strawberry") :
//         alert("One strawberry coming right up!")
//         break
//     default:
//         alert("We do not have that flavor. Sorry!");
// }

// let decision = confirm("Are you sure you want to close this page");
// alert(decision);
//
// if (decision) {
//     alert("Ok, closing the page.");
// } else {
//     alert("Ok, keeping the page open.");
// }



// // Ternary statement
// (decision)?alert("Closing the page"):alert("Keeping page open.");



// let number = prompt("Enter a number:");  another way to write this by putting the prompt inside

// function divisibleByFive(number) {
//     if (number % 5 === 0 && number !== null){    <--- the null is used for when you click the box it doesnt say its divisible
//         alert("That number is divisible by 5"); }
//     else {
//         alert("That number is not divisible by 5");
//     }
// }


// function divisibleByFive(number){
//     number % 5 === 0 ? alert("That number is divisible by 5") : alert ("That number is not divisible by 5");
// }


// function divisibleByFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5" : "That number is not divisible by 5");
// }
//
// divisibleByFive(prompt("Enter a number:"));  // <-- another way
//


// function alertMVPCustomer(purchaseTotal) {
//     if (purchaseTotal > 1000) {
//         alert("MVP!")
//     } else {
//         alert("peasant")
//     }
// }
//
// alertMVPCustomer(1000);

// function  isMVP(purchaseTotal) {
//     return purchaseTotal > 1000;
// }
//
// let customer1purchase = 1001;
//
// if (isMVP(customer1purchase)) {
//     alert("MVP!")
// }

function isMPV(total) {
    alert((total > 1000 ? "You are MVP" : "PEASANT!"));
}

isMPV(prompt("Enter a number"));
