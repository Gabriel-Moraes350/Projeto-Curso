$(function(){
	$('body').click(function(){
		$('.mobile ul').slideUp('slow');
	})
	$('.mobile').click(function(e) {
		e.stopPropagation();
		$(this).find('ul').slideToggle();
	});
	$('.mobile ul li').click(function(){
		var atte = $(this).find('a').attr('href');
		window.location.href = atte;
	});
});