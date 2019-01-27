<template>
	<div class="block">
		<h2 class="center">НАШИ ЦЕНЫ</h2>
		<PriceBlock name="Lorem" price="5000" v-bind:list="['Lorem', 'ipsum', 'dolor', 'sit']"></PriceBlock>
		<PriceBlock name="Lorem ipsum" price="3000" v-bind:list="['Lorem', 'ipsum', 'sit']"></PriceBlock>
		<PriceBlock name="Dolor" price="4000" v-bind:list="['Lorem', 'ipsum', 'dolor', 'sit']"></PriceBlock>
	</div>	
</template>

<script> 
	import PriceBlock from './PriceBlock.vue'
	export default {
		components:{
			PriceBlock
		},
    	props: {
    		type: String
    	},
    	data(){
    		return{    			
    			//video_monitoring: "video_monitoring"
    		}
    	}
	}
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";	
</style>