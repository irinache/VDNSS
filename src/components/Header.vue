<template>
  <header>

    <a href="#" id="logo"></a>

    <div class="contacts">
      <div class="icon phone"></div>
      <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>

      <div class="icon email"></div>
      <div class="contacts_text">ex@gmail.com</div>

      <div class="icon address"></div>
      <div class="contacts_text">Украина, г. Днепр<br>ул. Сафонова, 6</div>
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
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    margin: 30px 80px;
    height: 72px;
    width: 154px;
  }
  .contacts{
    position: absolute;
    top:0;
    right: 50px;
    display: inline-block;
    margin: 30px;
    display: flex;
    flex-wrap: nowrap;


  }
  .icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid $grey;
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
</style>