<template>
	<div class="block statistics">
		<ul>
			<li>
				<div class="icon clients">
					
				</div>
				<h1>	
				{{clients}}
				</h1>
				<p>
					Довольных<br>клиентов
				</p>
			</li>
			<li>
				<div class="icon clients">
					
				</div>
				<h1>
				{{years}}
				</h1>
				<p>
					Лет<br>на рынке
				</p>
			</li>
			<li>
				<div class="icon clients">
					
				</div>
				<h1>
				{{tasks}}
				</h1>
				<p>
					Выполнено<br>монтажных работ
				</p>
			</li>
			<li>
				<div class="icon clients">
					
				</div>
				<h1>
				{{houses}}
				</h1>
				<p>
					Объектов<br>под охраной
				</p>
			</li>			
		</ul>
	</div>
</template>

<script>
		 

	export default {
	data(){
		return{
			clients: 3000,
			years: 10,
			tasks: 4534,
			houses: 5467, 
			i: 0
		}
	},  		
	/*mounted() {
		calc: {
			console.log(" ready!");
			this.i = 0;
			while(this.i<this.clients){
				setTimeout( this.i++, 10);	
				console.log("if ");  	
			}
		}	
	}*/
}

  	
</script>

<style lang="scss" scoped>
	.statistics{
		background-image: url("../assets/images/stat_bg.png");
		height: 350px;
	}
	li{
		//list-style: none;
		width: 19%;
		display:inline-block;
		padding: 30px;
		border-left: white 1px solid;
	}
	/*li:after{
		content:" ";
		display: inline-block;
		width: 1px;
		height:80px;
		background-color: white;		
		vertical-align: middle;
		z-index:1;
	}*/
	li:first-child {
 	border: none}
	h1{
	  text-align: center;
	  color: white;
	  font-size: 40pt;
	  font-family: 'Roboto', serif;
	  margin-bottom: 0;
	  margin-top: 15px;
	}
	p{
		color: white;
		font-family: 'Roboto', serif;
		font-size: 16pt;
	}
	.icon{
		height: 100px;
	    width: 100px;	   
	    background-position: center;
	    background-size: contain;
	    background-repeat: no-repeat;
	    left:0;
	    right: 0;
	    margin: auto;
	}
	.clients{
 		background-image: url("../assets/images/video_monitoring.png");
	}
</style>