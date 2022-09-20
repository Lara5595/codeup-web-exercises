// $(document).ready(function (){  this is for when you put your scrip tags in the header
    //code goes here
// })

 jQuery("h3").click(function (){                    //both buttons in html have a h3
     $(this).next().slideToggle(500);              // .next selects the next element that next in this case the div
})

//or
// $("h3").click(function (){ //both buttons in html have a h3
//     $(this).next().slideToggle(500);              // .next selects the next element that next in this case the div
// })

// or
//function init () {
  //  jQuery("h3").click(function () {
    //    $(this).next().slideToggle(500);    // this is the vanilla js version of jquery
//    });
// }
// window.onload = init;