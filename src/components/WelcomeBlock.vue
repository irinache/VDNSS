<template>
   <div class="block welcome">
    <div class="content">
      <h1>ВДНСС</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <a href="#services" class="arrow">
    </a> 
</div>
</template>

<script>
  export default {
       
  }
  
</script>

<style lang="scss"  scoped>
@import "../assets/styles/index.scss";

.content{
  margin-top: 90px;
}
h1{ 
  text-align: center;
  color: white;
  font-size: 40pt;
  margin-bottom: 70px;
  font-family: 'Roboto', serif;
}
h1:before, h1:after{
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 90px;
  height: 5px;
  background: white;
  margin-right:30px;
  margin-left:30px;
}

.welcome{
  background-image: url("../assets/images/welcome_block_bg.png");
}
p{
  text-align: center;
  color:white;
  margin:auto;  
  width: 50%;
  font-family: 'Roboto', serif;
}

.arrow{
  display: block;
  opacity: 0.5;
  margin:auto;
  margin-top: 12%;
  width:50px;
  height:50px;
  background-image: url("../assets/images/down_arrow.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.arrow:hover{
  opacity: 1;
  transition: 0.5s;
}
.arrow:not(:hover){
  transition: 0.5s;
}
@media screen and (max-width: 770px) {
  p{ 
    width: 80%; 
  }
}
@media screen and (max-width: 580px) {
  h1{
    margin-top:5%;
    margin-bottom:5%;
  }
  .content{
    margin-top:30px;
  }
}
@media screen and (max-width: 600px) {
  h1{
    margin-top:8%;
    margin-bottom:8%;
    font-size: 30pt;
  }
  h1:before, h1:after{
    content: none;
  }
}
@media screen and (max-width: 320px) {
  h1{
    margin-top:10%;
    margin-bottom:10%;
  }

}
</style>