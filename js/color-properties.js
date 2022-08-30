const htmlBody = document.querySelector('body');

const randomClickfunction = function () {
    const colors = ["#8ec0de", "lightred", "lightblue",  "beige", "orange"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

}