/* GABARITO ----------------------------------*/
var R = [625, 225, 144, 900, 400];
/* -------------------------------------------*/

// Variáveis correspondente as respostas
var acertos = 0;
var erros = 0;
var vazias = 0;

//Verificar se a resposta está correta
function verificarResposta(correta, questao){
    var elemento = document.querySelector("span#rs"+questao);   
    var resposta = document.getElementById(questao);
    elemento.innerHTML = "";
    var img = document.createElement("img");
    elemento.appendChild(img);
    if(resposta.value != ""){
        if(correta == resposta.value){
            img.setAttribute("src", "imagens/correct-symbol.png");
            resposta.disabled = true;
            acertos++;
        }
        else{
            img.setAttribute("src", "imagens/cancel-mark.png");
            erros++;
        }
    }
    else if(resposta.value == " " || resposta.value == "") vazias++;
}

//EXIBIR MENSAGEM
function exibirMensagem(){
    var m01 = document.getElementById("m01");
    var m02 = document.getElementById("m02");
    var m03 = document.getElementById("m03");
    m01.style.display = "none";
    m02.style.display = "none";
    m03.style.display = "none";
    //Acertou Todas


    
    // Não acertou nenhuma
    if(acertos == 0 && vazias != 0 && erros > 0){
        m01.style.display = "block";
    }
    // Não digitou em todas as caixas
    if(vazias > 0 && (erros != 0 || acertos != 0)){
        m02.style.display = "block";
    }
    // Digitou em todas as caixas, mas não acertou todas
    if(vazias == 0 && acertos != 5){
        m03.style.display = "block";
    }
    // Não digitou em nenhuma caixa
    if(vazias == 5){
        m02.style.display = "block";
    }
}


//Limpar a resposta
function limparRespostas(questao){
    var elemento = document.querySelector("span#rs"+questao);
    var resposta = document.getElementById(questao);
    if(resposta.disabled != true || acertos === 5){
        elemento.innerHTML = null;
        resposta.value = null;
        resposta.disabled = false;
    }
}

var verificar = document.querySelector("input#confirmar");
var limpar = document.querySelector("input#limpar");

limpar.onclick = function(){
    limparRespostas("01");
    limparRespostas("02");
    limparRespostas("03");
    limparRespostas("04");
    limparRespostas("05");
    var m01 = document.getElementById("m01");
    var m02 = document.getElementById("m02");
    var m03 = document.getElementById("m03");
    m01.style.display = "none";
    m02.style.display = "none";
    m03.style.display = "none";
}

verificar.onclick = function(){
    acertos = 0;
    erros = 0;
    vazias = 0;
    verificarResposta(R[0], '01');
    verificarResposta(R[1], "02");
    verificarResposta(R[2], "03");
    verificarResposta(R[3], "04");
    verificarResposta(R[4], "05");
    console.log(vazias);
    if(vazias != 5){
        limpar.style.display = "inline-block";
    }
    exibirMensagem();
}