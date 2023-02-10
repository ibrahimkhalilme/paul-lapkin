$(document).ready(function(){
	$('.menu-bar').hide();
	$('#header .navbar .menu-area svg').click(function(){
		$('#header .menu-bar').show();
	});
	
	$('.close-item .close svg').click(function(){
		$('#header .menu-bar').hide();
	});
	
	$('.menu-bar .menu-item ul li a').click(function(){
		$('#header .menu-bar').hide();
	});
	
	// Form Input
	$('.contact-grid-item form textarea').click(function(){
		$('.contact-grid-item form textarea').css({border: '.1rem solid #ff2b4a'});
	});
	$('.contact-grid-item form input, .nested-grid-item').click(function(){
		$('.contact-grid-item form textarea').css({border: '.1rem solid #fff'});
	});
});

// Mixitup

var mixer = mixitup('.photo-grid');
