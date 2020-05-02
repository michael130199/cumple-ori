<template>
  <div class="panda-work">

    <div class="container-1">

      <div class="panda-container">
        <div class="panda-head"></div>
        <div class="panda-ear-left"></div>
        <div class="panda-ear-right"></div>
        <div class="panda-eye-left"></div>
        <div class="panda-eye-right"></div>
        <div class="panda-muzzle"></div>
        <div class="panda-body-container">
          <div class="panda-body"></div>
        </div>
        <div class="panda-hand-left"></div>
        <div class="panda-hand-right"></div>

      </div>

      <div class="table"></div>
      <div class="laptop"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'PandaWork'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $panda-color-black: #576574;
$panda-color-white: #c8d6e5;
$table-color: #485460;
$laptop-color: #1e272e;

/* Panda Syntax Colors */
$red: #F0597C;
$green: #28FDDA;
$yellow: #FEDC89;
$magenta: #AF86EB;
$blue: #70B3FB;
$cyan: #6BD2C2;

$z-index: (
	muzzle  : 9000,
	eye     : 8000,
	head    : 7000,
	ear     : 6000,
	hand    : 5000,
	body    : 4000,
	table   : 3000,
	laptop  : 2000
);

@function z($label) {
    @return map-get($z-index, $label);
}

@mixin circle($size) {
    width: $size;
    height: $size;
    border-radius: 50%;
}

@mixin ellipse($width, $height) {
    width: $width;
    height: $height;
    border-radius: 50%;
}

@mixin content {
    position: absolute;
    content: '';
}

* {
    transition: 300ms;
}


.container-1 {
    position: relative;
    min-width: 800px;
    height: 800px;
    transform: scale(1);
    display: flex;
    justify-content: center;
}

.panda-container {
    position: absolute;
    width: 600px;
    height: 600px;
    bottom: 7.5%;
    transform: scale(1);
}

%panda-ear {
    @include circle(130px);
    background-color: $panda-color-black;
    @include content;
    top: 10%;
    z-index: z(ear);
}

.panda-ear-left {
    @extend %panda-ear;
    left: 22.5%;
}

.panda-ear-right {
    @extend %panda-ear;
    right: 22.5%;
}

.panda-head {
    margin: 0 auto;
    position: relative;
    top: 15%;
    transform: scale(1);
    @include circle(275px);
    background-color: $panda-color-white;
    z-index: z(head);
    box-shadow: inset 60px 0px 0 rgba(black, 0.3);
}

%panda-eye {
    @include ellipse(95px, 110px);
    border-radius: 50% 45% 45% 50%;
    background-color: $panda-color-black;
    position: absolute;
    top: 30%;
    z-index: z(eye);

    &:after {
        background-color: $panda-color-white;
        @include circle(35px);
        @include content;
        top: 50%;
        animation: blink 5s ease-in infinite;
    }
}

.panda-eye-left {
    @extend %panda-eye;
    left: 30%;

    &:after {
        left: 35%;
    }
}

.panda-eye-right {
    @extend %panda-eye;
    right: 30%;

    &:after {
        right: 35%;
    }
}

.panda-muzzle {
    background-color: $panda-color-white;
    @include ellipse(110px, 120px);
    position: absolute;
    top: 40.75%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 70% 70% 50% 50%;
    z-index: z(muzzle);
    box-shadow: inset -5px -15px 0 rgba(black, 0.3);

    &:after {
        background-color: $panda-color-black;
        @include content;
        @include circle(50px);
        border-radius: 50% 50% 10px 25px;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: 0;
        transform: rotate(45deg) translate(-50%, -50%);
        box-shadow: inset -10px -5px 0 rgba(black, 0.2);

    }

    &:before {
        background-color: $panda-color-black;
        @include content;
        width: 20%;
        height: 35%;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0%);
    }
}

.panda-body-container {
    position: absolute;
    height: 300px;
    width: 350px;
    overflow: hidden;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0%);
}

.panda-body {
    background-color: $panda-color-white;
    @include ellipse(350px, 450px);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 30%);
    z-index: z(body);
    box-shadow: inset 60px 0px 0 rgba(black, 0.3);
}

%panda-hand {
    @include circle(90px);
    background-color: $panda-color-black;
    position: absolute;
    bottom: 5%;
    z-index: z(hand);
    box-shadow: inset 20px 20px 0 rgba(black, 0.3);
    animation: hand-move 0.7s ease-in-out infinite;
}

.panda-hand-left {
    @extend %panda-hand;
    left: 10%;
}

.panda-hand-right {
    @extend %panda-hand;
    right: 10%;
    animation-delay: -0.35s;
}

.laptop {
    background-color: $laptop-color;
    position: absolute;
    bottom: 7.5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50%;
    height: 30%;
    box-shadow: 0 0 200px 10px $cyan;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: z(laptop);
    animation: screen-light-change 30s infinite;
}

.table {
    background-color: $table-color;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 95%;
    height: 7.5%;
    transform: translate(-50%, 0);
    z-index: z(table);
}

/* Panda hover effects */
.panda-container:hover .panda-body,
.panda-container:hover .panda-head,
.panda-container:hover .panda-muzzle {
    background-color: $green;
}

.panda-container:hover .panda-muzzle:after,
.panda-container:hover .panda-muzzle:before {
    background-color: $blue;
}

.panda-container:hover .panda-ear-left,
.panda-container:hover .panda-ear-right,
.panda-container:hover .panda-hand-left,
.panda-container:hover .panda-hand-right {
    background-color: $yellow;
}

.panda-container:hover .panda-eye-left,
.panda-container:hover .panda-eye-right {
    background-color: $red;
}

.panda-container:hover .panda-eye-left:after,
.panda-container:hover .panda-eye-right:after {
    background-color: white;
}

.panda-container:hover .panda-hand-left {
    animation: hand-move 0.1s ease-in-out infinite;
}

.panda-container:hover .panda-hand-right {
    animation: hand-move 0.1s ease-in-out infinite;
    animation-delay: -0.075s;
}

/* Animations */
@keyframes hand-move {
    0% {
        transform: translatey(0);
    }

    50% {
        transform: translatey(20px);
    }

    100% {
        transform: translatey(0);
    }
}

@keyframes blink {
    0% {
        transform: scaley(1);
    }

    2.5% {
        transform: scaley(0);
    }

    5% {
        transform: scaley(1);
    }
}

@keyframes screen-light-change {
    0% {
        box-shadow: 0 0 200px 10px $blue;
    }

    20% {
        box-shadow: 0 0 200px 10px $blue;
    }

    25% {
        box-shadow: 0 0 200px 10px $cyan;
    }

    45% {
        box-shadow: 0 0 200px 10px $cyan;
    }

    50% {
        box-shadow: 0 0 200px 10px transparentize($magenta, 0.5);
    }

    70% {
        box-shadow: 0 0 200px 10px transparentize($magenta, 0.5);
    }

    75% {
        box-shadow: 0 0 200px 10px transparentize($green, 0.8);
    }

    95% {
        box-shadow: 0 0 200px 10px transparentize($green, 0.8);
    }

    100% {
        box-shadow: 0 0 200px 10px $cyan;
    }
}
</style>
