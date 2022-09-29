/// lecture
// syntax for methods:
// do not use arrow functions in methods, they have no *this* binding

// const Test = {
//     name: "Javier",
//     oldSyntax: function(){
//         console.log("This works");
//     },
//     outputName: ()=>{
//         console.log(this.name);
//     },
//     output(){
//         console.log("Does this work?");
//     }
// }
//
// Test.oldSyntax();
// Test.output();
// Test.outputName();
//
// let listItems = document.getElementsByTagName('li');
// // this doesn't work: can't use forEach on a nodeList
// // listItems.forEach(listItem => console.log(listItem));
//
// for (let listItem of listItems){
//     console.log(listItem);
// }
//
// console.log(document.getElementsByTagName('ul')[0]);
//
// document.getElementsByTagName("li")[2].nextElementSibling.innerHTML = "Change anything, the DOM belongs to you!";


//     Assignment
/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know - done
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable - done
// declared as `const`
const name = 'David';
const email = 'david@codeup.com';
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: rewrite the object literal using object property shorthand - done
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations - done
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions - done
// users.forEach(function(user) {
//     return emails.push(user.email);
// });


users.forEach((user) => emails.push(user.email));
console.log(emails);


// users.forEach(function(user) {
//     return names.push(user.name);
// });

users.forEach((user) => names.push(user.name));
console.log(names);


// TODO: replace `var` with `let` in the following declaration - done
let developers = [];
// users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
users.forEach(function({name,email,languages}) {
    console.log(developers)





    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    console.log(`${name}'s email is ${email} ${name} knows ${languages}`);
    developers.push(`${name}'s email is ${email} ${name} knows ${languages}`);


});

// TODO: Use `let` for the following variable
let list = '';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let listItems of developers) {

    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + developer + '</li>';
    list += `<ul> <li>${listItems}</li> </ul>`;
    console.log(listItems)
};
// list += '</ul>';
$("#output").append(list);
