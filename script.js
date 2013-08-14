//button should fade when mouse moves over it
//and when it moves out of it.
$(document).ready(function(){
	$('div').mouseenter(function(){
		$('#button').fadeTo('slow', 1);
	});

	$('div').mouseleave(function(){
		$('#button').fadeTo('slow', 0.5);
	});
});

//want the top navigation bar to slide down when
//first entering the site.
$(document).ready(function() {
	$('#navbar').slideDown('slow');
});