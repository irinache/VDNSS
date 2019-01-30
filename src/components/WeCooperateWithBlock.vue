<template>
	<div class="block light_grey">
		<h2 class="center">МЫ СОТРУДНИЧАЕМ С</h2>
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
	
	.light_grey{
		background-color: $light_grey;
	}
</style>