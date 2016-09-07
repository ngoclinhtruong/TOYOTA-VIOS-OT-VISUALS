$(document).ready(function(){

	// Global
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');	

		


		if ($('ul.tabs li').attr('data-tab') == tab_id) {
		    $('ul.tabs li').addClass('current');
		} else {
		    $('ul.tabs li').removeClass('current');
		}

	})

	// Key features
	$('ul.features-tabs li').click(function(){
		var features_id = $(this).attr('data-tab');

		$('ul.features-tabs li').removeClass('current');
		$('.features-content').removeClass('current');

		$(this).addClass('current');
		$("."+features_id).addClass('current');		

	});



	$(".checkbox").addClass("unchecked");
	
	$(".checkbox").click(function(){
	
		if($(this).children("input").attr("checked")){
			// uncheck
			$(this).children("input").attr({checked: ""});
			$(this).removeClass("checked");
			$(this).addClass("unchecked");
		}else{
			// check
			$(this).children("input").attr({checked: "checked"});
			$(this).removeClass("unchecked");
			$(this).addClass("checked");
		}
		
	});

})
