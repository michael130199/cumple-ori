document.addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
        if (nivel.kill == false) {
            if (panda.saltando != true && nivel.marcador <= 31) saltar();           
        } else {
           resetGame();
        }
    }
});

// Canvas

var imgPanda, imgNube, imgNube2, imgCukace, imgSuelo, imgOso, imgCatus; 
var imgPanda2,imgPandita,imgDino,imgCumple,imgPiano,imgBanbu, imgDino2;

function loadImage () {
    imgPanda = new Image();
    imgNube = new Image();
    imgNube2 = new Image();
    imgCukace = new Image();
    imgSuelo = new Image();
    imgOso = new Image();
    imgPanda2 = new Image();
    imgPandita = new Image();
    imgDino = new Image();
    imgCumple = new Image();
    imgPiano = new Image();
    imgBanbu = new Image();
    imgDino2 = new Image();
    imgCatus = new Image();

    imgPanda.src = 'img/personaje.jpg';
    imgNube.src = 'img/nube.jpg';
    imgNube2.src = 'img/nube2.jpg';
    imgCukace.src = 'img/cupcake.jpg';
    imgSuelo.src = 'img/suelo.jpg';
    imgPanda2.src = 'img/panda2.png';
    imgOso.src = 'img/gameover.jpg';
    imgPandita.src = 'img/pandita.png';
    imgDino.src = 'img/dino.jpg';
    imgCumple.src = 'img/cumple.jpg';
    imgPiano.src = 'img/piano.jpg';
    imgBanbu.src = 'img/banbu.jpg';
    imgDino2.src = 'img/dino2.jpg';
    imgCatus.src = 'img/catus.png';
}

var ancho = 700;
var alto = 300;
var canvas, ctx;

function resetGame () {
    nivel.velocidad = 5;
    nivel.kill = false;
    nivel.marcador = 0;
    nube.velocidad = 2;
    nube.x = ancho + 300;
    nube2.velocidad = 3;
    nube2.x = ancho + 100;
    cupcake.x = ancho + 100;
    banbu.x = ancho + 300;
}

export default {
    initialize (element) {
        canvas = element;
        ctx = canvas.getContext('2d');
        loadImage();
    }
}

function deleteCanvas () {
    canvas.width = ancho;
    canvas.height = alto;
}

var suelo = 200;

var cupcake = {
    x: ancho + 100,
    y: suelo
};

var banbu = {
    x: ancho + 300,
    y: suelo
};

var nube = {
    x: ancho + 300,
    y: 0,
    velocidad: 2
};

var nube2 = {
    x: ancho + 100,
    y: 50,
    velocidad: 3
};

// vy = velocidad vertical vymax = velocidad maxima
var panda = {
    y: suelo,
    vy: 0,
    gravedad: 2,
    salto: 28,
    vymax: 9,
    saltando: false
};

var nivel = {
    velocidad: 5, 
    marcador: 0,
    kill: false
};

var suelog = {
    x: 0,
    y: suelo + 50
};

function dibujarCumple () {
    ctx.drawImage(imgCumple,0,0,1058,1123,0,0,700,300);
    nivel.velocidad = 0;
    nivel.kill = false;
    nube.velocidad = 0;
    nube2.velocidad = 0;
}

function dibujarPandita () {
    ctx.drawImage(imgPandita,0,0,225,225,0,0,50,50);
}

function dibujarOso () {
    ctx.drawImage(imgOso,0,0,266,189,350,152,50,50);
}

function dibujaSuelo () {
    if (nivel.marcador > 20) {
        ctx.drawImage(imgPiano,suelog.x,0,600,88,0,suelog.y,770,30);
    } else {
        ctx.drawImage(imgSuelo,suelog.x,0,650,76,0,suelog.y,700,30);
    }
}

function dibujaNube () {
    ctx.drawImage(imgNube,0,0,217,111,nube.x,nube.y,100,100);
}

function dibujaNube2 () {
    ctx.drawImage(imgNube2,0,0,511,300,nube2.x,nube2.y,80,80);
}

function dibujaCupcake () {
    if (nivel.marcador > 12) {
        ctx.drawImage(imgCukace,0,0,142,223,cupcake.x,cupcake.y,50,80);
    } else {
        ctx.drawImage(imgCatus,0,0,134,225,cupcake.x,cupcake.y,50,80);
    }
}

function dibujaBanbu () {
    if (nivel.marcador > 12) {
        ctx.drawImage(imgBanbu,0,0,687,996,banbu.x,banbu.y,50,80);
    } else {
        ctx.drawImage(imgCatus,0,0,134,225,banbu.x,banbu.y,50,80);
    }
}

function dibujaPanda () {
    if (nivel.kill != true) {
        if (nivel.marcador > 16) {
            ctx.drawImage(imgPanda,0,0,202,311,100,panda.y,50,80);
        } else {
            ctx.drawImage(imgDino,0,0,538,456,100,panda.y,50,70);
        }
    } else {
        if (nivel.marcador > 16) {
            ctx.drawImage(imgPanda2,0,0,225,225,100,panda.y,50,80);
        } else {
            ctx.drawImage(imgDino2,0,0,168,107,100,panda.y,60,100);
        }
    }
}

function colision () {
    if ((cupcake.x >= 100 && cupcake.x <= 150) || (banbu.x >= 100 && banbu.x <= 150)) {
        if (panda.y >= suelo - 15) {
            nivel.kill = true;
            nivel.velocidad = 0;
            nube.velocidad = 0;
            nube2.velocidad = 0;
        }
    }
}

function saltar () {
    panda.saltando = true;
    panda.vy = panda.salto;
}

function puntuacion () {
    ctx.font = "30px impact";
    ctx.fillStyle = '#555555';
    ctx.fillText(`${nivel.marcador}`, 600,50);

    if (nivel.marcador >= 16) {
        nivel.velocidad = 6;
    }

    if (nivel.marcador >= 32) {
        dibujarCumple();
    }

    if (nivel.kill == true) {
        ctx.font = "60px impact";
        ctx.fillText(`GAME OVER`, 240,150);
        dibujarOso();
    }
}

function gravedad () {
    if (panda.saltando == true) {

        if (panda.y - panda.vy -panda.gravedad > suelo) {

            panda.saltando = false;
            panda.y = suelo;
            panda.vy = 0;

        } else {

            panda.vy -= panda.gravedad;
            panda.y -= panda.vy;

        }
    }
}

function logicCupcake () {

    if (cupcake.x < -100) {
        cupcake.x = ancho + 300;
        nivel.marcador++;
    } else {
        cupcake.x -= nivel.velocidad;
    }
}

function logicBanbu () {

    if (banbu.x < -100) {
        banbu.x = ancho + 350;
        nivel.marcador++;
    } else {
        banbu.x -= (nivel.velocidad);
    }
}

function logicNube () {

    if (nube.x < -100) {
        nube.x = ancho + 100;
    } else {
        nube.x -= nube.velocidad;
    }
}

function logicNube2 () {

    if (nube2.x < -100) {
        nube2.x = ancho + 100;
    } else {
        nube2.x -= nube.velocidad;
    }
}

function logicSuelo () {
    if (suelog.x > 50) {
        suelog.x = 0;
    } else {
        suelog.x += nivel.velocidad;
    }
}


// Bucle principal
var FPS = 40;

setInterval(function () {
    main()
}, 1000/FPS );

function main () {
    deleteCanvas();
    gravedad();
    colision();
    logicSuelo();
    dibujaSuelo();
    logicNube();
    logicNube2();
    dibujaNube();
    dibujaNube2();
    logicBanbu();
    dibujaBanbu();
    logicCupcake();
    dibujaCupcake();
    dibujaPanda();
    puntuacion();
    dibujarPandita();
}