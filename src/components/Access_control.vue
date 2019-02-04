<template>
	<div class="main">
		<Headline type="access_control">Системы контроля доступа</Headline>
		<ServiceInfo type="access_control"></ServiceInfo>
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