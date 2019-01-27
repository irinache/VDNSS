<template>
	<div class="block">
		<h2 class="center">ОСТАВИТЬ ЗАЯВКУ</h2>
		<ContactForm></ContactForm>
	</div>	
</template>

<script> 
	import  ContactForm from "./ContactForm.vue"
	export default {
		components:{
			ContactForm
		}
    }
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";	
</style>