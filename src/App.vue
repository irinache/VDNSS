<template>
  <div id="app">
    <Header />
    <WelcomeBlock />
    <ServicesBlock />
    <StatisticsBlock />
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import WelcomeBlock from './components/WelcomeBlock.vue'
  import ServicesBlock from './components/ServicesBlock.vue'
  import StatisticsBlock from './components/StatisticsBlock.vue'
  export default {
    name: 'app',
    components: {
      Header,
      WelcomeBlock,
      ServicesBlock,
      StatisticsBlock
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