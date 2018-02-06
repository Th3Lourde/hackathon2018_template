//
//
// $("#animateUp").click(function(){
//     alert("Animate Up");
//     $("#black-menu").animate({height: '10vw'}, 5, 'in-out')
// });
// var animateVar = true
document.getElementById("animateUp").addEventListener("click", function() {
    var elementToSlide = document.getElementById("mymenu");
    document.getElementById("black-menu").classList.toggle("is-active");
    $( "#mymenu" ).fadeToggle( "slow", "linear" );
    // $('li').style
});
