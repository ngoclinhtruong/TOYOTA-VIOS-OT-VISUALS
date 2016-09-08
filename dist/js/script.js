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


	// Home
	var winHeight  = $(window).height();
	var container = $('.home-screen .container').height();
	var clientHeight  = winHeight - 120 - 60;

	var margin = (clientHeight - container)/2;

	$('.home-screen .container').css('margin-top', margin + 'px');

	
	// Key features
	$('ul.features-tabs li').click(function(){
		var features_id = $(this).attr('data-tab');

		$('ul.features-tabs li').removeClass('current');
		$('.features-content').removeClass('current');

		$(this).addClass('current');
		$("."+features_id).addClass('current');		

	});

	$('.bg-red').css('min-height', clientHeight + 'px');


})
