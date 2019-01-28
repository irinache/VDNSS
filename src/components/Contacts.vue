<template>
<div class="block">
	<h2 class="center">КОНТАКТЫ</h2>
	<div class="map">
		<iframe src="https://maps.google.com/maps?width=100%&amp;height=440&amp;hl=en&amp;q=%D1%83%D0%BB.%20%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%2C%205%2C%20%D0%94%D0%BD%D0%B5%D0%BF%D1%80%2C%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">			
		</iframe>
		<div>
			<small>
				<a href="https://embedgooglemaps.com/de/">
				https://embedgooglemaps.com/de/
				</a>
			</small>
		</div>
		<div>
			<small>
				<a href="https://iamsterdamcard.it">
				iamsterdam card.it
			</a>
		</small>
	</div>
	</div>
	<br />
	<div class="contacts">
		<ContactForm></ContactForm>
		<div class="info">
			<div class="item">
				<h3 class="left">Телефон</h3>
				<p>+38 067 85 67 486</p>
				<p>+38 067 85 67 486</p>
			</div>
			<div class="item">
				<h3 class="left">Электронная почта</h3>
				<p>ex@gmail.com</p>
			</div>
			<div class="item">		
				<h3 class="left">Адрес</h3>
				<p>Украина, г.Днепр</p>
				<p>ул. Сафонова, 6</p>
			</div>
		</div>	
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
		margin:auto;
		margin-top: 30px;	
  	}
	.map{
		overflow:hidden;
		width: 100%;
		height: 440px;
		margin:auto;
	}
	iframe{
		width: 100%;
		height: 440px;	
	}
	#gmap_canvas img{
		max-width:none!important;
		background:none!important
	}
	.info{
		display:inline-block;
		margin-left: 5%;
		width: 35%;
		text-align: left;	
		font-family: 'Roboto', serif;
		vertical-align:top;
	}
	.item{
		display:inline-block;
		vertical-align: top;
		margin: 20px;
	}
	@media screen and (max-width: 915px) {
    	.info{
			display:block;			
			width: 90%;
			text-align:center;
			margin:auto;			
			margin-top: 30px;
		}
		h3{
			text-align:center;
		}
	}
</style>