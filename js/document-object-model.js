let accessTheDOM = document.getElementById("dc"); //creates a variable that access id-dc
let showMe = accessTheDOM.innerHTML; //innerHtml represents everything inside it
console.log(showMe); // consoles log DC


// let like = document.getElementById("like"); //create 2 variables
// let dontLike = document.getElementById("dontLike"); //^
// let output = `${dontLike.innerHTML} ${showMe}` // concatenate 2 variable
// console.log(output) // outputs I dont like DC
//


let preference = "dc";

let like = document.getElementById("like"); //create 2 variables
let dontLike = document.getElementById("dontLike"); //^
let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies` // concatenate 2 variable
console.log(output) // outputs I dont like DC


accessTheDOM.innerHTML = accessTheDOM.innerHTML + " Animated Universe" // This changes DC in html website to say DC Animated Universe
//another way to do this is
// accessTheDOM += "Animated Universe"

// let marvel = document.getElementById("marvel"); This changes DC to marvel on html
// accessTheDOM.innerHTML += marvel.innerHTML

marvel.setAttribute('class', 'hotpink') // this makes classes with marvel become hot pink

dc.setAttribute('class', 'blue')

let hotPinks = document.getElementsByClassName('hotpink');
// hotPinks[0].style.color = 'red';

for (let i = 0; i < hotPinks.length; i++){
    hotPinks[i].style.fontsize = "2em";
}

let submitButton = document.getElementById("colorSubmission")
submitButton.onclick = function () {
    let colorInput = document.getElementById("colorPreference")
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
}

// THE HULK JS
let theHulk = document.getElementById("hulk");
let hulkState = theHulk.getAttribute("data-state");
// let hulkState = theHulk.dataset.state; ^another^ way^ is
theHulk.innerText += " is in "  + hulkState + " state";
// theHulk.innerText += ` is in ${hulkState} state`; this is another way to write it

let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`

theHulk.innerText = hulkSummary

// transform hulk
let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    let theHulk = document.getElementById("hulk")
    let hulkState = theHulk.getAttribute("data-state");
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = ` The Hulk is in ${hulkState} state.`

}