<template>
  <header>

    <router-link to="/" id="logo"></router-link>

    <div class="contacts">
      <div class="contact">
        <div class="icon phone"></div>
        <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>
      </div>
      
      <div class="contact">
        <div class="icon email"></div>
        <div class="contacts_text">ex@gmail.com</div>
      </div>
      <div class="contact">
        <div class="icon address"></div>
        <div class="contacts_text">Украина, г. Днепр<br>ул. Сафонова, 6</div>
      </div>
    </div>

    <MainMenu />

  </header>
</template>

<script>
  import MainMenu from './MainMenu.vue'
  export default {
    components: {
      MainMenu
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../assets/styles/index.scss";

  header{
    position: relative;
    width: 100%;
    background-color: white;
    z-index: 1;
  }
  #logo{
     background-image: url("../assets/images/logo.png");
     display: inline-block;
     vertical-align: middle; 
   }
  .contacts{
        float: right;  //
    margin-right: 5%; //
    display: inline-block;

    vertical-align: middle;
    //text-align: right;
  }
  .contact{
     display: inline-block;
  }
  .icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid $grey;
    margin: 30px;    
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
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
    display: inline-block;
    vertical-align: middle;
    color: black;
    margin:auto;
    font-family: 'Roboto', serif;
  }

  @media screen and (max-width: 1100px) {
    .contacts{          
      margin-bottom: 50px;
      display:block;
      text-align:center;
      float: none;  //
      margin-right: 0; //
    }
    #logo{
      margin:auto;
      margin-top: 30px;
      display:block;
    }
  }
</style>