<template>
	<div>
		<Headline type="video_monitoring">Системы видеонаблюдения</Headline>
		<ServiceInfo type="video_monitoring"></ServiceInfo>
		<PriceList></PriceList>
		<ContactBlock></ContactBlock>
	</div>	
</template>

<script> 
	import Headline from './Headline.vue'
	import ServiceInfo from './ServiceInfo.vue'
	import PriceList from './PriceList.vue'
	import ContactBlock from './ContactBlock.vue'

	export default {
		components:{
			Headline,
			ServiceInfo,
			PriceList,
			ContactBlock
		}
    }
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	
</style>