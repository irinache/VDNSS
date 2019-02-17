<template>
	<div class="block" id="services" >
		<h2 class="center">НАШИ УСЛУГИ</h2>
		<router-link to="/video_monitoring" class="service">
			<div class="icon video_monitoring"></div>
			<h4>Системы<br>видеонаблюдения</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</router-link>
		<router-link to="/intercom" class="service">
			<div class="icon intercom"></div>
			<h4>Домофонные<br>cистемы</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</router-link>
		<router-link to="/computer_networks" class="service">
			<div class="icon computer_networks"></div>
			<h4>Проектирование и монтаж<br>компьютерных сетей</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</router-link>
		<router-link to="/access_control" class="service">
			<div class="icon access_control"></div>
			<h4>Системы контроля<br>доступа</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</router-link>
		<router-link to="/alarm" class="service">
			<div class="icon alarm"></div>
			<h4>Пожарные и охранные<br>сигнализации</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
		</router-link>
	</div>
</template>

<script>
	export default {
	
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
	.service{
		background-color: $main_color;
		display: inline-block;
		width: 340px;
		height: 340px;
		margin:5px;
		text-decoration: none;	
		vertical-align: middle;
	}
	.service:hover{
		background-color: $main_color_hover;
		transition: 0.3s;	
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
	h4{
		margin-top: 20%;
		color: white;
		font-family: 'Roboto', serif;
		font-size: 14pt;
	}
	p{
		margin-top: 20%;
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
	@media screen and (max-width: 1152px) {
	.service{	
		width: 300px;
		height: 300px;
	}   
	}
	@media screen and (max-width: 713px) {
	.service{	
		width: 100%;
		height: 350px;		
	}   
	}
	@media screen and (max-width: 390px) {
		.icon{
	 		height: 80px;
		    width: 80px;
		}  
		.service{	
			width: 100%;
			height: 300px;		
		} 
	}
</style>