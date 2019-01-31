<template>
	<div class="block headline" :style="{'background-image': `url(${require('../assets/images/' + type + '_headline.png')})`}">
		<div class="text">
			<h1><slot></slot></h1>
		</div>
	</div>	
</template>

<script> 
	export default {
    	props: {
    		type: String
    	},
    	data(){
    		return{    			
    			video_monitoring: "video_monitoring"
    		}
    	}
	}
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	.headline{			
		vertical-align: middle;
	}
	h1{
		display: inline-block;
		vertical-align: middle;
		width:70%;
		text-align: center;
		color: white;
		font-size: 40pt;
		margin:auto;
		font-family: 'Roboto', serif;
	}
	.text{
		vertical-align: middle;
	}
	.text:before, .text:after{
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 90px;
	 	height: 5px;
		background: white;
		margin-right:30px;
		margin-left:30px;
	}
	@media screen and (max-width: 1117px) {
	   	h1{	
	   		margin-top: 20px;
	   		width:60%;	   		
			font-size: 30pt;
		}
	}
	@media screen and (max-width: 960px) {
	   	.text:before, .text:after{
		  content: none;
		}
		h1{
			width: 80%;
		}
	}
	@media screen and (max-width: 930px) {
		h1{
			margin-top: 40px;
		}
				
	}
	@media screen and (max-width: 580px) {
		h1{
			margin-top: 0;
		}		
				
	}
	@media screen and (max-width: 425px) {
		h1{
			width: 98%;
			font-size: 22pt;
		}		
	}
	
</style>