$(document).ready(function(){
	(function ($) {

	  $('.model-item').click( function() {
	  	var $filterName = ($(this).data('model'))
	  	var $filtered = $('[data-model-target=' + $filterName + ']')
	  	var $allTargets = $('[data-model-target]')
			
			$(this).addClass('active');
	  	$(this).siblings().removeClass('active');
	  	$allTargets.hide();
	  	$filtered.show();

		});

		var owlMobile = function() {
			if ($(window).width() < 640) {
		    $('.models-wrap').owlCarousel({
		  		items:1,
		  		loop:false,
		  		nav:false,
		  		dot:false,
		  		stagePadding:20,
		  		margin:20
		    });
			}
		};

		$(window).resize(function() {
		  owlMobile();
		});

		owlMobile();

	})(jQuery);
});
