'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

$(function() {
	$('.js-bt-show').on('click', function(){
		var show = '.'+$(this).data('show');
		$('.js-bt-show.active').removeClass('active');
		$('.js-block-show .all').hide();
		$('.js-block-show '+show).show();
		$(this).addClass('active');
	});
	var headerScroll = $('.header').offset().top + 30;

  	$('.js-slider-init').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		variableWidth: true,
		slidesToScroll: 3,
		prevArrow: '#js-slider-prev',
		nextArrow: '#js-slider-next',
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 801,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				variableWidth: false,
		      }
		    }
		]
	});

		// asNavFor: '.slider-for',
	$('.sliderblog-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.sliderblog',
		vertical: true,
		fade: true,
	});	
	$('.sliderblog').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.sliderblog-one',
		vertical: true,
		focusOnSelect: true,
		prevArrow: '#js-slider2-prev',
		nextArrow: '#js-slider2-next',
		responsive: [
		    {
		      breakpoint: 801,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        vertical: false,
		      }
		    }
		]

	});	

	$(document).bind('scroll',function(){
		if($(document).scrollTop() >= headerScroll){
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	}).triggerHandler('scroll');	

    // $('.js-scroll-anchor').on('click', function(e) {
    //     e.preventDefault();
    //     var changePosition = 100;
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top - changePosition
    //     }, 500);
    //     $('.collapse.in').removeClass('in');
    // });

    $('.fancybox').fancybox();

	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});


});


//anchors function
var sectionNames = [];
var sectionPositions = [];

$('.js-section').each(function() {
    var tempInfo = {};
    // console.log($(this));
    sectionNames.push($(this).attr('id'));
    sectionPositions.push($(this).offset().top)
        // tempInfo.name = $(this).attr('id');
        // tempInfo.pos = $(this).offset().top;
        // sections.push(tempInfo)
});

// console.log(sections);

var anchors = (function() {
    //bind events
    $(window).on('scroll', function() {
        var windowPosition = $(window).scrollTop() + 300;
        if (($('body').outerHeight() - $(window).scrollTop()) < 1300) {
        console.log('sectionPositions.length');
            $('.anchors__link').removeClass('active');
            $('.anchors__link').eq(sectionPositions.length - 1).addClass('active');
            return false;
        }
        console.log('scroll');
        sectionPositions.forEach(function(value, key) {
            if (windowPosition > value && windowPosition < sectionPositions[key + 1]) {
                $('.anchors__link').removeClass('active');
                $('.anchors__link').eq(key).addClass('active');
            }
        });
    });

    $('.js-scroll-anchor').on('click', function(e) {
        e.preventDefault();
        var changePosition = 100;
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - changePosition
        }, 500);
        $('.collapse.in').removeClass('in');
    });
})();

var map;
function initMap() {
	var myLatLng = {lat: 51.5285582, lng: -0.2416797};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		scrollwheel: false,
		center: {lat: 51.5285582, lng: -0.2416797},  // Brooklyn.
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP]
		}
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Камуфжяжи.Урк'
	});		  

	// map.mapTypes.set(customMapTypeId, customMapType);
}