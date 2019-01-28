<template>
	<div class="block headline" :style="{'background-image': `url(${require('../assets/images/' + type + '_headline.png')})`}">
		<h1><slot></slot></h1>
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
		height:100px;
		vertical-align: middle;


	}
	h1{
	  position:absolute;
	  top:37%;
	  text-align: center;
	  color: white;
	  font-size: 4vw;
	  right:0;
	  left:0;
	  margin:auto;
	  margin-right:30px;
	  margin-left:30px;
	  font-family: 'Roboto', serif;
	}
	h1:before, h1:after{
	  content: '';
	  display: inline-block;
	  vertical-align: middle;
	  width: 90px;
	  height: 5px;
	  background: white;
	  margin-right:30px;
	  margin-left:30px;
	}
	@media screen and (max-width: 1100px) {
	   	h1{	
	   		top:43%; 
			font-size: 30pt;
		}
	}
	@media screen and (max-width: 914px) {
	   	h1:before, h1:after{
		  content: none;
		}
	}
	
</style>