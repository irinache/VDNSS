<template>
		
		<form @submit = "checkForm"  method="post">
			<h3 class="left">Контактная форма</h3>
			<p class="err" v-if="empty_FIO">{{err_msg_1}}</p>
			<input v-model="FIO" type="text" placeholder="ФИО">
			<p class="err" v-if="empty_phone_num">{{err_msg_2}}</p>
			<input v-model="phone_num" type="text" placeholder="Номер телефона">
			<textarea v-model="comment" type="text" placeholder="Комментарий"></textarea> 
			<input class="button" type="submit" value="Перезвоните мне">	
		</form>
		
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
	form{
		display:inline-block;
		background-color: $light_grey;
		padding:3%;
		width: 50%;
		margin-bottom:30px;

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
	.button{
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
	@media screen and (max-width: 915px) {
    	form{
			display:block;			
			width: 90%;
			margin:auto;
		}
	}

  @media screen and (max-width: 700px) {
    form{
			
		}   
  }
</style>