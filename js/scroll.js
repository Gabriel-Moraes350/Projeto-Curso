$(function(){

	var directory = '/curso%20front%20end/projetos/projeto_5/';
	$('.contatoAbrir a').click(function(){

		location.href=directory+'home?contato';

		
		return false;
		
	});
	checkurl();
	function checkurl(){
		var url = location.href.split('/');
		var curPage = url[url.length-1].split('?');
		

		if(curPage[1] != undefined && curPage[1] == 'contato'){
			$('html, body').animate({scrollTop: $('#contato').offset().top},"slow");
			
			$('.contatoAbrir a').css('color', 'red');
		}
		else{
			$('a[href='+curPage[0]+']').css('color','red');
		}

	}
	
	

});