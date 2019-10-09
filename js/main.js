$(document).ready(function(){
	"use strict";
	//start nicescroll
	$('html').niceScroll({

		cursorcolor: '#ec1c23',
		cursorwidth: 15,
		cursorborderradius: 2,
		cursorborder: 'transparent',
		zindex : 55
	});

	///slider Height
	var wHeight = $(window).height(),
			upperHeight = $('.upper-bar').innerHeight(),
			navbarHeight = $('.navbar').innerHeight();

	$('.slider,  .carousel-itm').height(wHeight - (upperHeight + navbarHeight));

	$(window).on("resize", function(){
		
		var wHeight = $(window).height(),
			upperHeight = $('.upper-bar').innerHeight(),
			navbarHeight = $('.navbar').innerHeight(); 

		$('.slider,  .carousel-itm').height(wHeight - (upperHeight + navbarHeight));

	})

	/////Sync links with section
	$('.navbar ul li a').on("click", function(event){
		event.preventDefault();
		$('html, body').animate({

			scrollTop : $($(this).data('scroll')).offset().top

		},2000);
	})

	///slide-up
	$(window).on('scroll', function(){
		if ($(window).scrollTop() >= 700){
			$('.slide-up-button>a').fadeIn(300);
		}else{
			$('.slide-up-button>a').fadeOut(300);
		}
	})

	$('.slide-up-button>a').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop : 0
		},2000);
	})
	///featured Work
	$('.shuffle-img .col-md').show();
	$('.featured-work ul li , .navbar ul li ').on('click', function(){

		$(this).addClass('active').siblings().removeClass('active');

		if ($(this).data('class') === ".all"){

			$('.shuffle-img .col-md').show();

		}else {

			$('.shuffle-img .col-md').hide();
			
			$($(this).data('class')).parent().show();
		}
	})
//////

})
