var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var buttonChama = document.getElementById("chama");
var buttonRecomecar = document.getElementById('recomecar');

//Constantes
const x0 = 120;
const y0 = 150;
const wRect = 180;
const hRect = 32;
const tMax = 4;
const tMin = 0.3;
const f = 0.1;

//Variáveis
var chama = 0;
var t = 0.3;
var tIma = [tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin];

function recomeçar(){
    t = tMin;
    tIma = [tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin, tMin];
}

function chamarParticulas() {
    var k = 174;
    for(let i = 0; i < 22; i++){
        if(t < tMax){
            if(i < 3)tIma[i] = t;
            if(i >= 3)tIma[i] = tIma[i-1] - 0.1;
            if(tIma[i] < tMin)tIma[i] = tMin;
        }
        var p = 36;
        for(let l = 0; l < 4; l++){
            p -= 8;
            particle(x0 + k, y0 + p, tIma[i], 2, darkcolor);
        }
        k -= 8;
    }
}

buttonChama.onclick = function(){
    chama = 1;
}

buttonRecomecar.onclick = function(){
    chama = 0;
    recomeçar();
}

function controlarTemp(){
    setInterval(function(){if(t < tMax && chama == 1)t += f;}, 1000);
    setInterval(function(){if(t >= tMax){
        for(let i = 0; i < 22; i++){
            if(tIma[i] < tMax)tIma[i] += 0.1;
        }
    }}, 1000)
}
controlarTemp();

function desenhar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    rectangle(x0, y0, wRect, hRect, 1, 0, darkcolor, nocolor);
    bicoBunsen(x0 + wRect - 43, y0 + hRect + 48, 8, 10, chama);
    chamarParticulas();
    textStyle1("fonte térmica", 10, "Calibri", x0 + wRect - 54, y0 + hRect + 62, darkcolor);
    textStyle1("barra metálica", 10, "Calibri", x0 + wRect - 136, y0 + hRect - 37, darkcolor);
    animationFrame(desenhar);
}
draw(desenhar);