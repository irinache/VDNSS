<template>
  <header>
    <div id="logo"></div>
    <div class="contacts">
      <div class="icon"></div>
      <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>

      <div class="icon"></div>
      <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>

      <div class="icon"></div>
      <div class="contacts_text">+38 067 47 85 459<br>+38 066 47 85 459</div>
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
  header{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    background-color: white;
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


  }
  .icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #acacac;
    margin-right: 30px;
    background-image: url("../assets/images/phone.png");
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: center;
  }

  .contacts_text{
    display: inline-block;
    color: black;

  }
</style>