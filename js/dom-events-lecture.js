// The three steps of handling events

// 1. Get a reference to the element that will trigger the event
let theButton = document.querySelector("button");

// 2. Write the function that will be triggered by the event
// A function is a set of instructions. This kind of function that  is triggered by an event is called an event handler, or also called callback
// The function contains the instructions that will run when the event is triggered
function eventHandler() {
    alert("You clicked me!");
}

// 3. Register the handler

// We can use addEventListener with two arguments: the type of event and the function that will be triggered.

// theButton.addEventListener("click", eventHandler);  0R
theButton.onclick = eventHandler;

// more advance of writing it is
// document.querySelector("button").addEventListener('click',function () {
//     alert('you clicked me!');
// });


// Make the square alert
let theSquare = document.querySelector('.square');

let theHandler = function () {
    alert('I am a square ' + 'and my color is ' + window.getComputedStyle(document.querySelector('.square'), null) .getPropertyValue('background-color'));
}

// theSquare.addEventListener('click', theHandler);
theSquare.addEventListener('click', function (e) {
    console.log(e.target.className);
    console.log(getComputedStyle(e.target).backgroundColor);
});




// changes the text by clicking the button
let changeP = document.getElementById('change-P');
// let button1 = document.getElementById('btn'); works without this
 let buttonP = function () {
     changeP.innerText = 'It worked'
 }
 document.getElementById('btn').addEventListener('click',buttonP)



// document.querySelector('body').addEventListener('mouseout', function (event){
//     alert('free flashlight! Just sign up for email');
//     console.log(getComputedStyle(event,))
})