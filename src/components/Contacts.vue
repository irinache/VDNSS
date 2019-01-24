<template>
<div class="block">
	<h2>КОНТАКТЫ</h2>
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
		<form @submit = "checkForm"  method="post">
			<h3>Контактная форма</h3>
			<p class="err" v-if="empty_FIO">{{err_msg_1}}</p>
			<input v-model="FIO" type="text" placeholder="ФИО">
			<p class="err" v-if="empty_phone_num">{{err_msg_2}}</p>
			<input v-model="phone_num" type="text" placeholder="Номер телефона">
			<textarea v-model="comment" type="text" placeholder="Комментарий"></textarea> 
			<input class="button" type="submit" value="Перезвоните мне">	
		</form>
		<div class="info">
			<h3>Телефон</h3>
			<p>+38 067 85 67 486</p>
			<p>+38 067 85 67 486</p>
			<h3>Электронная почта</h3>
			<p>ex@gmail.com</p>			
			<h3>Адрес</h3>
			<p>Украина, г.Днепр</p>
			<p>ул. Сафонова, 6</p>
		</div>	
	</div>
	
</div>
</template>

<script>
  export default {
  	data(){
  		return{
  			FIO: null,
  			empty_FIO: false,
  			err_msg_1: "Требуется указать ФИО.",
	  		phone_num: null,
	  		empty_phone_num: false,
	  		err_msg_2: "Требуется указать номер телефона.",
	  		comment: null,	  		
  		}  		
  	},
  	methods:{
  		onCallBack(){
  			alert("checking...");
  		},
  		checkForm(e) {
	      if (this.FIO && this.phone_num) {
	        return true;
	      }

	      this.errors = [];

	      if (!this.FIO) {	        
	        this.empty_FIO = true;

	      }
	      if (!this.phone_num) {	        
	          this.empty_phone_num = true;
	      }
	      if (this.FIO) {	        
	        this.empty_FIO = false;
	      }
	      if (this.phone_num) {	        
	        this.empty_phone_num = false;
	      }
		  e.preventDefault();
	    },
  	}
  }
</script>

<style lang="scss"  scoped>
  @import "../assets/styles/index.scss";
  	.contacts{
		width:100%;	
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
	h2:after{
		content:" ";
		height: 2px;
		width:300px;
		background-color: $grey;
		display: block;
		left:0;
		right: 0;
		margin: auto;
		margin-top: 10px;
	}
	h3{
		font-size: 16pt;
		font-weight: normal;		
		font-family: 'Roboto', serif;
		text-align: left;
		margin-top: 0;
	}
	h3:after{
		content:" ";
		height: 2px;
		width:300px;
		background-color: $grey;
		display: block;
		margin-top: 10px;
	}
	form{
		display:inline-block;
		background-color: $light_grey;
		padding:3%;
		width: 50%;

		input, textarea{
			display:block;
			margin: auto;
			margin-bottom: 20px;
			border: 1px solid $grey;
			padding:10px;
			width: 96%;
			font-family: 'Roboto', serif;
			resize: none;
		}
	}
	.info{
		display:inline-block;
		margin-left: 5%;
		width: 35%;
		text-align: left;	
		font-family: 'Roboto', serif;
		vertical-align:top;
	}
	.button{
		width: 100%;
		font-family: 'Roboto', serif;
		background-color:$main_color;
		color: white;
		border:none;
		font-weight: bold;
	}
	.err{
		color: red;
		font-size: 10pt;
		text-align: left;
		margin-bottom: 5px;
		font-family: 'Roboto', serif;
	}

</style>