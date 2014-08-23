var fallbackImg = '/media/img/timelapseFallback.jpg';

var mobileWidth = 700,
	$smallClass = 'small';

/*  ================================================================================
 CHECKS AND STUFF
 ================================================================================  */

function headerType(){
	if ($('html').hasClass('touch') || $('html').hasClass('no-video') || $('html').hasClass($smallClass) ) {
		$("#timelapse").addClass('fallback');
	}
	else{
		$("#timelapse").removeClass('fallback');
	}
}

function onResize() {
	headerType();

	var windowWidth = $(window).width();
	if (windowWidth <= mobileWidth) {
		$('html').addClass($smallClass);
	}
	else {
		$('html').removeClass($smallClass);
	}
}





$(document).ready(function() {
	onResize();
	headerType();
});

$(window).resize(onResize);
