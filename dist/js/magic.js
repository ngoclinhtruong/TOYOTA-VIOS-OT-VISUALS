$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');		

	})

	// Key features
	$('ul.features-tabs li').click(function(){
		var features_id = $(this).attr('data-tab');

		$('ul.features-tabs li').removeClass('current');
		$('.features-content').removeClass('current');

		$(this).addClass('current');
		$("."+features_id).addClass('current');		

	})

})