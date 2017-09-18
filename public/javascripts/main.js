/**/

jQuery( document ).ready(function() {
		
	
		var	steps = jQuery(".step");
		
		next.bind("click", function() { 
			jQuery.each( steps, function( i ) {
				if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
					jQuery(steps[i]).addClass('current');
					jQuery(steps[i - 1]).removeClass('current').addClass('done');
					return false;
				}
			})		
		});
		back.bind("click", function() { 
			jQuery.each( steps, function( i ) {
				if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
					jQuery(steps[i + 1]).removeClass('current');
					jQuery(steps[i]).removeClass('done').addClass('current');
					return false;
				}
			})		
		});

		$("#start_date").datepicker({ 
		        autoclose: true, 
		        todayHighlight: true
		  }).datepicker('update', new Date());

		  $("#due_date").datepicker({ 
		        autoclose: true, 
		        todayHighlight: true
		  }).datepicker('update', new Date());

	})