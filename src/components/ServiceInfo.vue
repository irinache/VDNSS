<template>
	<div class="block info" >
		<div class="article">
			<p class="text" v-html = "text">
			</p>
			<ul>
				<li v-for="item in vm_list">
					<div class="check"></div>
					<p>{{item}}</p>
				</li>
			</ul>
		</div>
		<div class="image" :style="{'background-image': `url(${require('../assets/images/' + type + '_img.png')})`}"></div>
	</div>	
</template>

<script> 
	export default {
    	props: {
    		type: String
    	},
    	data(){
    		return{
    			text: null,
    			video_monitoring_text: "video_monitoring_text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    			intercom_text: "intercom_text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    			alarm_text: "alarm Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    			access_control_text: "access_control Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    			computer_networks_text: "computer_networks Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    			vm_list: ['Lorem ipsum dolor', 'Sit amet', 'Consectetur', 'Elit sed']
    		}
    	},
    	created(){
    		getText:{
    			if (this.type == "video_monitoring") 
    				this.text = this.video_monitoring_text;
    			else if (this.type == "intercom") 
    				this.text = this.intercom_text;
    			else if (this.type == "alarm") 
    				this.text = this.alarm_text;
    			else if (this.type == "access_control") 
    				this.text = this.access_control_text;
    			else if (this.type == "computer_networks") 
    				this.text = this.computer_networks_text
    		}
       	}
	}
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	.info{
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
		margin-right: 30px;
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
		vertical-align: top;
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