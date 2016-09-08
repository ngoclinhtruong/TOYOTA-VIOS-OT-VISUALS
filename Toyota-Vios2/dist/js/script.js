$(document).ready(function(){

	// Global
	var tabs = $('.tabs');
	var tabsChildren = tabs.find('li');
	var tabContent = $('.tab-content');

	tabsChildren.click(function(){
		var tabId = $(this).attr('data-tab');
    var tabIndex = $(this).index();
		tabsChildren.removeClass('current');
		tabContent.removeClass('current');
    
    tabs.each(function(index, tab) {
      var targetTab = $(tab).find('li')[tabIndex];
      $(targetTab).addClass('current');
    });
		$("#"+tabId).addClass('current');

	});


	
	var winHeight  = $(window).height();
	var container = $('.container').height();
	var clientHeight  = winHeight - 120 - 60;

	var margin = (clientHeight - container)/2;

	$('.container').css('margin-top', margin + 'px');

	//if (winHeight > 650) {
		//$('.body-content').css('overflow-y', 'hidden');
	//}

	

	// Key features
	$('ul.features-tabs li').click(function(){
		var features_id = $(this).attr('data-tab');

		$('ul.features-tabs li').removeClass('current');
		$('.features-content').removeClass('current');

		$(this).addClass('current');
		$("."+features_id).addClass('current');		

	});

})
