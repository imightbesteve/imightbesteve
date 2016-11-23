$(document).ready(function() {
	$('.opnbtn').click(function() { 
		console.log('button is clicked');
	    $(".before").delay(380).fadeOut();
	    $(".entry-button").delay(380).fadeOut();
	    $(".after").delay(800).fadeIn();
	  });
	$('.carousel').carousel({
	   interval: 0
	})
});

