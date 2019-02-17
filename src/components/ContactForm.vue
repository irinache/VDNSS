<template>		
		<form @submit = "checkForm">
			<h3 class="left">Контактная форма</h3>
			<p class="err" v-if="err_name">{{err_msg_1}}</p>
			<input v-model="name" type="text" placeholder="ФИО" id="name">
			<p class="err" v-if="err_phone">{{err_msg_2}}</p>
			<input v-model="phone" type="text" placeholder="+380670044030" id="phone">
			<textarea v-model="comment" type="text" placeholder="Комментарий" id="comment"></textarea> 
			<input class="button" id="ajaxSubmit" type="submit" value="Перезвоните мне">	
			<Modal v-show="isSuccess" @close="closeScsModal">
				<template slot="header">
					Ваша заявка была успешно принята!
				</template>
				<template slot="body">
					Ожидайте звонка от нашего оператора.
				</template>
			</Modal>
			<Modal v-show="isError" @close="closeErrModal">
				<template slot="header">
					Ошибка!
				</template>
				<template slot="body">
					Что-то пошло не так. Попробуйте еще раз.
				</template>
			</Modal>
		</form>		
</template>

<script> 
	import Modal from './Modal.vue';
	export default {
		components: {
      		Modal
    	},
		data(){
	  		return{
	  			name: null,
	  			err_name: false,
	  			err_msg_1: "Требуется указать ФИО",
		  		phone: null,
		  		err_phone: false,
		  		err_msg_2: "Требуется указать номер телефона",
		  		comment: null,	 
		  		isSuccess: false,
		  		isError: false 		
	  		}  		
	  	},
	  	methods:{
	  		showScsModal() {
		        this.isSuccess = true;
		        $("body").addClass("no-scroll");
		    },
		    showErrModal() {
		        this.isError = true;
		        $("body").addClass("no-scroll");
		    },
		    closeScsModal() {
		        this.isSuccess = false;
		        $("body").removeClass("no-scroll")
		    },
		    closeErrModal() {
		        this.isError = false;
		        $("body").removeClass("no-scroll")
		    },
	  		checkForm(e) {	

	  			// проверка на пустоту
		    	if (!this.name) {	        
		        	this.err_name = true;
		        	this.err_msg_1="Требуется указать ФИО";
		    	}

		    	if (!this.phone) {	        
		        	this.err_phone = true;
		        	this.err_msg_2="Требуется указать номер телефона";
		    	}

		    	//проверка на соответсвие регэкспам
	  			if(this.phone){	  				
	  				var re = /^((\+38)?|38)0\d{9}$/;
	  				if(re.test(this.phone)){
	  					this.err_phone = false;
	  					console.log("Номер телефона введен правильно!");	  					
	  				}
	  				else{
	  					this.err_msg_2="Номер телефона введен неправильно. Введите номер в формате +380123456789";
	  					this.err_phone = true;
	  					//console.log("Номер телефона введен НЕправильно!");
	  				}
	  			}
	  			if(this.name){
	  				var re = /^[a-zа-я\s`]+$/i;
	  				if(re.test(this.name)){
	  					this.err_name = false;
	  					console.log("Имя введено правильно!");
	  				}
	  				else{
	  					this.err_msg_1="Имя введено неправильно";
	  					this.err_name = true;
	  					//console.log("Имя введено НЕправильно!");
	  				}
	  			}

	  			// если все ок, отправка данных  			
		    	if (this.name && this.phone && !this.err_name && !this.err_phone) {	
		    		console.log("Отправка!");	        
	            	e.preventDefault();
	            	$.ajaxSetup({
	                	headers: {
	                    	'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
	                	}
	            	});
	            	jQuery.ajax({
	                	url: "http://vdnss.com.ua/callme",
	                	method: 'post',
	                	data: {
	                    	name: jQuery('#name').val(),                    
	                    	phone: jQuery('#phone').val(),
	                    	comment: jQuery('#comment').val()
	                	},
	                  	success: function(result){
	                  		console.log(result);
	                    	this.showScsModal();	
	                  	}.bind(this),
	                  	error: function(jqXHR, textStatus, errorThrown ){
	                  		console.log("err");	
	                  		this.showErrModal();	        		
	                  	}.bind(this)
	                });	                
		    	}

			  	e.preventDefault();		
		    },
	  	}
    }

     
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	form{
		display:inline-block;
		background-color: $light_grey;
		padding:3%;
		width: 50%;
		margin-bottom:30px;		
	}
	input{
		display:block;
		margin: auto;
		margin-bottom: 20px;
		border: 1px solid $grey;
		padding:2%;		
		width: 96%;
		font-family: 'Roboto', serif;
	
	}
	textarea{
		display:block;
		padding:2%;
		margin: auto;
		margin-bottom: 20px;
		border: 1px solid $grey;
		height:60px;
		width: 96%;
		font-family: 'Roboto', serif;
		resize: none;

	}
	.button{
		height:40px;
		padding:0;
		width: 100%;
		font-family: 'Roboto', serif;
		background-color:$main_color;
		color: white;
		border:none;
		font-weight: bold;
	}
	.button:hover{
		background-color:$main_color_hover;
		transition: 0.4s;
	}
	.button:not(:hover) {    
    	transition: 0.4s;
	}
	.err{
		color: red;
		font-size: 10pt;
		text-align: left;
		margin-bottom: 5px;
		font-family: 'Roboto', serif;
	}
	@media screen and (max-width: 1000px) {
    	form{
			display:block;			
			margin:auto;
			width:94%;			
		}
	}
	@media screen and (max-width: 768px) {
    	form{	
    		margin:0;		
			width:94%;
		}
	}
	@media screen and (max-width: 540px) {
    	form{	
    		padding:5%;	
			width:90%;
		}
	}
 
</style>