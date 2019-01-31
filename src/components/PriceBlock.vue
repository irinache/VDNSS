<template>
	<div class="card">        
        <h3 class="block_heading">{{name}}</h3>        
		<h2>от {{price}} грн</h2>
        <div class="grey_bg">
            <ul>
                <li v-for="item in list">
                    <div class="plus">                    
                    </div>
                    <p>{{item}}</p>
                </li>
            </ul>        
            <a href="#form">
                Оставить заявку
            </a>  
        </div>
       
	</div>	
</template>

<script> 
	export default {
        props:{
            list: Array,
            name: String,
            price: String
        },
    	data(){
    		return{    			
    			
    		}
    	}
	}
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";
	.card{
        width: 300px;      
        background-color: $light_grey;
        margin:30px;
        display:inline-block;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid transparent;
        vertical-align: middle;        
    }
    .card:hover{
        border: 1px solid $main_color;
        transition: 0.4s;
    }
    .card:not(:hover) {    
        transition: 0.4s;
    }
    .block_heading{
        background-color: $main_color;
        color:white;
        width: 50%;
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
        margin:auto;
    }
    ul{
        padding:0;
        margin:0;       
        height:250px;
    }
    li{
        list-style: none;
        text-align: left;
        padding-left:10px;
        border-bottom: 1px solid $grey;
        margin-left: 30px;
        margin-right: 30px;
    }
    .plus{
        width: 20px;
        height:20px;
        background-image: url("../assets/images/plus.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display:inline-block;
        vertical-align: middle;
    }
    p{
        display:inline-block;
        vertical-align: middle;
        margin-left:30px;
    }
    a{
        width: 80%;
        background-color:$main_color;
        border: none;
        padding-top:10px;
        padding-bottom:10px;
        margin: 40px 30px 40px 30px;
        font-family: 'Roboto', serif;
        color: white;
        text-decoration: none;
        display:block;
    }
    a:hover{
        background-color:$main_color_hover;
        transition: 0.4s;
    }
    a:not(:hover) {    
        transition: 0.4s;
    }
    .grey_bg{
        height:100%;
        background-color:$darker_light_grey;
    }
    @media screen and (max-width: 480px) {
        .card{
            width:100%;
            margin:0;
            margin-bottom: 20px;
        }
    }  
	
</style>