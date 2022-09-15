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

let alertSquare = document.getElementsByClassName("square");
function squareHi() {
    alert("Hi i am a square");
}

alertSquare.onclick = eventHandler;