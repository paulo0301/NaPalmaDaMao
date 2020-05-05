/* GABARITO ----------------------------------*/
//[01, 02]
var R1 = [1 , 1]
var R2 = [6 , 6]
/* -------------------------------------------*/
//Mensagens
var m02 = document.getElementById("m02");
var m03 = document.getElementById("m03");
var m04 = document.getElementById("m04");

function ocultarMensagens(){
    m02.style.display = "none";
    m03.style.display = "none";
    m04.style.display = "none";
}
//Verificar se a resposta está correta
function verificarRespostas(){   
    ocultarMensagens();
    var resposta1 = document.getElementById("01");
    var resposta2 = document.getElementById("02");
    if(resposta1.value == "" || resposta1.value == " " || resposta2.value == "" || resposta2.value == " "){
        m02.style.display = "block";
        travarTodas();
        verificar.style.display = "none";
        limpar.style.display = "inline-block";
    }
    else if((resposta1.value == R1[0] && resposta2.value == R1[1]) || (resposta1.value == R2[0] && resposta2.value == R2[1])){
        m04.style.display = "block";
        verificar.style.display = "none";
        refazer.style.display = "inline-block";
        comentario();
    }
    else{
        verificar.style.display = "none";
        limpar.style.display = "inline-block"
        m03.style.display = "block";
    }
}

//Limpar a resposta
function limparRespostas(){
    for(let i = 1; i < 3; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = false;
        caixa.value = "";
    }
}

var verificar = document.querySelector("input#confirmar");
var limpar = document.querySelector("input#limpar");
var refazer = document.querySelector("input#refazer");

limpar.onclick = function(){
    limparRespostas();
    ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
    clear();
}

refazer.onclick = function(){
    for(let i = 1; i < 3; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = false;
        var avaliacao = document.getElementById("rs0"+i);
        avaliacao.innerHTML = "";
        caixa.value = "";
    }
    ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
    refazer.style.display = "none";
    clear();
}

verificar.onclick = function(){
    verificarRespostas();
    travarTodas();
}

function travarTodas(){
    for(let i = 1; i < 3; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = true;
    }
}
var xf = 170;
var yf = 130;
function comentario(){
    fraction(xf, yf, 6, 6, darkcolor);
    textBold('=', '10', 'verdana', xf + 25, yf + 12, darkcolor);
    fraction(xf + 50, yf, 1, 1, darkcolor);
}