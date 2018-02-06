
jQuery(document).ready(function() {


$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});


	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);

	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});

//    /*---------------------------------------------*
//     * Counter
//     ---------------------------------------------*/

//		$('.static-counter').counterUp({
//			delay: 10,
//			time: 2000
//		});




//<!-- =============================================== -->
//<!-- ========== fancy box ========== -->
//<!-- =============================================== -->



	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 410) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});






//<!-- =============================================== -->
//<!-- ========== owlcarousel team ========== -->
//<!-- =============================================== -->




$(".main_testimonial").owlCarousel({

/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
items : 1,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],

pagination : true,
paginationNumbers: false,
 singleItem:true,

responsive: true,
responsiveRefreshRate : 200,
responsiveBaseWidth: window

});








//<!-- =============================================== -->
//<!-- ========== scrollTop.js ========== -->
//<!-- =============================================== -->

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });




//<!-- =============================================== -->
//<!-- ========== scrolldown.js ========== -->
//<!-- =============================================== -->

$('.scrolldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


//<!-- =============================================== -->
//<!-- ========== bootstrap scrollspy ========== -->
//<!-- =============================================== -->


    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });

//<!-- =============================================== -->
//<!-- ========== navbardown.js ========== -->
//<!-- =============================================== -->

	$('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});



	new WOW().init();

	//$('.portfolio_content').masonry();





$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})

	//$('.counter').counterUp({
	//	delay: 10,
	//	time: 1580
	//});


});



//Google maps starts here


$("a[href='#3a']").on('shown.bs.tab', function(){
	google.maps.event.trigger(map, 'resize');
});

// This function is to change tabs with click of "contact" botton
$(function() {

var activate = false,
		tabLinks = $('.tabs a');
		tabContent = $('.tab-content').children();

tabLinks.eq(0).addClass('active'); // Add active class, could possibly go in markup


tabLinks.bind('click', function(e) {
	e.preventDefault();
	if(activate === true) { // Only do something if button has been clicked
		var target = this.hash,
				el = $(this);

		tabLinks.filter('.active').removeClass('active');
		el.addClass('active');

		tabContent.hide(); // Hide all
		$(target).show(); // Show selected
	}
});

$('button').bind('click', function() {
	activate = true; // Activate tab functionality
	tabLinks.eq(2).trigger('click'); // Trigger a click on the second tab link
	google.maps.event.trigger(map, 'resize'); // this triggers the map to show when changing tabs
});
