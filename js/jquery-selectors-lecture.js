// the new $(document).ready
// $(function(){
// //      id selector to alter content
//     $("#library").text("jquery makes life easier");  // changes the text in html with id librabry
// //  get reference to content
//     console.log($("#library").text());
// });

// or
$("#library").text("jquery makes life easier");

// or

// $(function(){
//     const refToLibrary = $("#library");            // create a var refToLibrary that has a id of library
// //      id selector to alter content
//     refToLibrary.text("jquery makes life easier");
// //  get reference to content
//     console.log($("#library").text());
// });

// or

// $(function (){
//     const $refToLibrary = $("#library");
//     let li3text = $refToLibrary.text();
//     $refToLibrary.text(li3text + " makes life easier");
// })

// class selector and css method to alter styles
// select classes and add css
// $(".framework").css('border', '1px solid black');

//or
$(".framework").css({
    'border' : '1px solid black',
    'width' : 'fit-content'
});

// type list with chained methods
$("p, li").text("I've taken over. ").css("color", "hotpink");