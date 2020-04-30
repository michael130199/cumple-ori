<template>

  <div class="biography">

    <div class="bg-biography banner">

      <img src="./../assets/images/Biography-banner.png" class="img-center" alt="">

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
  name: 'Biography',
  data() {
    return {
      title: 'Biografía'
    }
  }
}
</script>


<style lang="scss">
@import './../assets/color.scss';
@import './../assets/styles.scss';

.bg-biography{
  background: $secondary-1;
}

</style>
