var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var buttonChama = document.getElementById("chama");
//Constantes
const x0 = 230;
const y0 = 150;
const wRect = 180;
const hRect = 32;
const tMax = 8;
const tMin = 0.5;
const f = 0.1;
//Variáveis
var chama = 0;
var t = 0.5;
var tIma;

function chamarParticulas() {
    var k = 174;
    for(let i = 0; i < 22;i++){
        if(i < 4){
            tIma = t;
        }
        if(i > 4){
            tIma -= 0.1;
        }
        if(t > 4 && tIma < tMin)tIma = tMin;
        var p = 36;
        for(let l = 0; l < 4; l++){
            p -= 8;
            particle(x0 + k, y0 + p, tIma, 2, darkcolor);
        }
        k -= 8;
    }
}

buttonChama.onclick = function(){
    if(chama == 0){
        chama = 1;
        buttonChama.innerText = "Desligar";
    }
    else{
        chama = 0;
        buttonChama.innerText = "Ligar";
    }
    controlarTemp();
}

function controlarTemp(){
    setInterval(function(){if(t < tMax && chama == 1)t += f;}, 1500); 
    setInterval(function(){if(t > tMin && chama == 0)t -= f}, 1500);
}

function desenhar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    rectangle(x0, y0, wRect, hRect, 1, 0, darkcolor, nocolor);
    bicoBunsen(x0 + wRect - 43, y0 + hRect + 48, 8, 10, chama);
    chamarParticulas(); 
    console.log("t = "+ t);
    console.log("tIma = " + t);
    animationFrame(desenhar);
}

draw(desenhar);