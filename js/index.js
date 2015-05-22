$(function() {
          
	var $slider = $('#da-slider');

	// initialize the slider
	$slider.cslider();

	// initialize the slick
	$('.hard-slide').slick({
	    slidesToShow: 4,
  		slidesToScroll: 4
	});

	$('.has-menu,.has-ul').mouseenter(function(e){
		$this = $(this);
		$(this).children('ul').addClass('active');
	});
	$('.has-menu').mouseleave(function(e){
		$this = $(this);
		$('.has-menu,.has-ul').children('ul').removeClass('active');
	});

	//购买和定制
	$('.hard-list .actions .button').click(function(e){		
		$this = $(this);
		$('.overlay').animate({
			'right':'0'
		});
		if($this.attr('class').match('buy')=='buy'){
			$('#prev-step').fadeOut(0);
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
		$('.succeed-info').fadeOut(0);
		e.preventDefault();
	});

	$('#submit-mul-form').click(function(e){
		$('.succeed-info').fadeIn();
	});

	$('#next-step').click(function(e){
		$('.form.buy').fadeIn();
		$('#prev-step').fadeIn();
		$('.form.buy').siblings('form').fadeOut(0);
	});

	$('#prev-step').click(function(e){
		$('.form.diy').fadeIn();
		$('.form.diy').siblings('form').fadeOut(0);
	});
	//select
	jQuery.fn.select = function(options){ 
        return this.each(function(){ 
            var $this = $(this); 
            var $shows = $this.find(".shows"); 
            var $selectOption = $this.find(".selectOption"); 
            var $el = $this.find("ul > li"); 
                                       
            $this.click(function(e){ 
                $(this).toggleClass("zIndex active"); 
                $(this).children("ul").toggleClass("dis"); 
                e.stopPropagation(); 
            }); 
               
            $el.bind("click",function(){ 
                var $this_ = $(this); 
                    
                $this.find("span").removeClass("gray"); 
                $this_.parent().parent().find(".selectOption").text($this_.text()); 
            }); 
               
            $("body").bind("click",function(){ 
                $this.removeClass("zIndex"); 
                $this.find("ul").removeClass("dis");     
            }) 
               
        //eahc End   
        }); 
           
    } 
    $(".selectContainer").select();  

    //if display the left-aside
    $(window).scroll(function(){
    	var winHeight = $(window).height()-50;  
    	var toTop = $(document).scrollTop();
    	if(toTop > winHeight){
    		$('.left-aside').fadeIn();
    	}else{
    		$('.left-aside').fadeOut();
    	}

    	var pro1 = $('#product1').offset().top,
    		pro2 = $('#product2').offset().top,
    		pro3 = $('#product3').offset().top,
    		pro4 = $('#product4').offset().top;

    	if(toTop < pro1){
    		$('.left-aside li').eq(0).addClass("cur-panel").siblings().removeClass("cur-panel");
    		location.hash = '#index';
    	}else if(toTop < pro2){
    		$('.left-aside li').eq(1).addClass("cur-panel").siblings().removeClass("cur-panel");
    		location.hash = '#product1';
    	}else if(toTop < pro3){
    		$('.left-aside li').eq(2).addClass("cur-panel").siblings().removeClass("cur-panel");
    		location.hash = '#product2';
    	}else if(toTop < pro4){
    		$('.left-aside li').eq(3).addClass("cur-panel").siblings().removeClass("cur-panel");
    		location.hash = '#product3';
    	}else{
    		$('.left-aside li').eq(4).addClass("cur-panel").siblings().removeClass("cur-panel");
    		location.hash = '#product4';
    	}
    	
    });

    //aside
    $('.left-aside a').click(function(e){

		var href = $(this).attr("href");
		var pos = $(href).offset().top;

   		$(this).parent('li')
      		.addClass("cur-panel")
      		.siblings().removeClass("cur-panel");

    	$("html,body").animate({scrollTop: pos}, 1000,function(){
			location.hash = href;
		});
		e.preventDefault();

	});
});