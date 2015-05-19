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
		$this = $(this);
		$('.overlay').animate({
			'right':'0'
		});
		if($this.attr('class').match('buy')=='buy'){
			$('.form.buy').fadeIn();
			$('.form.buy').siblings('form').fadeOut(0);
		}
		if($this.attr('class').match('diy')=='diy'){
			$('.form.diy').fadeIn();
			$('.form.diy').siblings('form').fadeOut(0);
		}
		
		e.preventDefault();
	});

	$('.close,.sure').click(function(e){
		$('.overlay').animate({
			'right':'-110%'
		});
		$('.succeed-info').fadeOut();
		e.preventDefault();
	});

	$('#submit-mul-form').click(function(e){
		$('.succeed-info').fadeIn();
	});
});