<template>
   <div class="block welcome">
    <h1> ВДНСС </h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <a href="#" class="arrow">
    </a> 
</div>
</template>

<script>
 // import Header from './components/Header.vue'
  export default {
    
  //  components: {
   //   Header
  //  }

  }
</script>

<style lang="scss"  scoped>
.block{
  position: relative;  
  width: 100%;
  height: 830px;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 0;
}
h1{
  position:absolute;
  top:27%;
  text-align: center;
  color: white;
  font-size: 40pt;
  right:0;
  left:0;
  margin:auto;
}
h1:before, h1:after{
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 90px;
  height: 5px;
  background: white;
}

.welcome{
  background-image: url("../assets/images/welcome_block_bg.png");
}
p{
  position:relative;
  top:43%;
  text-align: center;
  color:white;
  margin:auto;
  width: 50%;

}

.arrow{
  position:absolute;
  opacity: 0.5;
  top: 80vh;
  left:0;
  right:0;
  margin:auto;
  width:50px;
  height:50px;
  background-image: url("../assets/images/down_arrow.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.arrow:hover{
  opacity: 1;
}

</style>