<template>

  <div class="game">

    <div class="bg-game banner">

      <img src="./../assets/images/Games-banner.png" class="img-center" alt="">

      <panda-sleep></panda-sleep>

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
import PandaSleep from './../components/PandaSleep';

export default {
  name: 'Game',
  components: {
    PandaSleep
  },
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