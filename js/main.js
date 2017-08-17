$(document).ready(function(){
	
	var ww = $(window).width();
	var homesliderheight = ww / 2.95;
	$("#introhome").css("height",homesliderheight);
	$(".headerimg").css("height",homesliderheight);	
	
});

$( window ).resize(function() {
	
	var ww = $(window).width();
	var homesliderheight = ww / 2.95;
	$("#introhome").css("height",homesliderheight);
	$(".headerimg").css("height",homesliderheight);
	
});