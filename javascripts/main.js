$(document).ready(function(){

	$( ".header" ).delay( 200 ).slideDown(1200);
	$(".heading2").fadeIn(1200);
	$( ".summary" ).delay( 400 ).fadeIn( 2000 );
	$( ".experience" ).delay( 600 ).fadeIn( 1600 );
	$( ".relevantAssignments" ).delay( 800 ).fadeIn( 1200 );
	$( ".education" ).delay( 1000 ).fadeIn( 800 );
	$( ".awardsandinterests" ).delay( 1200 ).fadeIn( 400 );
	$(".footer").delay(1400).fadeIn(400);
	$(".footer").mouseenter(function(){
		$(".footer>h3").text("Contact me!");
	});
	$(".footer").mouseleave(function(){
		$(".footer>h3").text("Copyright Jacob Chan 2015(c)");
	});
	$(".header").mouseenter(function(){
		$(".header>h1").append("<span>!</span>");
	});

});
