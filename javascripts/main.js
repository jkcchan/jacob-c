function changeActive(){
		$(".visible").fadeOut(0);
		$(".visible").removeClass("visible");
		$(".active").removeClass("active");
};
function resumeFade(){
		$( ".header" ).delay( 200 ).slideDown(1200);
		$(".heading2").fadeIn(1200);
		$( ".summary" ).fadeIn( 2000 );
		$( ".experience" ).fadeIn( 1600 );
		$( ".relevantAssignments" ).fadeIn( 1200 );
		$( ".education" ).fadeIn( 800 );
		$( ".awardsandinterests" ).fadeIn( 400 );
		$(".footer").fadeIn(400);
}
$(document).ready(function(){
	$(".home").addClass("visible");
	$(".home").fadeIn("slow");
	$(".resume-button-alt").click(function(){
		$(".resume-button").click();
	});
	$(".skills-button-alt").click(function(){
		$(".skills-button").click();
	});
	$(".projects-button-alt").click(function(){
		$(".projects-button").click();
	})
	$(".resume-button").click(function(){
		changeActive();
		$(this).addClass("active");
		$(".resume").addClass("visible");
		$(".resume").fadeIn("fast");
		resumeFade();
		$(".footer").mouseenter(function(){
			$(".footer>h3").text("Contact me!");
		});

	});
	$(".skills-button").click(function(){
		changeActive();
		$(this).addClass("active");
		$(".skills").addClass("visible");
		$(".skills").fadeIn("slow");
	});
	$(".navbar-brand").click(function(){
		changeActive();
		$(".home").addClass("visible");
		$(".home").fadeIn("fast");
	});
	$(".projects-button").click(function(){
		changeActive();
		$(this).addClass("active");
		$(".projects").addClass("visible");
		$(".projects").fadeIn("slow");
	});
	$(".misc-button").click(function(){
		changeActive();
		$(this).addClass("active");
		$(".misc").addClass("visible");
		$(".misc").fadeIn("slow");
	});
	$(".contact-button").click(function(){
		changeActive();
		$(this).addClass("active");
		$(".contact").addClass("visible");
		$(".contact").fadeIn("slow");
	});
});
