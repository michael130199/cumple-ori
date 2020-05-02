<template>
  <div class="orbit">


    <div id="space">
      <div class="space_field_wrapper">
        <div class="space_field mother">
          <div class="planet"></div>
        </div>
      </div>

      <div class="space_field_wrapper" v-for="(item ,index) in planets" :key="index">
        <div class="space_field satellite">
          <div class="planet"></div>
        </div>
      </div>

    </div>



  </div>
</template>

<script>
export default {
  name: 'Orbit',
  data() {
    return {
      planets: [1,2,3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$orbitCount: 3;

.orbit {
  background: transparent;
  height: 300px;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
}
#space {
  position: absolute;
  height: 300px;
  width: 300px;
  transform-style: preserve-3d;
  perspective: 700px;
  
  .space_field {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    
    .planet {
      position: absolute;
      top: 50%;
      left: 50%;
      overflow: hidden;
      border-radius: 100%;
      box-sizing: border-box;
      border: 12px solid #000;
    }
    &.mother .planet {
      width: 200px;
      height: 200px;
      background: rgba(255, 80, 50, 1);
      transform: translate(-50%, -50%);

      &::before {
        content: '';
        position: absolute;
        top: -12%;
        left: -12%;
        width: 100%;
        height: 100%;
        background: rgba(100, 40, 0, 1);
        border-radius: 100%;
        mix-blend-mode: screen;
      }
    }
    &.satellite .planet {
      left: 100%;
      width: 50px;
      height: 50px;
      background: rgba(50, 80, 255, 1);
      transform: translate(-50%, -50%);

      &::before {
        content: '';
        position: absolute;
        top: -15%;
        left: -15%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 100%;
      }
    }
  }
  .space_field_wrapper {
    position: absolute;
    height: 300px;
    width: 300px;
    transform-style: preserve-3d;
    
    @for $i from 1 through $orbitCount + 1 {
      &:nth-child(#{$i}) {
        transform: rotateZ(#{($i - 1) * -20}deg);
        
        .space_field.satellite {
          animation: orbit 2000ms + 400 * $i linear infinite;

          .planet {
            // left: 100% + ($i - 1) * 0;
            animation: planet 2000ms + 400 * $i linear infinite;
            background: rgba(random(255), random(255), random(255), 1);
          }
        }
      }
    }
  }
}

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotateY(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateY(360deg);
  }
}

@keyframes planet {
  0% {
    transform: translate(-50%, -50%) rotateY(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateY(-360deg);
  }
}

</style>
