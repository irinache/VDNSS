<template>
	<div class="block" id="form">
		<h2 class="center">ОСТАВИТЬ ЗАЯВКУ</h2>
		<div class="contacts">
			<ContactForm></ContactForm>
		</div>
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
	.contacts{
		width:100%;	
  	}
	@media screen and (max-width: 768px) {
    	.block{
			padding:0;			
		}	
		.contacts{
			margin:0;
		}			
	}
</style>