<template>
  <menu class="dropdown">
    <button class="mainmenubtn" @click="toggle" @blur="toggle">
      <div class="icon menu">  
      </div>
    </button>
    <div class="dropdown-child" v-bind:class="{show: active}">
      <router-link to="/video_monitoring" class="menuitem">
        <div class="icon video_monitoring">  
        </div>
        <p v-html="services.video_monitoring"></p>
      </router-link>
      <router-link to="/video_monitoring" class="menuitem">
        <div class="icon access_control">  
        </div>
        <p v-html="services.access_control"></p>
      </router-link>
      <router-link to="/video_monitoring" class="menuitem">
        <div class="icon computer_networks">  
        </div>
        <p v-html="services.computer_networks"></p>
      </router-link>
      <router-link to="/video_monitoring" class="menuitem">
        <div class="icon intercom">  
        </div>
        <p v-html="services.intercom"></p>
      </router-link>
      <router-link to="/video_monitoring" class="menuitem">
        <div class="icon alarm">  
        </div>
        <p v-html="services.alarm"></p>
      </router-link>    
    </div>
   
  </menu>
</template>

<script>
  export default {
     data() {
      return{
         services: {
          video_monitoring: "Системы<br>видеонаблюдения" ,
          access_control: "Системы<br>контроля доступа",
          computer_networks:"Проектирование и монтаж<br>компьютерных сетей",
          intercom:"Домофонные<br>системы",
          alarm:"Пожарные и охранные<br>сигнализации"          
        },
        active: false
      }
    },
    methods:{
      toggle: function() {      
      if(this.active == false)  
        this.active = true;   
      else if(this.active == true) 
        this.active = false;    
      }
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/index.scss";

menu{
  position: absolute;
  top:47%;
  width: 94%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 2%;
}
  .dropdown-child{     
    display: flex;
    flex-wrap: nowrap;
  }
  .menuitem {
    padding: 10px 10px;
    background-color:  $main_color;;
    width: 20%;
    color: white;   
    text-align: center; 
  }
  .menuitem:hover {
    background-color:  $main_color_hover;
    transition: 0.4s;
  }
  .menuitem:not(:hover) {    
    transition: 0.4s;
  }
  .menuitem p{
    display: inline-block;
    text-align: center;
    font-size: 10pt;
    margin: 0;
    font-family: 'Roboto', serif;
  }
  .icon{
    display: inline-block;
    margin-right: 10px;
    height: 34px;
    width: 34px;   
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .video_monitoring{
    background-image: url("../assets/images/video_monitoring.png");
  }
  .access_control{
    background-image: url("../assets/images/access_control.png");
  }
  .computer_networks{
    background-image: url("../assets/images/computer_networks.png");
  }
  .intercom{
    background-image: url("../assets/images/intercom.png");
  }
  .alarm{
    background-image: url("../assets/images/alarm.png");
  }
  .menu{
    background-image: url("../assets/images/menu.png");    
  }
  .mainmenubtn {
    visibility:hidden;
  }
  @media screen and (max-width: 1255px) {
     .menuitem p{
      font-size: 9pt;    
  }
  }
  @media screen and (max-width: 1165px) {
    .menuitem p{
      display:block;
      font-size: 9pt; 
    }  
  }
  @media screen and (max-width: 1100px) {
    menu{    
      top:82%;
    }
  }
  @media screen and (max-width: 724px) {
    menu{    
      top:85%;
    }
  }
  @media screen and (max-width: 580px) {
    menu{
      margin:0;     
      padding:0;
    }
   .menuitem p{
      display: inline-block;     
    }
    .icon{
      display: inline-block;    
    }
     .mainmenubtn {
          visibility: visible;
          background-color: $main_color;
          color: white;
          border: none;
          cursor: pointer;
          width:100%;
          padding-top:15px;
          padding-bottom:15px;
          font-family: 'Roboto', serif;
          font-size: 12pt;
          outline: none;           
      }

      .mainmenubtn:hover {
          background-color: $main_color_hover;
          }
          
      .dropdown {
          position: relative;
          display: inline-block;
          z-index:5;
          width:100%;         
      }
      .dropdown-child {
          position:relative;
          display: none;
          background-color: black;
          min-width: 200px;
          margin:0;
          padding:0;
      }
      .dropdown-child a {
          color: white;
          padding: 3%;
          text-decoration: none;
          display: block;

      }
      .show {
          display: block;
      } 
      .menuitem {
        padding-top:15px;
        padding-bottom:15px;
        background-color: $main_color;
        width: 94%;
        color: white;   
        text-align: center; 
      } 
  }
  a{
    text-decoration: none;
  } 
 
</style>