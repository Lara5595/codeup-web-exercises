const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// This loops prices in arrow syntax
// prices.forEach(price=> console.log(price));
// this makes it output to the page i put a div on html
let output = '';

// element

// prices.forEach(price => {
//     output += `<p>${price}</p>`
//     console.log(output) // logs the output
//     // this a jquery
//     $("div").html(output);
// });

// index

// prices.forEach((price, index) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number: ${index + 1}. Price: $${price}. Tax:
//      $${tax}. Total: $${total}.</p>`;
//     $("div").html(output);
// });


//array

// prices.forEach((price, index, array) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number: ${index + 1}. Price: $${price}. Tax:
//      $${tax}. Total: $${total}.</p>`;
//     $("div").html(output);
//     if (index === array.length-1) {
//         $("div").append("<p>That's It!!!</p>");
//     }
// });


// .map

const pricesAfterTax =  prices.map(price =>{
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

console.log(prices);
console.log("After tax " + pricesAfterTax);

// another example is

const doubledArray = prices.map(price => price * 2);
// console.log(doubledArray);

// the old way would be without .map
const array = [4, 5, 6, 7];

function  doubleTheArray(array){
    let newArray = [];
    for (let i=0; i < array.length; i++){
        newArray.push(array[i] * 2);
    }
    return newArray;
}

// console.log(doubleTheArray(array));

// another way is
const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];

const eatingDessert = desserts.map(dessert => ` Eating ${dessert} Yummm!!`);
eatingDessert.forEach(element => {
    $("div").append(`<p>${element}</p>`);
})



// .map makes a new array
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

const mileages = cars.map(car => car.mileage);
// console.log(mileages);

// adding something to the object
// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     return car;
// })

// console.log(cars[0]);

// .delete takes the array of cars and deletes the mileage property
// const newObject = cars.map(car => {
//     delete car.mileage;
//     return car;
// })

// console.log(cars[0]);


// .map makes a new array ^^


// .filter
const under10K = cars.filter(car => car.mileage < 10000);
// we are using object deconstruction   you can also add the index so it loop with numbers
under10K.forEach(({make, model, mileage}, index) => {
    output += `<p>Car number: ${index + 1} I found a ${make} ${model} with ${mileage} miles</p>`;
    $("#output").html(output);
})


// console logs the prices under 10
// const under10DollarsWithTax = prices.filter(price => price < 10);
// console.log(under10DollarsWithTax);


// you can use .filter and .map
const under10DollarsWithTax = prices.filter(price => price < 10)

.map(price =>{
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});
console.log(under10DollarsWithTax);



// .reduce it reduces an array to one value
// you need a accumulator and a element
const totalCost = prices.reduce(function (total, price){
    return total + price;
})

// console.log(totalCost);



// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// At index 0 it is like it does let total = array[0]

let total = prices.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});
$("#output").append(`<p>The total is ${totalCost}</p>`);

