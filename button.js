$(document).ready(function(){
	$('div').mouseenter(function(){
		$('#button').fadeTo('fast', 1);
	});

	$('div').mouseleave(function(){
		$('#button').fadeTo('fast', 0.5);
	});
});