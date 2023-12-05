/*

Theme Name : Sairoopak Music Academy

//========== INDEX ==========//
1.Whole Script Strict Mode Syntax
2.Preloader JS
3.Wow Animation JS
4.Sticky Header JS
5.Scroll To Top JS 
6.Testimonial Slider JS
7.Gallery Slider JS
8.Why Choose Class JS
9.Toogle Menu Mobile JS
10.Achivement Slider JS

*/

$(document).ready(function ($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    $(window).ready(function(){
		// Preloader JS Start
		$('.preloader').fadeOut();
        $('body').removeClass('fixed');
		 // Preloader JS End
         
		 // Wow Animation JS Start
		 new WOW().init(); 
		 // Wow Animation JS Start
	});

    // Sticky Header JS Start
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('.site-header').addClass('sticky-header');
        }
        else {
            $('.site-header').removeClass('sticky-header');
        }
    });
    // Sticky Header JS End

    // Scroll To Top JS Start
	$('#scrollToTop').on('click', function () {
		$("html, body").animate({ scrollTop: 0 }, 0);
		return false;
	});
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 300) {
			$("#scrollToTop").fadeIn();
		} else {
			$("#scrollToTop").fadeOut();
		}
	});
	// Scroll To Top JS End

    // Testimonial Slider JS Start
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: '<button class="slick-arrow prev-arrow"><i class="fas fa-arrow-left" aria-hidden="true"></i></button>',
	    nextArrow: '<button class="slick-arrow next-arrow"><i class="fas fa-arrow-right" aria-hidden="true"></i></button>',
        rows: 0,
    });
    // Testimonial Slider JS End

    // Gallery Slider JS Start
    $('.gallery-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        rows: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
            },
        ]
    });
    // Gallery Slider JS End

    // Why Choose Class Slider JS Start
    $('.why-choose-class-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        rows: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    // Why Choose Class Slider JS End

    // Toogle Menu Mobile JS Start
	$(".toggle-button").on( 'click', function(){
		$(".main-navigation").toggleClass('toggle-menu');
		$(".white-shadow").fadeToggle();
	});
	$(".main-navigation ul li a").on( 'click', function(){
		$(".main-navigation").removeClass('toggle-menu');
		$(".white-shadow").fadeOut();
	});
	$(".main-navigation ul li.sub-items>a").on( 'click', function(){
		$(".main-navigation").addClass('toggle-menu');
		$(".white-shadow").stop();
	});
	$(".white-shadow").on( 'click', function(){
		$(this).fadeOut();
		$(".main-navigation").removeClass('toggle-menu');
	});
	// Toogle Menu Mobile JS End

    // Why Choose Class Slider JS Start
    $('.instruments-list-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: '<button class="slick-arrow prev-arrow"><i class="fas fa-arrow-left" aria-hidden="true"></i></button>',
	    nextArrow: '<button class="slick-arrow next-arrow"><i class="fas fa-arrow-right" aria-hidden="true"></i></button>',
        rows: 0,
    });
    // Why Choose Class Slider JS End

    // Achivement Slider JS Start
    $('.achivement-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<button class="slick-arrow prev-arrow"><i class="fas fa-arrow-left" aria-hidden="true"></i></button>',
	    nextArrow: '<button class="slick-arrow next-arrow"><i class="fas fa-arrow-right" aria-hidden="true"></i></button>',
        rows: 0,
    });
    // Achivement Slider JS End

});