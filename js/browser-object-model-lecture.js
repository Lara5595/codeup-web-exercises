// let sayHey = function () {
//     // let count makes it start in 0
//     let count = 0;
//     function hey() {
//         if (count <= 10) { // Makes it count to 10 on console
//             console.log('hey' + count);  // + count combines hey and number
//             count++   // makes it go up in number
//         }
//     }
// give interval function runs hey every milisecond which is 1000
//     setInterval(hey, 1000);
//
// } // This function ^^ counts to 10 in 1000 ms but it does not stop counting behind the scenes


let count = 0;
let thisTimeItWillStop;
function hey() {
    if (count <= 10) {
        console.log("hey " + count);
        count ++
    } else {
        clearInterval(thisTimeItWillStop);
    }
   thisTimeItWillStop = setInterval(hey, 1000)
}

//          or

// let sayHey = function () {
//     let count = 0;
//     function hey() {
//         if (count < 10) {
//             console.log('hey ' + count);
//         } else {
//             clearInterval(setInterval((hey, 1000)))
//         }
//     }
// }
// This function ^^ will make it stop even in the background

//              or

// function tenHeys() {
//     let count = 0;
//     let thisWillStop = setInterval(function (){
//         if (count < 10) {
//             console.log('hey ' + count);
//             count++
//         } else {
//             clearInterval(thisWillStop)
//         }
//     }, 1000);
// }




// setTimeout is a timer
setTimeout(wakeUpUser, 5000); //This takes the function and alerts wakee upp after 5sec

function wakeUpUser() {
    alert("WAKE UUUUPPPP!!!!");   // function for setTimeout
}


