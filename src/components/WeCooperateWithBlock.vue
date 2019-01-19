<template>
	<div class="block">
		<h2>МЫ СОТРУДНИЧАЕМ С</h2>
	<Slider />
	</div>	
</template>

<script>
	import Slider from './Slider.vue'
	export default {
   	components: {
      Slider
    }

  }
</script>

<style lang="scss" scoped>
	@import "../assets/styles/index.scss";
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
</style>