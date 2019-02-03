<template>		
		<form @submit = "checkForm">
			<h3 class="left">Контактная форма</h3>
			<p class="err" v-if="empty_name">{{err_msg_1}}</p>
			<input v-model="name" type="text" placeholder="ФИО" id="name">
			<p class="err" v-if="empty_phone">{{err_msg_2}}</p>
			<input v-model="phone" type="text" placeholder="Номер телефона" id="phone">
			<textarea v-model="comment" type="text" placeholder="Комментарий"></textarea> 
			<input class="button" id="ajaxSubmit" type="submit" value="Перезвоните мне">	
		</form>		
</template>

<script> 
	export default {
		data(){
	  		return{
	  			name: null,
	  			empty_name: false,
	  			err_msg_1: "Требуется указать ФИО.",
		  		phone: null,
		  		empty_phone: false,
		  		err_msg_2: "Требуется указать номер телефона.",
		  		comment: null,	  		
	  		}  		
	  	},
	  	methods:{
	  		onCallBack(){
	  			alert("checking...");
	  		},
	  		checkForm(e) {
		      if (this.name && this.phone) {
		        jQuery(document).ready(function(){
	            jQuery('#ajaxSubmit').click(function(e){
	               e.preventDefault();
	               $.ajaxSetup({
	                  headers: {
	                      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
	                  }
	              });
	               jQuery.ajax({
	                  url: "http://projects3.kozachenko.dp.ua/callme",
	                  method: 'post',
	                  data: {
	                     name: jQuery('#name').val(),                    
	                     phone: jQuery('#phone').val()
	                  },
	                  success: function(result){
	                  	console.log(result);
	                    alert(JSON.stringify(result));
	                  }});
	               });
	            });
		      }

		      this.errors = [];

		      if (!this.name) {	        
		        this.empty_name = true;

		      }
		      if (!this.phone) {	        
		          this.empty_phone = true;
		      }
		      if (this.name) {	        
		        this.empty_name = false;
		      }
		      if (this.phone) {	        
		        this.empty_phone = false;
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