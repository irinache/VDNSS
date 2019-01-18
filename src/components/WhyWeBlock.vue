<template>
	<div class="block why_we">
		<div class="image"></div>
		<div class="article">
			<h2>ПОЧЕМУ МЫ?</h2>
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

<script></script>

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
	}
	.article{
		display: inline-block;
		width: 45%;
		margin-left: 30px;
		vertical-align: top;
	}
	h2{
		margin-top:0;
		text-align: right;
	}
	h2:after{
		content:" ";
		height: 2px;
		width:300px;
		background-color: $grey;
		display: block;
		margin-top: 10px;
		position:absolute;
		right:100px;
	//	text-align: right;
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
		display: inline-flex;
		align-items: center;
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
		margin-right: 30px;		
	}
</style>