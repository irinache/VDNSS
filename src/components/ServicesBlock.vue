<template>
	<div class="block" id="services" >
		<h2>НАШИ УСЛУГИ</h2>
		<a href="#" class="service">
			<div class="icon video_monitoring"></div>
			<h3>Системы<br>видеонаблюдения</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</a>
		<a href="#" class="service">
			<div class="icon access_control"></div>
			<h3>Системы контроля<br>доступа</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</a>

		<a href="#" class="service">
			<div class="icon computer_networks"></div>
			<h3>Проектирование и монтаж<br>компьютерных сетей</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</a>
		<a href="#" class="service">
			<div class="icon intercom"></div>
			<h3>Домофонные<br>cистемы</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</a>
		<a href="#" class="service">
			<div class="icon alarm"></div>
			<h3>Пожарные и охранные<br>сигнализации</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</a>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

	.service{
		background-color: $main_color;
		display: inline-block;
		width: 340px;
		height: 340px;
		margin: 0.5%;
		text-decoration: none;	
	}
	.service:hover{
		background-color: $main_color_hover;
		transition: 0.3s;	
	}
	h2{
		text-align: center;
	}
	
	h2:after{
		content:" ";
		height: 2px;
		width:300px;
		background-color: $grey;
		display: block;
		left:0;
		right: 0;
		margin: auto;
		margin-top: 10px;
	}

	.icon{
	    height: 100px;
	    width: 100px;
	    background-image: url("../assets/images/video_monitoring.png");
	    background-position: center;
	    background-size: contain;
	    background-repeat: no-repeat;
	    position: relative;
	    left:0;
	    right: 0;
	    margin: auto;
	    top:15%;
	}
	h3{
		position: relative;
		top: 15%;
		color: white;
		font-family: 'Roboto', serif;
	}
	p{
		position: relative;
		top: 20%;
		color: white;
		width:80%;
		left:0;
		right: 0;
		margin: auto;
		font-family: 'Roboto', serif;
	}
	.video_monitoring{
	    background-image: url("../assets/images/video_monitoring.png");
	  }
	  .access_control{
	    background-image: url("../assets/images/access_control.png");
	  }
	  .computer_networks{
	    background-image: url("../assets/images/computer_networks.png");
	  }
	  .intercom{
	    background-image: url("../assets/images/intercom.png");
	  }
	  .alarm{
	    background-image: url("../assets/images/alarm.png");
	  }

</style>