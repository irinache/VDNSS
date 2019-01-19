<template>
  <div id="app">
    <Header />
    <WelcomeBlock />
    <ServicesBlock />
    <StatisticsBlock />
    <TasksBlock />
    <WhyWeBlock />
    <StagesOfCoopBlock />
    <WeCooperateWithBlock />
    <Footer />
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import WelcomeBlock from './components/WelcomeBlock.vue'
  import ServicesBlock from './components/ServicesBlock.vue'
  import StatisticsBlock from './components/StatisticsBlock.vue'
  import TasksBlock from './components/TasksBlock.vue'
  import WhyWeBlock from './components/WhyWeBlock.vue'
  import StagesOfCoopBlock from './components/StagesOfCoopBlock.vue'
  import WeCooperateWithBlock from './components/WeCooperateWithBlock.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      Header,
      WelcomeBlock,
      ServicesBlock,
      StatisticsBlock,
      TasksBlock,
      WhyWeBlock,
      StagesOfCoopBlock,
      WeCooperateWithBlock,
      Footer
    }

  }
</script>
<style>
  @import "./assets/styles/index.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>