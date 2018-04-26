

$('.arrow').click(function() {
  window.location = 'index.html';
})

$('#mobile-contact').click(function(){
  window.location = 'contact.html'
})

$( document ).ready(function() {
  $("li").removeClass("active");
  $('#coffees').addClass("active");
  $('#coffees').css("text-decoration-color", "#fee9b1");
  // $('#coffies').css("text-decoration", "underline");
  // $('#coffies').css("text-decoration-color", "#fee9b1");
})

$('#coffees').click(function(){
  $("li").removeClass("active");
  $(this).addClass("active");
  $(this).css("text-decoration-color", "#fee9b1");
  $('.menu-head').html("<h1>Type of Coffee.</h1>");
  $('.foodName').replaceWith("<p class='foodName'>Coffee.</p>");
  // alert("Show cofee");
})


$('#cookies').click(function(){
  $("li").removeClass("active");
  $(this).addClass("active");
  $(this).css("text-decoration-color", "#fee9b1");
  $('.menu-head').html("<h1>Type of Cookies.</h1>");
  $('.foodName').replaceWith("<p class='foodName'>Cookies</p>");

  // alert("Show cookies");
})


$('#cakes').click(function(){
  $("li").removeClass("active");
  $(this).addClass("active");
  $(this).css("text-decoration-color", "#fee9b1");
  $('.menu-head').html("<h1>Type of Cake.</h1>");
  $('.foodName').html("<p class='foodName'>Cakes.</p>");
})


$('#burritos').click(function(){
  $("li").removeClass("active");
  $(this).addClass("active");
  $(this).css("text-decoration-color", "#fee9b1");
  $('.menu-head').html("<h1>Type of Burritos.</h1>");
  $('.foodName').html("<p class='foodName'>Burritos.</p>");
  // alert("Show burritos");
})






// PlaceHolder
