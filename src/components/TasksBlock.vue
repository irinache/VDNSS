<template>
	<div class="block">
		<div class="list">
			<h2 class="left">МЫ РЕШАЕМ ЗАДАЧИ</h2>
			<ul>
				<li>
					<div class="check">
						
					</div>
					<p>Lorem ipsum dolor</p>
				</li>
				<li>
					<div class="check">
						
					</div>
					<p>Sit amet, consectetur</p>
				</li>
				<li>
					<div class="check">
						
					</div>
					<p>Adipiscing elit, sed do</p>
				</li>
				<li>
					<div class="check">
						
					</div>
					<p>Eiusmod tempor</p>
				</li>
				<li>
					<div class="check">
						
					</div>
					<p>Ut enim ad minim veniam</p>
				</li>
			</ul>
		</div>
		<div class="image"></div>
	</div>
</template>

<script>
		export default {
		   
  }
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

	.list{
		display: inline-block;
		width: 45%;
	}
	.image{
		display: inline-block;
		width: 45%;
		height: 400px;
		background-image:  url("../assets/images/tasks_img.png");
		background-position: center;
		background-repeat: no-repeat;
	}
	ul{
		padding: 0;
		margin-right: 30px
	}
	li{
		background-color: $light_grey;
		text-align: left;
		margin-top: 10px;
		list-style: none;
		display: flex;
		align-items: center;
	}
	p{
		display: inline-block;
		font-family: 'Roboto', serif;
	}
	.check{
		height: 60px;
		width:60px;
		background-color: $main_color;
		background-image:  url("../assets/images/check.png");
		background-repeat: no-repeat;
 		background-position: center;
		display:  inline-block;
		margin-right: 30px;		
	}
	@media screen and (max-width: 1075px) {
	   .image{
			width: 40%;
		}
		.list{
			width: 50%;
	  	}
	}
	@media screen and (max-width: 980px) {
	   .image{
			width: 30%;
		}
		.list{
			width: 60%;
	  	}
	}
	@media screen and (max-width: 835px) {
	   .image{
			display: none;
		}
		.list{
			width: 100%;
	  	}
	}
</style>