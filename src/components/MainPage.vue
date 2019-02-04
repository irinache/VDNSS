<template>
	<div class="main">
		<WelcomeBlock />	 
	    <ServicesBlock />
	    <StatisticsBlock />
	    <TasksBlock />
	    <WhyWeBlock />
	    <StagesOfCoopBlock />
	    <WeCooperateWithBlock />
	    <Contacts />
	</div>
</template>

<script>
	  import WelcomeBlock from './WelcomeBlock.vue'
	  import ServicesBlock from './ServicesBlock.vue'
	  import StatisticsBlock from './StatisticsBlock.vue'
	  import TasksBlock from './TasksBlock.vue'
	  import WhyWeBlock from './WhyWeBlock.vue'
	  import StagesOfCoopBlock from './StagesOfCoopBlock.vue'
	  import WeCooperateWithBlock from './WeCooperateWithBlock.vue'
	  import Contacts from './Contacts.vue'

	export default{
		components: {     
	      WelcomeBlock,
	      ServicesBlock,
	      StatisticsBlock,
	      TasksBlock,
	      WhyWeBlock,
	      StagesOfCoopBlock,
	      WeCooperateWithBlock,
	      Contacts
    },
	}
</script>
<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	
</style>