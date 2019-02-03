<template>
  <footer>
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
  export default {
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
    overflow: auto;
  }

  #logo{
     background-image: url("../assets/images/logo.png");
     display: inline-block;
     vertical-align: middle;
  }
  .contacts{    
    display: inline-block;
    vertical-align: middle;   
    float: right;  //
    //margin:auto;
    margin-right: 5%; //
   // margin:auto;
  }
  .contact{
     display: inline-block;
  }
  .icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid $grey;
    margin: 25px;        
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
  .social_networks{
    display: inline-block;
    vertical-align: middle;
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
   @media screen and (max-width: 1277px) {
    .contacts{          
      display:block;
      width:100%;
      margin:auto;
      text-align:center;
      margin-bottom: 30px;
    }
    .contact{
      margin:0px;
    }
    #logo{
      margin:auto;
      margin-top: 30px;
      display:block;     
    }
    .social_networks{
      display:inline;
    }
  }
 
    @media screen and (max-width: 582px) {
      .icon{
        display:none;
      }
      .contact{
        margin:0px;        
      }
      .contacts{
        margin-bottom:20px;
      }
      .contacts_text{
        display: inline-block;
        vertical-align: middle;
        color: black;
        margin:20px;
        font-family: 'Roboto', serif;
      }
       .social_networks{
      display:block;
      margin:0;
      margin-top:30px;
    }
    }
   
</style>