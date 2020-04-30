<template>
  <div class="gallery">

    <div class="bg-gallery banner">

      <img src="./../assets/images/Gallery-banner.png" class="img-center" alt="">

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
  name: 'Gallery',
  data() {
    return {
      title: 'Galería'
    }
  }
}
</script>

<style lang="scss" scoped>

@import './../assets/color.scss';
@import './../assets/styles.scss';

.bg-gallery{
  background: $tertiary-1;
}

</style>
