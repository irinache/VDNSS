<template>
	<div class="block stages">
		<h2 class="light center">ЭТАПЫ СОТРУДНИЧЕСТВА</h2>
		<div class="squares">
			<div class="square">
				<div class="num">
					1
				</div>			
				<p class="light">Lorem ipsum</p>	
			</div>

			<div class="right_arrow"></div>

			<div class="square">
				<div class="num">
					2
				</div>			
			<p class="light">Lorem ipsum</p>	
			</div>
			<div class="right_arrow"></div>
			<div class="square">
				<div class="num">
					3
				</div>			
			<p class="light">Lorem ipsum</p>	
			</div>
			<div class="right_arrow"></div>
			<div class="square">
				<div class="num">
					4
				</div>			
			<p class="light">Lorem ipsum</p>	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		   
  }
</script>

<style lang="scss" scoped>
	@import "../assets/styles/index.scss";

	.stages{
		//height: 300px;
		background-image:url(../assets/images/stages_of_coop_bg.png);
	}
	.square{
		margin:10px;
		width: 170px;
		height: 170px;
		background-color: rgba(255,255, 255, 0.3);
		display: inline-block;
		.num{
			position:relative;
			top:40px;
			margin:auto;
			height: 50px;
			width:50px;
			background-color: $main_color;
			color: white;
			font-weight: bold;
			font-size: 20pt; 
			vertical-align: middle;
			line-height: 50px;
			font-family: 'Roboto', serif;
		}
		p{
			font-family: 'Roboto', serif;
			position:relative;
			top: 50px;
			color:white;
		}
	}
	.right_arrow{
		display: inline-block;
		width: 50px;
		height:50px;
		background-image:url("../assets/images/right_arrow.png");
		background-position: center;
		background-repeat: no-repeat;
		vertical-align: middle;
		margin-top:1%;
	}
	@media screen and (max-width: 1030px) {
	   .square{
			margin:10px;
			width: 160px;
			height: 160px;
		}
	}
	@media screen and (max-width: 990px) {
	   .square{
			margin:10px;
			width: 160px;
			height: 160px;
		}
		.right_arrow{
			display: none;
		}
	}
</style>