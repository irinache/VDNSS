<template>
	<div class="block statistics">
		<ul>
			<li>
				<div class="icon clients">
					
				</div>
				<h1 class="counter">
				{{clients}}
				</h1>
				<p>
					Довольных<br>клиентов
				</p>
			</li>
			<li>
				<div class="icon years">
					
				</div>
				<h1 class="counter">
				{{years}}
				</h1>
				<p >
					Лет<br>на рынке
				</p>
			</li>
			<li>
				<div class="icon tasks">
					
				</div>
				<h1 class="counter">
				{{tasks}}
				</h1>
				<p>
					Выполнено<br>монтажных работ
				</p>
			</li>
			<li>
				<div class="icon houses">
					
				</div>
				<h1 class="counter">
				{{houses}}
				</h1>
				<p>
					Объектов<br>под охраной
				</p>
			</li>			
		</ul>
	</div>
</template>

<script>

	export default {
	data(){
		return{
			clients: 3085,
			years: 10,
			tasks: 4534,
			houses: 5447
		}
	},  		
	mounted() {
		$('.counter').counterUp({
		  delay: 10,
		  time: 2000
		});
		$('.counter').addClass('animated fadeInDownBig');
		$('h3').addClass('animated fadeIn');
	}
}

  	
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

	.statistics{
		background-image: url("../assets/images/stat_bg.png");
		//height: 350px;
	}
	li{		
		width: 15%;
		height:250px;
		display:inline-block;
		padding: 30px;
		border-left: white 1px solid;
		vertical-align: middle;
	}

	li:first-child {
 		border: none;
 	}
	h1{
	  text-align: center;
	  color: white;
	  font-size: 40pt;
	  font-family: 'Roboto', serif;
	  margin-bottom: 0;
	  margin-top: 15px;
	}
	p{
		color: white;
		font-family: 'Roboto', serif;
		font-size: 16pt;
	}
	.icon{
		height: 100px;
	    width: 100px;	   
	    background-position: center;
	    background-size: contain;
	    background-repeat: no-repeat;
	    left:0;
	    right: 0;
	    margin: auto;
	}
	.clients{
 		background-image: url("../assets/images/clients.png");
	}
	.years{
 		background-image: url("../assets/images/years.png");
	}
	.tasks{
 		background-image: url("../assets/images/tasks.png");
	}
	.houses{
 		background-image: url("../assets/images/houses.png");
	}
	.counter {
	  animation-duration: 1s;
	  animation-delay: 0s;
	}
	@media screen and (max-width: 1170px) {
	    li{		
		width: 111px;
		display:inline-block;
		padding: 30px;
		//border-left: white 1px solid;
	}
	}
	@media screen and (max-width: 843px) {
	li{
 		border: none;
 	}
	}
</style>