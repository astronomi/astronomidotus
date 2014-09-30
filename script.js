// Carousel
jQuery(document).ready(function($) {
	
	// Responsive Carousel
	$('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 900) {
            width = width / 4;
        } else if (width > 600) {
            width = width / 3;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
	
	// Slide
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });
	
	// Controls
	$('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
	
});




// Fit Vids

// Audio Player
jQuery(document).ready(function($) {
    $("#audioplayer").fitVids();
});

// Video Player
jQuery(document).ready(function($) {
    $("#videoplayer").fitVids();
});

// Playlist Player
jQuery(document).ready(function($) {
    $("#layout_player").fitVids();
});

// Iframed Videos
jQuery(document).ready(function($) {
    $("#videoplayer-framed").fitVids();
});

// Dynamic Grid Slider
(function ($, undefined) {
	jQuery(document).ready(function($) {
		$('.grid').dynamicGrid({
			'src' : $('#grid1'),
			'cols' : 4,
			'min_rows' : 1,
			'max_rows' : 1,
			'height' : 400,
			'interval' : 2500,
			'random_heights' : false
		});
	});
}(jQuery));


// Flex Slider
jQuery(document).ready(function($) {
  $('.flexslider').flexslider({
    animation: "fade",
	animationLoop: true,
	directionNav: true,
	pauseOnHover: true,
  });
});


// Easy Tabs
jQuery(document).ready(function($) {
	$('#tab-container').easytabs();
});


// Slick Nav for Top bar
jQuery(document).ready(function($) {
	$('.top-nav').slicknav({
		prependTo:'#responsive-top-nav'
	});
});

// Slick Nav for Main Menu
jQuery(document).ready(function($) {
	$('.sf-menu').slicknav({
		prependTo:'#sf-responsive'
	});
});

// Cute Slider
var slider = new Cute.Slider();
slider.setup("slider" , "wrapper");
