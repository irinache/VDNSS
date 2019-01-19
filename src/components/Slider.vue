<template>
	<div id="slider">
		<button class="controls" id="previous"></button>
		
		<ul id="slides">
		    <li class="slide showing"></li>
		    <li class="slide"></li>
		    <li class="slide"></li>
		    <li class="slide"></li>		    
		</ul>
		<button class="controls" id="next"></button>
	</div>
</template>

<script>	
	export default{
		mounted: function() {
			var slides = document.querySelectorAll('#slides .slide');
			var currentSlide = 0;
			var slideInterval = setInterval(nextSlide,2000);

			var next = document.getElementById('next');
			var previous = document.getElementById('previous');

			next.onclick = function() {
			 pauseSlideshow();
			 nextSlide();
			};
			previous.onclick = function() {
			 pauseSlideshow();
			 previousSlide();
			};

			function nextSlide() {
			 goToSlide(currentSlide+1);
			}

			function previousSlide() {
			 goToSlide(currentSlide-1);
			}

			function goToSlide(n) {
			 slides[currentSlide].className = 'slide';
			 currentSlide = (n+slides.length)%slides.length;
			 slides[currentSlide].className = 'slide showing';
			}
			var playing = true;
						 
			function pauseSlideshow() {
			    playing = false;
			    clearInterval(slideInterval);
			}			 
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/styles/index.scss";
	#slider{

	}
	#slides {
	    position: relative;
	    height: 300px;
	    width: 60%;
	    padding: 0px;
	    margin: 0px;
	    list-style-type: none;
 		display:inline-block;
 		vertical-align: middle;
	}
	 
	.slide {
	    position: absolute;
	    left: 0;
	    right:0;
	    margin:auto;
	    top: 0px;
	    width: 60%;
	    height: 100%;
	    opacity: 0;
	    z-index: 1;
	   
	    -webkit-transition: opacity 1s;
	    -moz-transition: opacity 1s;
	    -o-transition: opacity 1s;
	    transition: opacity 1s;
	}
	.controls{		
		border: none;
		width: 50px;
		height:50px;
		cursor: pointer;
		display: inline;	
		background-position: center;
		background-repeat: no-repeat;
		background-color: white;
		outline:none;
	}

	#previous{
		background-image: url("../assets/images/left_arrow.png");

	}
	#next{
		background-image: url("../assets/images/right_arrow.png");
	}
	.showing {
	    opacity: 1;
	    z-index: 2;
	}
	.slide {
	    font-size: 40px;
	    padding: 40px;
	    box-sizing: border-box;
	    background: #333;
	    color: #fff;
	}
	 
	.slide:nth-of-type(1) {
	    background-image: url("../assets/images/slide1.png");
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color:white;
	}
	.slide:nth-of-type(2) {
	    background-image: url("../assets/images/slide2.png");
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color:white;
	}
	.slide:nth-of-type(3) {
	    background-image: url("../assets/images/slide1.png");
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color:white;
	}
	.slide:nth-of-type(4) {
	    background-image: url("../assets/images/slide2.png");
	    background-repeat: no-repeat;
	    background-position: center;
	    background-color:white;
	}
</style>