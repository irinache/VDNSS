<template>
	<div class="block why_we">
		<div class="image"></div>
		<div class="article">
			<h2 class="right">ПОЧЕМУ МЫ?</h2>
			<p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
			</p>
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

			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		   
  }
</script>

<style lang="scss" scoped>
	@import "../assets/styles/index.scss";
	.why_we{
		background-color: $light_grey;
	}
	.image{
		display: inline-block;
		width: 45%;
		height: 380px;
		background-image:  url("../assets/images/why_we_img.png");
		background-position: center;
		background-repeat: no-repeat;
	}
	.article{
		display: inline-block;
		width: 45%;
		margin-left: 30px;
		vertical-align: top;
	}
	.text {
		text-align: justify;
		margin-top: 40px;
	}
	ul{
		padding: 0;		
	}
	li{
		background-color: $light_grey;
		text-align: left;
		margin-top: 10px;
		list-style: none;
		display: inline-block;	
		width: 50%;
	}
	.check{
		height: 40px;
		width:40px;
		background-color: $main_color;
		background-image:  url("../assets/images/check.png");
		background-repeat: no-repeat;
 		background-position: center;
		display:  inline-block;
		vertical-align: middle;
		margin: 10px;		
	}
	p{
		display: inline-block;
		vertical-align: middle;
		font-family: 'Roboto', serif;
	}
	@media screen and (max-width: 1075px) {
	   .image{
			width: 40%;
		}
		.article{
			width: 50%;
	  	}
	}
	@media screen and (max-width: 980px) {
	   .image{
			width: 30%;
		}
		.article{
			width: 60%;
	  	}
	}
	@media screen and (max-width: 835px) {
	   .image{
			display: none;
		}
		.article{
			width: 100%;
	  	}
	}
	@media screen and (max-width: 550px) {
	p{
		display:block;
		text-align:center;
	}
	.check{
		display:block;
		margin:auto;
	}
}
</style>