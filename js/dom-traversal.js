$(function (){

    const listItems = $("li");

        // .each loops through the items and makes it italic
        // you can use listItems since you created a var saying that its li
    $("li").each(function (index, element){
        if (index %2 !== 0) {
            $(this).css("font-style", "italic");
        }
    });


 // The reason we would use .each, is because you can pass a parameter a make a function that would only make the odds italic
 //        $("li").css("font-style", "italic");


    // . first targets the first element in the li and makes it larger
    $( "ul li").first().css("font-size", 'larger');

    // . last targets the last element in the li and makes it underline dotted
    $("li a").last().css("text-decoration", "underline dotted");






});