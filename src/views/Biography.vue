<template>

  <div class="biography">

    <div class="principal">
      <div class="bg-biography banner">

        <img src="./../assets/images/Biography-banner.png" class="img-center" alt="">

        <panda-sleep></panda-sleep>

      </div>

      <div class="container">
          <div class="row">
            <div class="col-12">

              <h3  class="large text-center text-dark my-5 py-5">Sigue bajando..... <br> Te esperan sorpresas </h3>

              <a class="arrow-wrap">

                <span class="arrow"></span>

              </a>

              <h3  class="large text-center text-dark my-5 py-5">Y no despiertes el panda <br>No seas maleducada</h3>


            </div>
          </div>
        </div>

    </div>


    <div class="section">

      <div class="oop"></div>

      <div class="fixed">

        <div class="row justify-content-center">

          <div class="col-md-12">

                
            <h1 class="large">Oriolla Carolina Caballero Lopez</h1>

            <p>Por ser una persona tan especial en la vida de las personas que te rodean...</p>

          </div>
        
        </div>

      </div>

    </div>

    <div class="section">
      <div class="oop"></div>


      <div class="fixed">

        <div class="row justify-content-center">
          
          <div class="col-md-8 pt-5">

            <p>2° de Mayo nació una niña que sin imaginarlo cambiaría para bien la vida de las personas que le rodean...</p>

          </div>

          <div class="col-md-4">

            <baby></baby>

          </div>
        
        </div>

        

      </div>

    </div>

    <div class="section">

     
      <div class="oop"></div>

      <div class="p fixed">

        <div class="row justify-content-center">
          
          <div class="col-md-4">

            <div class="img-content">

              <img src="../assets/images/rosa.jpg" alt="">

            </div>
            
          </div>

          <div class="col-md-8 pt-5 ">

            <p>A pesar de todas las situaciones difíciles que se han presentado ha seguido adelante...</p>

          </div>

        </div>

        
      </div>

    </div>

    <div class="section">

      <div class="oop"></div>

      <div class="p fixed">Una persona digna de admirar sin duda alguna y ejemplo a seguir para tus amigos...</div>

    </div>

    <div class="section">

      <div class="oop"></div>

      <div class="fixed">

        <div class="row">

          <div class="col-md-4">

            <panda-run></panda-run>

          </div>

          <div class="col-md-8 pt-5">
            <p>
              ¡Gracias por siempre contagiar de felicidad a todas las personas que te rodean!
            </p>

          </div>
        </div>

      </div>

    </div>

    <div class="section">
      <div class="oop"></div>

      <div class="p fixed">¡Gracias por siempre entregar lo mejor de ti sin esperar algo a cambio!</div>

    </div>

    <div class="section">
      <div class="oop"></div>

      <div class="fixed">

        <div class="row">

          <div class="col-md-4 pt-5">

            <p>¡De algo no cabe duda y es que mereces lo mejor del universo entero!</p>

          </div>

          <div class="col-md-8">

            <orbit></orbit>

          </div>

        </div>

      </div>

    </div>

    <div class="section">

      <div class="oop"></div>

      <div class="fixed">

        <div class="row">
          
          <div class="col-md-7 pt-5">

            <p>¡Dios te cuide y te permita cumplir todos y cada uno de tus sueños, tus machos creemos en ti, TE QUEREMOS!</p>

          </div>

          <div class="col-md-5">

            <div class="img-content">

              <img src="../../public/pictures/3/photo (20).jpg" alt="">

            </div>
            
          </div>

        </div>

      </div>

    </div>

    <div class="section" style="height:100vh !important">

      <div class="fixed">


        <div class="row">
          <div class="col-md-12">

            
            <p>De parte de todos tus seres queridos te deseamos un</p>

            <h1 class="large">¡FELIZ CUMPLEAÑOS!</h1>

          </div>

          <div class="col-md-12">

            <cake></cake>

          </div>

          <div class="col-12 mt-5">
            <h4>Ahora puedes ir:</h4>
            <router-link class="text-light" to="/">Inicio</router-link> |
            <router-link class="text-light" to="/gallery">Galería</router-link> |
            <router-link class="text-light" to="/game">Game</router-link> |
          </div>

        </div>

      </div>
      
    </div>

  </div>

</template>


<script>
import PandaSleep from './../components/PandaSleep.vue'
import Baby from './../components/Baby.vue'
import Cake from './../components/Cake.vue'
import PandaRun from './../components/PandaRun.vue'
import Orbit from './../components/Orbit.vue'

export default {
  name: 'Biography',
  components: {
    PandaSleep,
    Baby,
    Cake,
    PandaRun,
    Orbit
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

html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }

.principal{
  height: 100vh;
  width: 100%;
}

.bg-biography{
  background: $secondary-1;
}

.arrow-wrap {
  position:absolute;
  z-index:1;
  left:50%;
  top:20vh;
  margin-left:-5em;
  background:$primary;
  width:10em;
  height:10em;
  padding:4em 2em;
  border-radius:50%;
  font-size:0.5em;
  display:block;
  box-shadow:0px 0px 5px 0px $primary-1;
}

.arrow {
  float:left;
  position:relative;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 3em 3em 0 3em;
  border-color: #ffffff transparent transparent transparent;
  transform:rotate(360deg)
}

.arrow:after {
  content:'';
  position:absolute;
  top:-3.2em;
  left:-3em;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 3em 3em 0 3em;
  border-color: $primary transparent transparent transparent;
  transform:rotate(360deg)
}




.img-content {
  overflow: hidden;
  margin: 0 auto;
  height: 190px;
  width: 190px;
  border-radius: 15px;
}

.img-content>img {

  object-fit: cover;
  object-position: center;
  height: 190px;
  width: 190px;
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
