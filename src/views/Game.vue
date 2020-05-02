<template>

  <div class="game">

    <div class="bg-game banner">

      <img src="./../assets/images/Games-banner.png" class="img-center" alt="">

      <panda-sleep></panda-sleep>

    </div>

    <div class="container-fluid">
      
      <div class="row justify-content-center">

        <div class="col-12 text-center color">

            <div class="row">

              <div class="col-12 text-center mb-3" style="margin-top: -90px">

                <h5>Instrucciones</h5>

                <p>Debe saltar con el botón space, para evitar los ostaculos, la meta es 32 puntos. (Debe llegar a la meta)</p>

                <div class="img-content">

                  <img src="@/assets/game/img/zzz.gif" alt="">

                </div>

              </div>

              <div class="col-12 ">

                <canvas id="canvas" width="700px" height="300px" style="border: 2px solid black"></canvas>

              </div>

            </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import inicializar from '@/assets/game/js/juego.js'
import PandaSleep from './../components/PandaSleep';

export default {
  name: 'Game',
  components: {
    PandaSleep
  },
  data() {
    return {
      title: 'Game',
    }
  },
  created() {
    let canvas = document.getElementById('canvas');
  },
  mounted() {
    var init = inicializar
    init.initialize(canvas)
    console.log('Abraham Rivas @abraham.r.j')
  } 
}
</script>

<style lang="scss">
@import './../assets/color.scss';
@import './../assets/styles.scss';



.bg-game{
  background: $primary-1;
}

.img-content {
  overflow: hidden;
  margin: 0 auto;
  height: 220px;
  width: 220px;
  border-radius: 15px;
}

.img-content>img {
  margin: 0;
  object-fit: cover;
  object-position: center;
  height: 220px;
  width: 220px;
}

.color {
  background: $white;
}

</style>