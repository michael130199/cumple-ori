<template>
  <div id="app">

    <navbar></navbar>

    <router-view/>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">

@import './../node_modules/bootstrap/dist/css/bootstrap.css';
@import './assets/styles.scss';

</style>
