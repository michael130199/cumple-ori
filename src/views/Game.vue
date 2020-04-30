<template>

  <div class="game">

    <div class="bg-game banner">

      <img src="./../assets/images/Games-banner.png" class="img-center" alt="">

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
  name: 'Game',
  data() {
    return {
      title: 'Game'
    }
  }
}
</script>

<style lang="scss">
@import './../assets/color.scss';
@import './../assets/styles.scss';



.bg-game{
  background: $primary-1;
}

</style>