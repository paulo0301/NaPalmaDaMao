/* GABARITO ----------------------------------*/
//[01, 02, 03, 04, 05]
var R = [1, 2, 3, 4, "texto"];
/* -------------------------------------------*/

// Variáveis correspondente as respostas
var acertos = 0;
var erros = 0;

//Mensagens
// var m01 = document.getElementById("m01");
// var m02 = document.getElementById("m02");
// var m03 = document.getElementById("m03");
// var m04 = document.getElementById("m04");

// function ocultarMensagens(){
//     m01.style.display = "none";
//     m02.style.display = "none";
//     m03.style.display = "none";
//     m04.style.display = "none";
// }

//Verificar se a resposta está correta
function verificarRespostas(){
    for(let i = 1; i < 6; i++){
        var elemento = document.querySelector("span#rs0"+i);   
        var resposta = document.getElementById("0"+i);
        elemento.innerHTML = "";
        var img = document.createElement("img");
        elemento.appendChild(img);
        if(resposta.value != ""){
            if(R[i-1] == resposta.value){
                img.setAttribute("src", "images/correct-symbol.png");
                resposta.disabled = true;
                acertos++;
            }
            else{
                img.setAttribute("src", "images/cancel-mark.png");
                erros++;
            }
        }
    }
}
//EXIBIR MENSAGEM
// function exibirMensagem(){
//     ocultarMensagens();
//     //Acertou todas
//     if(acertos == 5){
//         m04.style.display = "block";
//     }
//     // Digitou em todas caixas, mas não acertou nenhuma
//     if(acertos == 0 && vazias == 0 && erros > 0){
//         m01.style.display = "block";
//     }
//     // Não digitou em todas as caixas
//     if(vazias > 0 && (erros != 0 || acertos != 0)){
//         m02.style.display = "block";
//     }
//     // Digitou em todas as caixas, mas não acertou todas
//     if(vazias == 0 && acertos != 5 && erros != 5){
//         m03.style.display = "block";
//     }
//     // Não digitou em nenhuma caixa
//     if(vazias == 5){
//         m02.style.display = "block";
//     }
// }


//Limpar a resposta
function limparRespostas(){
    for(let i = 1; i < 6; i++){
        var caixa = document.getElementById("0"+i);
        if(caixa.value == R[i-1])caixa.disabled = true;
        else{
            caixa.disabled = false;
            var avaliacao = document.getElementById("rs0"+i);
            avaliacao.innerHTML = "";
            var opt = caixa.getElementsByTagName("option");
            caixa.value = opt[0].value;
        } 
    }
}

var verificar = document.querySelector("input#confirmar");
var limpar = document.querySelector("input#limpar");
var refazer = document.querySelector("input#refazer");

limpar.onclick = function(){
    limparRespostas();
    // ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
}

refazer.onclick = function(){
    for(let i = 1; i < 6; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = false;
        var avaliacao = document.getElementById("rs0"+i);
        avaliacao.innerHTML = "";
        var opt = caixa.getElementsByTagName("option");
        caixa.value = opt[0].value;
    }
    // ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
    refazer.style.display = "none";
}

verificar.onclick = function(){
    acertos = 0;
    erros = 0;
    verificarRespostas();
    if(acertos != 5){
        limpar.style.display = "inline-block";
        verificar.style.display = "none";
    }
    if(acertos == 5){
        refazer.style.display = "inline-block";
        verificar.style.display = "none";
    }
    // exibirMensagem();
    travarTodas();
}

function travarTodas(){
    for(let i = 1; i < 6; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = true;
    }
}