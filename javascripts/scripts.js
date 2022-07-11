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
		  		dots:true,
		  		stagePadding:20,
		  		margin:20
		    });
			}
		};

		$(window).resize(function() {
		  owlMobile();
		});

		owlMobile();

		$('.owl-associates').owlCarousel({
			center:true,
  		items:1,
  		loop:false,
  		nav:true,
  		dots:false,
  		margin:30
    });

    $('.owl-clients').owlCarousel({
			center:true,
			autoplay:true,
			items:7,
  		loop:true,
  		nav:false,
  		dots:true,
  		margin:40,
	    0 : {
        items:1
	    },
	    640 : {
        items:7
	    }
    });

	})(jQuery);
});
