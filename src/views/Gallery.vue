<template>
  <div class="gallery">

    <div class="bg-gallery banner">

      <img src="./../assets/images/Gallery-banner.png" class="img-center" alt="">

    </div>

    <div class="container">

      <div class="row justify-content-center height-card mb-5">

        <div class="col-12">

          <paginate name="photos4" :list="photos4" :per="3" class="paginate-center">

            <figure class="tarjetas">

              <div class="tarjetas__contenido" >
                
                <div class="tarjetas__elemento" v-for="(item, index) in paginated('photos4')" :key="index">
                  
                  <img class="img-rotate" :src="getImgUrl(item.name, 4)">
                  
                </div>

              </div>

            </figure>
          
          </paginate>

        </div>
      
      </div>

      <div class="row">
        <div class="col-12 mt-3">
          <paginate-links for="photos4" 
            :classes="{'ul': ['pagination', 'justify-content-center'], 'li': ['page-item'], 'a': ['page-link']}">
          </paginate-links>
        </div>
      </div>
      
      <div class="row justify-content-center pt-5">
        

        <div class="col-md-4">

          <h3 class="text-center my-3">Fotos De OriCarol</h3>
          
          <paginate-links  for="photos1" 
            :classes="{'ul':  ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

          <paginate name="photos1" :list="photos1" :per="5" class="paginate-center">

            <div class="flex-container">

              <div class="cover-wrapper" v-for="(item, index) in paginated('photos1')" :key="index">

                <img class="cover-shadow" :src="getImgUrl(item.name, 1)">
                
                <div class="cover-hidden">

                  <img class="cover" :src="getImgUrl(item.name, 1)">

                </div>
                
              </div>

            </div>
  
          </paginate>

          <paginate-links  for="photos1" 
            :classes="{'ul':  ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

        </div>


        <div class="col-md-4 bg-gallery">

          <h3 class="text-center my-3">Fotos de tu Familia</h3>
          
          <paginate-links  for="photos2" 
            :classes="{'ul':  ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

          <paginate name="photos2" :list="photos2" :per="5" class="paginate-center">

            <div class="flex-container">

              <div class="cover-wrapper" v-for="(item, index) in paginated('photos2')" :key="index">

                <img class="cover-shadow" :src="getImgUrl(item.name, 2)">
                
                <div class="cover-hidden">

                  <img class="cover" :src="getImgUrl(item.name, 2)">

                </div>
                
              </div>

            </div>

          </paginate> 

          <paginate-links for="photos2" 
            :classes="{'ul': ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

        </div>

        <div class="col-md-4">

          <h3 class="text-center my-3 ">Fotos de tus Amigos</h3>
          
          <paginate-links  for="photos3" 
            :classes="{'ul':  ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

          
          <paginate name="photos3" :list="photos3" :per="5" class="paginate-center">
          
            <div class="flex-container">

              <div class="cover-wrapper" v-for="(item, index) in paginated('photos3')" :key="index">

                <img class="cover-shadow" :src="getImgUrl(item.name, 3)">
                
                <div class="cover-hidden">

                  <img class="cover" :src="getImgUrl(item.name, 3)">

                </div>
                
              </div>

            </div>
            
          </paginate> 

          <paginate-links for="photos3" 
            :classes="{'ul': ['pagination', 'justify-content-center'], 'li': 'page-item', 'a': 'page-link'}">
          </paginate-links>

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
      title: 'Galería',
      photos1: [],// fotos de Ori
      photos2: [],// fotos de Familia
      photos3: [],// fotos de sus machos
      photos4: [], // fotos de las tortas 
      paginate: ['photos1','photos2','photos3','photos4']

    }
  },
  created() {

    for (let i = 0; i < 12; i++) {
      let num = i + 1;
      this.photos1[i] = { name: 'photo (' + num + ').jpg'}
    }

    for (let i = 0; i < 19; i++) {
      let num = i + 1;
      this.photos2[i] = { name: 'photo (' + num + ').jpg'}
    }

    for (let i = 0; i < 21; i++) {
      let num = i + 1;
      this.photos3[i] = { name: 'photo (' + num + ').jpg'}
    }

    
    for (let i = 0; i < 6; i++) {
      let num = i + 1;
      this.photos4[i] = { name: 'photo (' + num + ').jpg'}
    }

  },
  mounted(){
    
  },
  methods: {
    getImgUrl(url, type) {
      
      switch (type) {
        case 1:
          var images = require.context('../../public/pictures/1/', false, /\.jpg$/);
          break;
        case 2:
          var images = require.context('../../public/pictures/2/', false, /\.jpg$/);
          break;
        case 3:
          var images = require.context('../../public/pictures/3/', false, /\.jpg$/);
          break;
        case 4:
          var images = require.context('../../public/pictures/4/', false, /\.jpg$/);
          break;
      }
      return images('./' + url);
    }
  }
}



</script>

<style lang="scss" scoped>

@import './../assets/color.scss';
@import './../assets/styles.scss';


$body-bg: #141d26;
$bg-dark: darken($body-bg, 10%);
$bg-light: lighten($body-bg, 10%);
$text: lighten($body-bg, 50%);
$card-size: 328px;

.bg-gallery{
  background: $tertiary-1;
}

.paginate-center {
  padding: 0;
}

.flex-container {
  width: 100%;
  display: flex; 
  flex-flow: row wrap; 
  justify-content: center;
  align-items: flex-start;
}

.cover-wrapper {
  display: inline-block;
  width: $card-size;
  height: $card-size;
  margin: 15px;
  position: relative;
  
}

.cover-hidden {
  overflow: hidden;
}

.cover,
.cover-shadow {
  width: $card-size;
  height: $card-size;
  background-size: $card-size;
  position: absolute;
}

.cover {
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
}

.cover-shadow {
  filter: saturate(5) blur(30px);
  opacity: 0.7;
  top: 10px;
}

.height-card {
  height: 120px;
}

.tarjetas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 190px;
  height: 210px;
  margin: 0;
  -webkit-perspective: 800px;
		  perspective: 800px;
  -webkit-transform: translate(-50%, -50%);
	  -ms-transform: translate(-50%, -50%);
		  transform: translate(-50%, -50%);
}

.tarjetas__contenido {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
		  transform-style: preserve-3d;
  -webkit-transform: translateZ(-182px) rotateY(0);
		  transform: translateZ(-182px) rotateY(0);
  -webkit-animation: carrusel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
		  animation: carrusel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
}
 
.tarjetas__elemento {
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
  height: 210px;
  border-radius: 6px;
  overflow: hidden;
}


.tarjetas__elemento>.img-rotate {
  border-radius: 5px;
  width: 190px;
  height: 210px;
  object-fit: cover;
  object-position: center;
}

.tarjetas__elemento:nth-child(1) {
  border-radius: 5px;
  width: 190px;
  height: 210px;
  object-fit: cover;
  object-position: center;

  -webkit-transform: rotateY(0) translateZ(182px);
		  transform: rotateY(0) translateZ(182px);
}
.tarjetas__elemento:nth-child(2) {
  background: #39d570;
  -webkit-transform: rotateY(120deg) translateZ(182px);
		  transform: rotateY(120deg) translateZ(182px);
}
.tarjetas__elemento:nth-child(3) {
  background: #f0091f;
  -webkit-transform: rotateY(240deg) translateZ(182px);
		  transform: rotateY(240deg) translateZ(182px);
}body {
  background: #6c4949;
}
 
@-webkit-keyframes carrusel {
  0%,  17.5% {
    -webkit-transform: translateZ(-182px) rotateY(0);
		    transform: translateZ(-182px) rotateY(0);
  }
  27.5%, 45% {
    -webkit-transform: translateZ(-182px) rotateY(-120deg);
		    transform: translateZ(-182px) rotateY(-120deg);
  }
  55%, 72.5% {
    -webkit-transform: translateZ(-182px) rotateY(-240deg);
		    transform: translateZ(-182px) rotateY(-240deg);
  }
  82.5%, 100% {
    -webkit-transform: translateZ(-182px) rotateY(-360deg);
		    transform: translateZ(-182px) rotateY(-360deg);
  }
}
 
@keyframes carrusel {
  0%,  17.5% {
    -webkit-transform: translateZ(-182px) rotateY(0);
		    transform: translateZ(-182px) rotateY(0);
  }
  27.5%, 45% {
    -webkit-transform: translateZ(-182px) rotateY(-120deg);
		    transform: translateZ(-182px) rotateY(-120deg);
  }
  55%, 72.5% {
    -webkit-transform: translateZ(-182px) rotateY(-240deg);
		    transform: translateZ(-182px) rotateY(-240deg);
  }
  82.5%, 100% {
    -webkit-transform: translateZ(-182px) rotateY(-360deg);
		    transform: translateZ(-182px) rotateY(-360deg);
  }
}

</style>
