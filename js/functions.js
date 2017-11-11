$(function(){
	//Pesquisa


	var currentValue = 0;
	var isDrag = false;
	var precoAtual = 0;
	var precoMaximo =70000;
	
	$('.search1-point').on('mousedown touchstart',function(e){
		
		isDrag = true;
		disableAutoSelect();

	
		
	});
	$(document).on('mouseup touchend',function(){
		
		isDrag = false;
		enableAutoSelect();
		
	
		
	});


	/*$('.search1-content').mousemove(function(e){
		
		if(isDrag){
			//pageX é a quantidade no x que o elemento se moveu 
			//elBase é o elemento pai
			var elBase = $(this);
			var mouseX = e.pageX - elBase.offset().left;
			if(mouseX <0 )
				mouseX = 0;
			if(mouseX > elBase.width())
				mouseX = elBase.width();
			currentValue = (mouseX / elBase.width()) * 100;
			$('.search1-avanco').css('width', currentValue + '%');
			$('.search1-point').css('left', currentValue + '%');


			//ajustar o formato do precoAtual
			
			precoAtual = (currentValue*precoMaximo)/100;
			precoAtual = formataPreco(precoAtual);
			$('.preco-atual').html('R$'+precoAtual);
		}
	});*/
	$('.search1-content').on('mousemove touchmove',function(e){
		
		if(isDrag){
			//pageX é a quantidade no x que o elemento se moveu 
			//elBase é o elemento pai
			var elBase = $(this);
			//touch.pageX - elBase.offset().left 
			//var touch = e.originalEvent.touches[0];
			var touch = undefined;
			 if (e.originalEvent.touches)
    			touch = e.originalEvent.touches[0];
			var mouseX = (e.pageX - elBase.offset().left) || (touch.pageX - elBase.offset().left);
			if(mouseX <0 )
				mouseX = 0;
			if(mouseX > elBase.width())
				mouseX = elBase.width();
			currentValue = (mouseX / elBase.width()) * 100;
			$('.search1-avanco').css('width', currentValue + '%');
			$('.search1-point').css('left', currentValue + '%');


			//ajustar o formato do precoAtual
			
			precoAtual = (currentValue*precoMaximo)/100;
			precoAtual = formataPreco(precoAtual);
			$('.preco-atual').html('R$'+precoAtual);

			e.preventDefault();
		}
	});


	function formataPreco(precoAtual){
		//pega so as duas primerias casas decimais
		precoAtual = precoAtual.toFixed(2);
	//separa em array depois do .
		var arrPreco = precoAtual.split('.');
		var novo ;
		
		if(arrPreco[0] < 1000){
			novo = arrPreco[0]+','+arrPreco[1];
		}
		else if(arrPreco[0]<10000){
			novo = arrPreco[0][0]+'.'+arrPreco[0].substr(1,arrPreco[0].length)+','+arrPreco[1];
		}
		else{
			novo = arrPreco[0][0] + arrPreco[0][1]+'.'+arrPreco[0].substr(2,arrPreco[0].length)+','+arrPreco[1];
		}
		
		return novo;
		
	}


//para naão bugar o arraste
	function disableAutoSelect(){
		$('body').css('user-select', 'none');
		$('body').css('-webkit-user-select', 'none');
		$('body').css('-moz-user-select', 'none');
		$('body').css('-ms-user-select', 'none');
		$('body').css('-o-user-select', 'none');
	}
	function enableAutoSelect(){
		$('body').css('user-select', 'auto');
		$('body').css('-webkit-user-select', 'auto');
		$('body').css('-moz-user-select', 'auto');
		$('body').css('-ms-user-select', 'auto');
		$('body').css('-o-user-select', 'auto');
	}





	/*
	Terminada a pagina de venda!!

	agora venda-detalhes
	*/

	// Inicio slider !!!!!!!!


	var imgShow = 3;
	//math.ceil arrendonda pro proximo inteiro positivo, a funcao nada mais é do que pra saber quantos avancos poderemos dar
	// -1 porque se inicia em 0
	var maxIndex = Math.ceil($('.destaque-wraper-single').length/3)-1;
	var curIndex = 0;

	initSlider();
	navigateSlider();
	selectImg();
	function initSlider(){
		var amt = $('.destaque-wraper-single').length * 33.3;
		
		var elScroll = $('.destaque-content-carros');
		var elSingle = $('.destaque-wraper-single');
		elScroll.css('width', amt + '%');
		elSingle.css('width', 33.3*(100/amt) +'%');
	
	}
	function navigateSlider(){
		$('.arrowright').click(function(){
			if(curIndex < maxIndex){
				curIndex++;
				var offS = $('.destaque-wraper-single').eq(curIndex*3).offset().left - $('.destaque-content-carros').offset().left;
				$('.secundario-wraper').animate({'scrollLeft':offS});
			}
			else{
				//alert("chegamos no limite");
			}

		});
		$('.arrowleft').click(function(){
			if(curIndex > 0){
				curIndex--;
				//temos que subtrair a distancia da pagina ate o elemento pai
				var offS = $('.destaque-wraper-single').eq(curIndex*3).offset().left - $('.destaque-content-carros').offset().left;
				$('.secundario-wraper').animate({'scrollLeft':offS});
			}
			else{
				//alert("chegamos no limite");
			}

		});
	}





	//manter fundo na imagem clicada e trocar de imagem
	function selectImg(){
		$('.destaque-wraper-single').click(function(){
			$('.destaque-wraper-single').css('background-color', 'transparent');
			$(this).css('background-color', '#ccc');
			var img = $(this).find('.carro1').css('background-image');
			$('.veiculo-principal').css('background-image', img);
		});
		//simula um click
		$('.destaque-wraper-single').eq(0).click();
	}


	//navegacao nos depoimentos
	var maxDepoimentos = ($('.half2 p').length) -1;

	var curDepoimento = 0;
	initDepoimento();
	navegaDepoimentos();
	function initDepoimento(){

		$('.half2 p').hide();
		$('.half2 p').eq(0).show();

	}
	function navegaDepoimentos(){
		$('.seta1').click(function(){
			curDepoimento--;
			if(curDepoimento < 0)
				curDepoimento = 0;
			$('.half2 p').hide();
			$('.half2 p').eq(curDepoimento).show();
		});
		$('.seta2').click(function(){
			curDepoimento++;
			if(curDepoimento > maxDepoimentos)
				curDepoimento = 0;
			$('.half2 p').hide();
			$('.half2 p').eq(curDepoimento).show();
		});
	}

});
