$(document).ready(function(){

	$( ".header" ).delay( 200 ).slideDown(1200);
	$(".heading2").fadeIn(1200);
	$( ".summary" ).fadeIn( 2000 );
	$( ".experience" ).fadeIn( 1600 );
	$( ".relevantAssignments" ).fadeIn( 1200 );
	$( ".education" ).fadeIn( 800 );
	$( ".awardsandinterests" ).fadeIn( 400 );
	$(".footer").fadeIn(400);
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
