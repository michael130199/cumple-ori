<template>
  <div class="home">

    <div class="bg-home banner">

      <img src="./../assets/images/banner-simple.png" class="img-center" alt="">

    </div>

    <div class="container-fluid">
      
      <div class="row justify-content-center">

        <div class="col-12">
          
        </div>

      </div>

    </div>

  </div>

</template>


<script>

export default {
  name: 'Home',
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

