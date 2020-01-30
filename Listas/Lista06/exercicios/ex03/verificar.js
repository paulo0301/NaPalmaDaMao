/* GABARITO ----------------------------------*/
var R = [3, 7, 125, 3.2, 7.5];
/* -------------------------------------------*/

//Verificar se a resposta está correta
function verificarResposta(correta, questao){
    var elemento = document.querySelector("span#rs"+questao);
    var resposta = document.querySelector("input#ex"+questao);
    elemento.innerHTML = "";
    var img = document.createElement("img");
    elemento.appendChild(img);
    if(resposta.value != ""){
        if(correta == resposta.value){
            img.setAttribute("src", "../../imagens/correct-symbol.png");
            resposta.disabled = true;
            return 1;
        }
        else{
            img.setAttribute("src", "../../imagens/cancel-mark.png");
            return 0;
        }}
        else return 0;
    }
    
    //Limpar a resposta
    function limparRespostas(questao){
        var elemento = document.querySelector("span#rs"+questao);
        var resposta = document.querySelector("input#ex"+questao);
        if(resposta.disabled != true || acertos === 5){
            elemento.innerHTML = null;
            resposta.value = null;
            resposta.disabled = false;
        }
    }
    
    var verificar = document.querySelector("input#confirmar");
    var limpar = document.querySelector("input#limpar");
    var acertos = 0;
    
    limpar.onclick = function(){
        limparRespostas("01");
        limparRespostas("02");
        limparRespostas("03");
        limparRespostas("04");
        limparRespostas("05");
        console.log(acertos);
    }
    
    verificar.onclick = function(){
        acertos = 0;
        acertos += verificarResposta(R[0], "01");
        acertos += verificarResposta(R[1], "02");
        acertos += verificarResposta(R[2], "03");
        acertos += verificarResposta(R[3], "04");
        acertos += verificarResposta(R[4], "05");
    }