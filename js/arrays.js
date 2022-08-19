
// declaring an array literal
// each item in an array is called an element

// let groceryList = ['bread', 'eggs', 'butter', 'milk'];
//
// for(let i = 0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1){
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else
//     console.log("I have to buy " + groceryList[i] + " and ");
// }

// function loop and except at the end because of -1 targets the last one


// let brothers = ['Alex', 'Carlos', 'Luis', 'David'];
//
// for (let i = 0; i < brothers.length; i++) {
//     if (i === brothers.length -1) {
//         console.log("I am " + brothers[i] + ".");
//     } else
//         console.log("He is my brother " + brothers[i] + " and ");
// }


// let texasCities = ['San Antonio', 'Houston', 'Dallas', 'El Paso'];
// for (let i = 0; i < texasCities.length; i++) {
//     if (i % 2 === 1) {
//         console.log(texasCities[i] + " is an odd city.")
//     } else {
//         console.log(texasCities[i]);
//     }
// }


function  outputArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
//
// outputArray(texasCities);





// For each loop takes an anonymous function
// the function we pass to the forEach loop has up to three parameters
// The first parameter represents the array elements
// The second parameter represents the element index
// the third parameter represents the array itself
// the second and third parameters are optional

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function(price, index){
//    console.log("item number " + index  + " costs " + price);
// });

// Arrow functions syntax

prices.forEach((price) => {
    console.log(price)
});
