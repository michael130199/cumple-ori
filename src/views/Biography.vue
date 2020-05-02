<template>

  <div class="biography">

    <div class="bg-biography banner">

      <img src="./../assets/images/Biography-banner.png" class="img-center" alt="">

      <panda-sleep></panda-sleep>
    </div>
  
    <div class="section">
      <div class="oop"></div>
      <div class="fixed">
        <h1 class="large">Oriolla Carolina Caballero Lopez</h1>
        <p>Por ser una persona tan especial en la vida de las personas que te rodean...</p>
      </div>
    </div>
    <div class="section">
      <div class="fixed">
        <p>2° de Mayo nació una niña que sin imaginarlo cambiaría para bien la vida de las personas que le rodean...</p>
      </div>
    </div>
    <div class="section">
      <div class="p fixed">A pesar de todas las situaciones difíciles que se han presentado ha seguido adelante...</div>
    </div>
    <div class="section">
      <div class="p fixed">Una persona digna de admirar sin duda alguna y ejemplo a seguir para tus amigos...</div>
    </div>
    <div class="section">
      <div class="p fixed">¡Gracias por siempre contagiar de felicidad a todas las personas que te rodean!</div>
    </div>
    <div class="section">
      <div class="p fixed">¡Gracias por siempre entregar lo mejor de ti sin esperar algo a cambio!</div>
    </div>
    <div class="section">
      <div class="p fixed">¡De algo no cabe duda y es que mereces lo mejor del universo entero!</div>
    </div>
    <div class="section">
      <div class="p fixed">¡Dios te cuide y te permita cumplir todos y cada uno de tus sueños, tus machos creemos en ti, TE QUEREMOS!</div>
    </div>
    <div class="section" style="height:100vh !important">
      <div class="fixed">
        <p>De parte de todos tus seres queridos te deseamos un</p>
        <h1 class="large">¡FELIZ CUMPLEAÑOS!</h1>
      </div>
      
    </div>
  </div>

</template>


<script>
import PandaSleep from './../components/PandaSleep.vue'

export default {
  name: 'Biography',
  components: {
    PandaSleep
  },
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

@import "https://fonts.googleapis.com/css?family=Sintony";
* {
  box-sizing: border-box;
}

body {
  
  padding: 0;
  margin: 0;
  font-family: 'Sintony', sans-serif;
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;
  color: #000;
}

header {
  background-color: #fff;
  padding: 0;
  margin: 0;
}

.section {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  letter-spacing: 4px;
  overflow: hidden;
  clip: rect(0, auto, auto, 0);
}
.section .fixed {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
}

.section:nth-child(1) {
  background-color: #fff;
  color: #000;
  top: 0;
  z-index: 1;
}
.section:nth-child(1) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(2) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: $primary-1;
  color: #fff;
  top: 100vh;
  z-index: 2;
}
.section:nth-child(2) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(3) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #005499 ;
  color: #fff;
  top: 200vh;
  z-index: 3;
}
.section:nth-child(3) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(4) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #4cb7f5;
  color: #fff;
  top: 300vh;
  z-index: 4;
}
.section:nth-child(4) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(5) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #252fba;
  color: #fff;
  top: 400vh;
  z-index: 5;
}
.section:nth-child(5) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(6) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: $primary-1;
  color: #fff;
  top: 500vh;
  z-index: 6;
}
.section:nth-child(6) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(7) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #005499 ;
  color: #fff;
  top: 600vh;
  z-index: 7;
}
.section:nth-child(7) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(8) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #4cb7f5;
  color: #fff;
  top: 700vh;
  z-index: 8;
}
.section:nth-child(8) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(9) {
  box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);
  background-color: #252fba;
  color: #fff;
  top: 800vh;
  z-index: 9;
}
.section:nth-child(9) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.section:nth-child(10) {
  background-color: #005499;
  color: #fff;
  top: 900vh;
  z-index: 10;
}
.section:nth-child(10) .fixed {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.oop {
  position: relative;
  z-index: auto;
  height: 10px;
  background: linear-gradient(141deg, $primary-1 0%, $secondary-1 51%, #005499 75%);
}

</style>
