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

        // this wont work because we are trying to register an event handler with an element that does not exist yet, last function created the button and we tried to use that button

    // $(".will-this-work").on('click', function (){
    //     alert(":(This won't work");
    // })
        // this will work

    $(document).on('click', '.will-this-work', function (){
        alert('oooooooo yeahhhhhhhh');
    })
    // this will work too we created a section on html with id dynamic content
    // delegated event
    // $('#dynamic-content').on('click', '.will-this-work', function (){
    //     alert('oooooooo yeahhhhhhhh');
    // })



    // // this makes it so when we hover it goes to hotpink
    $(".box").hover(function (){
        $(this).css('background-color', 'hotpink');
        },
        // this function makes it so when we hover back it goes back to normal
    function (){
       $(this).css('background-color', 'unset');
    });

        //or
        // if you have a class already in css that has a class on hotpink and it sets the color to hotpink you can use that class also

    // this makes it so when we hover it goes to hotpink
    // $(".box").hover(function (){
    //         $(this).addClass("hotpink");
    //     },
    //     // this function makes it so when we hover back it goes back to normal
    //     function (){
    //         $(this).removeClass("hotpink")
    //     });


    // keydown whenever we pressed a key on the keyboard it alertsn
    $(document).keydown(function (e){
        // alert("you just pressed a key down");
        console.log(e.originalEvent.key);
    })

});