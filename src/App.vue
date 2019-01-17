<template>
  <div id="app">
    <Header />
    <WelcomeBlock />
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import WelcomeBlock from './components/WelcomeBlock.vue'
  export default {
    name: 'app',
    components: {
      Header,
      WelcomeBlock
    }

  }
</script>
<style>
  @import "./assets/styles/index.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>