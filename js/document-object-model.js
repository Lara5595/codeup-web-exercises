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