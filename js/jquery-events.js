$(function (){       //    <---  doc.ready


    // event listener
    $("#clickMe").on("click", function (){
       alert('yo');
    });


    // create an element
    $("#create-an-element").on('click', function (){
        // after the button the following html will be created which is a button
       $(this).after("<button class='will-this-work'>Click Me</button>")
    });


    $(".will-this-work").on('click', function (){
        alert(":(This won't work");
    })




});