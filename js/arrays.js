
// declaring an array literal
// each item in an array is called an element

let groceryList = ['bread', 'eggs', 'butter', 'milk'];
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

//
// function  outputArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
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

// prices.forEach((price) => {
//     console.log(price)
// });







// how to .push  add a item to the end of the list
groceryList.push("potatoes");
console.log(groceryList);

// how to   .pop will eliminate the last item
groceryList.pop();
console.log(groceryList);

// how to .unshift  add to the beginning of list
groceryList.unshift("sliced cheddar");
console.log(groceryList);

// how to .shift takes away from the front
groceryList.shift();
console.log(groceryList);




// indexOf shows you where the value is
let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);
// replaces butter with peanut butter ^
groceryList[indexOfButter] = "peanut butter";
console.log(groceryList);


// slice takes off items of the list
let firstHalfOfGroceryList = groceryList.slice(0,2);
console.log(firstHalfOfGroceryList);

let secondHalfOfGroceryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

// .concat joins two arrays together
firstHalfOfGroceryList.push("butter");
groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);


// .reverse reverses the order
groceryList.reverse();
console.log(groceryList)

//  .sort sets a order
groceryList.sort();
console.log(groceryList);

// .reverse reverses the order
groceryList.sort();
console.log(groceryList.reverse());


// .sort in functions

prices.sort(function (a,b){
    return a-b;
});
console.log(prices);

// putting something in the middle of the list
groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

// for array
// for( let i = 0; i < groceryList.length; i++) {
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

// forEach array lower cases the array 
groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
})
console.log(groceryList);
