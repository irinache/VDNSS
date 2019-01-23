<template>
  <footer>
    <a href="#" id="logo"></a>

    <div class="contacts">
      <div class="icon phone"></div>
      <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>

      <div class="icon email"></div>
      <div class="contacts_text">ex@gmail.com</div>

      <div class="icon address"></div>
      <div class="contacts_text">Украина, г. Днепр<br>ул. Сафонова, 6</div>

      <div class="social_networks">
        <div class="sn_text">Социальные сети:</div>
        <a href="#" class="sn instagram"></a>
        <a href="#" class="sn twitter"></a>
        <a href="#" class="sn facebook"></a>
      </div>
      
    </div>
  </footer>
</template>

<script>
 // import MainMenu from './MainMenu.vue'
  export default {
  /*  components: {
      MainMenu
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../assets/styles/index.scss";

  footer{
    position: relative;
    width: 100%;
    background-color: white;
    z-index: 1;
    background-color: $light_grey;
  }

  #logo{
    background-image: url("../assets/images/logo.png");
  }
  .contacts{
    position: absolute;
  //  width: 70%;
    top:0;
    right: 50px;
    margin: 30px;
    display: flex;
    flex-wrap: nowrap;
  }
  .icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid $grey;
     margin:auto;
    margin-right: 30px;
    margin-left: 30px;
    background-repeat: no-repeat;
    background-position: center;

  }
  .phone{
    background-image: url("../assets/images/phone.png");   
    background-size: 35px;
  }
  .email{
    background-image: url("../assets/images/email.png"); 
    background-size: 35px;  
  }
  .address{
    background-image: url("../assets/images/address.png");   
    background-size: 25px;
  }

  .contacts_text{
    color: black;
    margin:auto;
    font-family: 'Roboto', serif;
  }
  .social_networks{
    display: inline-block;
    margin-left: 40px;
  }
  .sn_text{
    display:block;
    text-align: center;
    font-family: 'Roboto', serif;
  }
  .sn{
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 15px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .instagram{
    background-image: url("../assets/images/instagram.png");   
    background-size: 25px;
  }
  .twitter{
    background-image: url("../assets/images/twitter.png");   
    background-size: 25px;
  }
  .facebook{
    background-image: url("../assets/images/facebook.png");   
    background-size: 25px;
  }
</style>