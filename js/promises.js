
// AJAX request with jQuery
// $.get("data/murals.json", function(data){
//     console.log(data)
// });

// AJAX request with Fetch API

// fetch("data/murals.json").then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// });

// Abbreviated Fetch request using arrow functions

// fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// Callback: a function passed as an argument to another function; it can run after another function has finished running

function greeter(greeting, name, displayFunction){
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output){
    $("#output").html(output);
}

greeter("Hola", "David", displayToOutputDiv);


// setTimeout( () => greeter("Aloha", "Jason", displayToOutputDiv), 3000);

                /// or this is the same as the one above it changes the text after 3 seconds
// setTimeout(function(){
//     greeter("Aloha", "Jason", displayToOutputDiv)
// }, 3000);

                // or this is the same as the one above
// setTimeout(greeter, 3000, "Yo", "dude", displayToOutputDiv);



const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

// generateGreeting(greetings, names, displayToOutputDiv);
// setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);






//
// function displayVehicleInfo(info){
//     let html = "";
//     info.forEach((car, index) => {
//         if (!car[12]||!car[9]||!car[14]||!car[13]) {
//             html += '';
//         } else {
//             html += `<p>${index}:${car[12]} ${car[9]} ${car[14]}${car[13]}</p>`;
//         }
//     });
//     $("#output").append(html);
// }
//
// getInfo(displayVehicleInfo);
// $("#output").append(`<p>Who comes first?</p>`);

// const aPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         if (Math.random() > 0.5){
//             resolve("I was fulfilled!");
//         } else {
//             reject("I was rejected!");
//         }
//     }, 3000);
// });

// aPromise.then(value => console.log(value)).catch(error=>console.log(error));
//
//
// const myFetchPromise = fetch("data/murals.json").then(response => {
//         console.log(response.status);
//         console.log(response.headers);
//         console.log(response.url);
//         return response.json();
//     }
// ).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work!"))
//     .finally(()=> console.log("I'm gonna happen no matter what"));
//
// console.log(myFetchPromise);
//
//
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// fetch('https://api.github.com/users/jruedas1', {
//     headers: {
//         'Authorization': 'token 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'
//     }
// }).then( response => response.json())
//     .then( events => console.log(events))
//     .catch( error => console.error(error));

// const trafficCrashesRequest = fetch("https://data.cityofchicago.org/resource/85ca-t3if.json");
// const serviceRequests = fetch("https://data.cityofchicago.org/resource/v6vf-nfxy.json");
//
// Promise.all([trafficCrashesRequest, serviceRequests]).then(function(responses){
//     return Promise.all(responses.map(function(response){
//         return response.json();
//     }));
// }).then(function(data){
//     console.log(data)
//     const crashes = data[0];
//     const serviceRequests = data[1];
//     const crashStreets = crashes.reduce((accumulatorArray, crashObject) =>{
//         accumulatorArray.push(crashObject.street_name);
//         return accumulatorArray;
//     }, []).map(crashStreet => crashStreet.toLowerCase()).map(crashStreet => {
//         return crashStreet.split(" ")[0];
//     });
//     console.log(crashStreets);
//     const serviceRequestStreets = serviceRequests.reduce((accumulatorArray, requestObject) =>{
//         accumulatorArray.push(requestObject.street_name);
//         return accumulatorArray;
//     }, []).map(serviceRequestStreet =>serviceRequestStreet.toLowerCase());
//     console.log(serviceRequestStreets);
//     const streetsWithCrashesRequests = crashStreets.filter(street =>
//         street => serviceRequestStreets.includes(street)
//     );
//     console.log(streetsWithCrashesRequests);
// })
//     .catch(function(error){
//         console.log(error);
//     });





///////////////////////////////////Assignment //////////////////////////////////////////////////////////


//3. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

function getLastCommit(username){
fetch(`https://api.github.com/users/${username}/events/public`, {
    headers: {'Authorization': 'GITHUB_PROMISES_TOKEN'}
}).then( response => response.json())
    .then( username => {
        // console.log(username[0].created_at)
        const dateOfLastPush = new Date(username[0].created_at).toDateString();
        console.log(dateOfLastPush);
        console.log(username[0].payload.commits[0].message)})
        .catch( error => console.error(error));
}


/// jason's method
async function getUserLastCommitAsync(username) {
    try {
        let response = await fetch(`https://api.github.com/usersss/${username}`);
        let events = await response.json();
        console.log(events);
    }
    catch(err) {
        console.log(err);
    }
}