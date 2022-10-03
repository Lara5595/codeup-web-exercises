
// AJAX request with jQuery -comment

// $.get("data/murals.json", function (data){
//     console.log(data);
// })

// Fetch API - comment
// Vanilla JavaScript - comment

// fetch("data/murals.json").then(function (response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
// })

// or use arrow function  - comment
fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// Callback: a function passed as a argument to another function; it can run after another function has finished running        - comment

// function  sayHello(greeting,name) {
//     return `${greeting}, ${name}`;
// }
//
// let greeting = sayHello("Hola", "David");
//
// function displayOutput(output){
//     $("#output").html(output);
// }
//
// displayOutput(greeting);

//          OR     - comment

function greeter(greeting, name, displayFunction){
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output) {
    $("#output").html(output);
}

greeter("Hola", "David", displayToOutputDiv);


// setTimeout( () => greeter("Aloha", "Class", displayToOutputDiv), 3000);

//      or - comment
// setTimeout(function (){
//     greeter("Aloha", "class", displayToOutputDiv)
// },3000)

//          or - comment

// setTimeout(greeter, 3000, "Yo", "dude", displayToOutputDiv);

// got this from slack it generates a new greeting every second    - comment
const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

// setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);






const aPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       if (Math.random() > 0.5) {
           resolve("I was fulfilled!");
       } else {
           reject(" I was rejected");
       }
   }, 3000)
});

aPromise.then(value => console.log(value)).catch(error => console.log(error));

    /// or fetch return aPromise
fetch("data/murals.json").then(response => response.json()).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work!"));