/* GABARITO ----------------------------------*/
var R = [125, 20, 75, 4, 12];
/* -------------------------------------------*/

function verificarResposta(correta, questao){
    var elemento = document.querySelector("span#rs"+questao);
    var resposta = document.querySelector("input#ex"+questao);
    elemento.innerHTML = "";
    var img = document.createElement("img");
    elemento.appendChild(img);
    if(resposta.value != ""){
        if(correta == resposta.value){
            img.setAttribute("src", "imagens/correct-symbol.png");
            resposta.disabled = true;
            elemento.className = "respCorreta";
            return 1;
        }
        else{
            img.setAttribute("src", "imagens/cancel-mark.png");
            elemento.className = "respErrada";
            return 0;
        }
    }
    else return 0;
}

function limparRespostas(questao){
    var elemento = document.querySelector("span#rs"+questao);
    var resposta = document.querySelector("input#ex"+questao);
    elemento.innerHTML = null;
    resposta.value = null;
    resposta.disabled = false;
}

verificar = document.querySelector("input#confirmar");
limpar = document.querySelector("input#limpar");
acertos = document.querySelector("p#acertos");
erros = document.querySelector("p#erros");
const qtdQuestoes = 5;

limpar.onclick = function(){
    limparRespostas("01");
    limparRespostas("02");
    limparRespostas("03");
    limparRespostas("04");
    limparRespostas("05");
    acertos.innerHTML = null;
    erros.innerHTML = null;
}

verificar.onclick = function(){
    var numAcertos = 0;
    numAcertos += verificarResposta(R[0], "01");
    numAcertos += verificarResposta(R[1], "02");
    numAcertos += verificarResposta(R[2], "03");
    numAcertos += verificarResposta(R[3], "04");
    numAcertos += verificarResposta(R[4], "05");
    acertos.innerHTML = numAcertos;
    erros.innerHTML = qtdQuestoes - numAcertos;
}

