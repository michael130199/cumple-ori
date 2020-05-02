<template>
  <div class="home">

    <div class="bg-home banner">

      <img src="./../assets/images/banner-simple.png" class="img-center" alt="">

      <panda-sleep></panda-sleep>

    </div>

    <div class="container-fluid">
      
      <div class="row justify-content-center">

        <div class="col-12">
          <cake></cake>
        </div>  

      </div>

    </div>

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



.bg-home{
  background: $primary-1;
}

</style>

