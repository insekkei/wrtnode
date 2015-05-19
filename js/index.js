$(function() {
          
	var $slider = $('#da-slider');

	// initialize the slider
	$slider.cslider();

	// initialize the slick
	$('.hard-slide').slick({
	    slidesToShow: 4,
  		slidesToScroll: 4
	});

	$('.has-menu').click(function(e){
		$this = $(this);
		$(this).children('ul').toggleClass('active');
	});
	$('.has-ul').hover(function(e){
		$this = $(this);
		$(this).children('ul').addClass('active');
	});

	//购买和定制
	$('.hard-list .actions .button').click(function(e){
		$('.overlay').animate({
			'right':'0'
		});
		e.preventDefault();
	});

	$('.close').click(function(e){
		$(this).parent('.overlay').animate({
			'right':'-110%'
		});
		e.preventDefault();
	});
});