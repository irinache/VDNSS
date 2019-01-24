<template>
  <menu>
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
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/index.scss";

  menu{
    position: absolute;
    top:80%;
    width: 94%;
    left: 0;
    right: 0;
    margin: auto;
    padding: 0 2%;
    display: flex;
    flex-wrap: nowrap;
  }
  .menuitem {
    padding: 10px 10px;
    background-color: #2fc3b7;
    width: 20%;
    color: white;   
     text-align: center; 
  }
  .menuitem:hover {
    background-color: #5cd5cb;
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
   // background-image: url("../assets/images/video_monitoring.png");
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
 
</style>