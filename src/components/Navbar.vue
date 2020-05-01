<template>
  <div id="navbar">

    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent " id="nav">

      <a class="navbar-brand text-dark">{{title}}</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbar-1" aria-controls="navbar-1" 
        aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-1">

        <ul class="navbar-nav mr-auto ">

          <li class="nav-item text-dark">
            
            <router-link class="nav-link" to="/" >Inicio</router-link>

          </li>

          <li class="nav-item">

            <router-link class="nav-link" to="/gallery">Galería</router-link>
            
          </li>

          <li class="nav-item">

            <router-link class="nav-link" to="/biography">Biografía</router-link>
            
          </li>

          <li class="nav-item">

            <router-link class="nav-link" to="/game">Game</router-link>
            
          </li>

          <li class="nav-item none">

            <a class="nav-link active">l</a>
          
          </li>

        </ul>

      </div>

    </nav>
    
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return { 
      titlee: 'Feliz Cumpleaños Oriolla',
      title: 'Lorem Ipsu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './../assets/color.scss';

#navbar {
  position: absolute;
}

.navbar-nav>.nav-item>.router-link-exact-active {
  border-bottom: 3px solid $bg;
}

.navbar-nav>.nav-item> .nav-link:hover {
  transition:all 500ms;

  border-bottom: 3px solid $bg;
}

.none>.active{
  color: transparent !important;
  border-bottom: 3px solid transparent !important;
}

.bg-transparent {
  background: transparent;
}

</style>
