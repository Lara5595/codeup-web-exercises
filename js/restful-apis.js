// API - Application Programming Interface
// a set of rules defining how applications and/or devices can connect to each other and communicate with one another.

// REST means representational state transfer.
// A pattern of design principles for APIs
// REST APIs communicate via HTTP request

// In a REST API, communication via HTTP request is used to perform the sandard set of actions called CRUD
// Create, Read, Update, Delete

// JSON Javascript Object Notation
// is not mandatory but is popular because it is both human and machine-readable

// https://glitch.com/amused-typical-skunk

// The R in CRUD: READ
// Created two variables so we wont be using the whole urls

const booksURL = "https://tender-brick-bowler.glitch.me/books"
const moviesURL = "https://tender-brick-bowler.glitch.me/movies"

function getMovies() {
    fetch(moviesURL)
        .then(resp => resp.json()).then(data=>console.log(data));
}

getMovies();

// The C in CRUD: CREATE

const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks() {
    fetch(booksURL).then(resp => resp.json()).then(data=>console.log(data));
}

getBooks();

// fetch(booksURL, postOptions).then(getBooks);

// The U in CRUD: Updating with PUT and PATCH request
// We'll use PUT to replace the entire content
// We'll use PATCH to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}
// This select "id": 4
// THis will modify
// fetch(booksURL + "/4", patchOptions).then(getBooks);

modification = {
    title: "Eleanor of Aquitaine and the Four Kings",
    author: {
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}
// This will modify
// fetch(booksURL + "/1", putOptions).then(getBooks);

// THE D IN CRUD -- Delete

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}
// This will modify
// fetch(booksURL + '/1', deleteOptions).then(getBooks);





