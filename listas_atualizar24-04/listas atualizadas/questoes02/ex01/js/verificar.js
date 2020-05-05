// GABARITO                 
var R = ['a', 'e'];

//Todas as alternativas
var alternativas = ['a', 'b', 'c', 'd', 'e'];

function alternativaMarcada(){
    var alternativas = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < alternativas.length; i++){
        if(alternativas[i].checked){
            return true;
        }
    }
    return false;
}
var erradas;
function modificarVetor(){
    for(let i = 0; i < R.length; i++){
        var pos = alternativas.indexOf(R[i]);
        if(pos != -1){
            alternativas.splice(pos, 1);
        }
    }
    erradas = alternativas.slice();
}
modificarVetor();

function verificar(){
    var op = true;
    for(let i = 0; i < R.length; i++){
        alternativa = document.getElementById(R[i]);
        if(alternativa.checked != true)op = false;
    }
    for(let i = 0; i < erradas.length; i++){
        alternativa = document.getElementById(erradas[i]);
        if(alternativa.checked == true)op = false;
    }
    return op;
}

var confirmar = document.getElementById('confirmar');

confirmar.onclick = function(){
    var a = document.getElementById("avaliacao");
    if(alternativaMarcada() == true){
        if(verificar() == true){
            a.innerHTML = "Correto!";
            a.classList.remove("letra-pequena");
            a.classList.remove("errado");
            a.classList.add("correto");
        }
        else{
            a.innerHTML = "Tente outra vez...";
            a.classList.remove("letra-pequena");
            a.classList.remove("correto");
            a.classList.add("errado");
        }
    }
    else{
        a.innerHTML = "??";
        a.classList.remove("errado");
        a.classList.remove("correto");
        a.classList.add("letra-pequena");
    }
}

 document.querySelectorAll("input[type='checkbox']").forEach(item => {item.addEventListener("click", funcao => {
     var a = document.getElementById("avaliacao");
     a.textContent = "";
})});