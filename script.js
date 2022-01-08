// Cafi Net JavaScript Document
$(function(){
	
	var min_width = 600;
	
	// mobile nav
	$('#menu_button').click(function(){
		if($('#nav').css('margin-left')=='-200px') {
			$('#nav').animate({'margin-left':'0px'},'fast','linear');
		} else {
			$('#nav').animate({'margin-left':'-200px'},'fast','linear');
		}
	});

	$('#nav ul li a').click(function(){
		if($(document).width() < min_width && $('#nav').css('margin-left')=='0px') {
			$('#nav').animate({'margin-left':'-200px'},'fast','linear');
		}
	});
	
	// scroll
	$('a[href^=#]').click(function(){
		var id = $($(this).attr('href')).offset().top;
		$('body,html').animate({scrollTop:id},500,'swing');
		return false;
	});
	
	// pc nav
	if($(document).width() >= min_width) {	
		$(window).scroll(function(){
			if($(this).scrollTop() > 80) {
				$('#nav').stop(true).animate({'top':'0'},'fast','swing');
			} else {
				$('#nav').stop(true).animate({'top':'140'},'fast','swing');
			}
		});
	}
	
});