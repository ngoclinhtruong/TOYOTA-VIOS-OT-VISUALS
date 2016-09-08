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

	var winHeight = $(window).height();
	if (winHeight > 650) {
		$('.whole-content').css('overflow-y', 'hidden');
	}

	// Key features
	$('ul.features-tabs li').click(function(){
		var features_id = $(this).attr('data-tab');

		$('ul.features-tabs li').removeClass('current');
		$('.features-content').removeClass('current');

		$(this).addClass('current');
		$("."+features_id).addClass('current');		

	});

})
