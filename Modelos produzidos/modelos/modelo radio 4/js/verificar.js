function alternativaMarcada(){
    var alternativas = document.querySelectorAll("input[type='radio']");
    for(let i = 0; i < alternativas.length; i++){
        if(alternativas[i].checked){
            return true;
        }
    }
    return false;
}

function verificar(altCorreta){
    var alternativa = document.getElementById(altCorreta);
    var a = document.getElementById("avaliacao");
    if(alternativaMarcada() == true){
        if(alternativa.checked){
            a.innerHTML = "Correto!";
            a.classList.remove("letra-pequena");
            a.classList.remove("errado");
            a.classList.add("correto");
        }
        else{
            a.innerHTML = "Errado...";
            a.classList.remove("letra-pequena");
            a.classList.remove("correto");
            a.classList.add("errado");
        }
    }
    else{
        a.innerHTML = "Marque uma alternativa antes de confirmar.";
        a.classList.remove("errado");
        a.classList.remove("correto");
        a.classList.add("letra-pequena");
    }
}

document.querySelectorAll("input[type='radio']").forEach(item => {item.addEventListener("click", funcao => {
    var a = document.getElementById("avaliacao");
    a.textContent = "";
})});