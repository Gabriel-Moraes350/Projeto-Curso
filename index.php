<!DOCTYPE html>
<html>
<head>
	<title>Projeto 5</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<header class="header">
		<div class="container">
			<img src="img/logo.jpg" alt="logo">
		
		<nav class="menu desktop">
			<ul>
				<li><a  href="home">Home</a></li>
				<li><a href="venda">Venda</a></li>
				<li  class="contatoAbrir"><a href="contato">Contato</a></li>
				<li><a href="sobre">Sobre</a></li>
			</ul>
		</nav>
		<nav class="menu mobile">
			<ul>
				<li><a href="home">Home</a></li>
				<li><a href="venda">Venda</a></li>
				<li class="contatoAbrir"><a href="contato">Contato</a></li>
				<li><a href="sobre">Sobre</a></li>
			</ul>
		</nav>
		<div class="clear"></div>
		</div>
	</header><!--header-->
<?php

	if(isset($_GET['url'])){

		if(file_exists($_GET['url'].'.html')){
			include($_GET['url'].'.html');
		}else{
			include('404.html');
		}
	}else{
		include('home.html');
		//echo "<script>location.href = '/C:/Users/Gabriel%20Moraes/Desktop/Projeto-Curso/'</script>;";
	

	}
?>
	<footer>
	<p>Todos os direitos reservados a RM veiculos</p>
		<nav class="menu desktop">
			<ul>
				<li><a  href="home">Home</a></li>
				<li><a href="venda">Venda</a></li>
				<li class="contatoAbrir"><a href="contato">Contato</a></li>
				<li><a href="sobre">Sobre</a></li>
			</ul>
		</nav>
		
		<div class="clear"></div>
	</footer>
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/menu-resposivo.js"></script>
	<script src="js/scroll.js"></script>
</body>
</html>