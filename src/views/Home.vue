<template>
  <div class="home">

    <div class="bg-home banner">

      <img src="./../assets/images/banner-simple (2).png" class="img-center" alt="">
      <panda-sleep></panda-sleep>

    </div>

    <div class="container-fluid">
      
      <div class="row justify-content-center">

        <div class="col-12">

          <cake></cake>
          
        </div>

        <div class="col-12 mt-5 text-center">
            
          <router-link class="text-dark" to="/game"><h4>Te recomendamos que entres aqui:</h4>Game</router-link>

        </div>

      </div>

    </div>

    <nav class="navbar navbar-light bg-bottom">

      <ul class="navbar-nav ml-auto ">

        <li class="nav-item">
          
          <p class="nav-link">No Hay un héroe como tú</p>

        </li>

      </ul>

    </nav>

  </div>

</template>


<script>
import PandaSleep from './../components/PandaSleep.vue';
import Cake from './../components/Cake.vue';

export default {
  name: 'Home',
  components: {
    PandaSleep,
    Cake
  },
  data() {
    return {
      title: 'Inicio'
    }
  }
}
</script>

<style lang="scss">
@import './../assets/color.scss';
@import './../assets/styles.scss';

.bg-bottom {
  position: absolute;
  bottom: 0%;
  width: 100%;
  background-color: $primary-1;
}



.bg-home{
  background: $primary-1;
}


</style>

