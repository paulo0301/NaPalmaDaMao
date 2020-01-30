function verificar(num, den){
    var numTxt = document.getElementById("num").value;
    var denTxt = document.getElementById("den").value;
    var a = document.getElementById("avaliacao");
    if(numTxt == num && denTxt == den){
        a.innerHTML = "Correto!";
        a.classList.remove("errado");
        a.classList.add("correto");
    }
    else{
        a.innerHTML = "Errado...";
        a.classList.remove("correto");
        a.classList.add("errado");
    }
}


var limpar = document.getElementById("limpar");

limpar.onclick = function(){
    var numTxt = document.getElementById("num");
    var denTxt = document.getElementById("den");
    var a = document.getElementById("avaliacao");
    numTxt.value = "";
    denTxt.value = "";
    a.innerHTML = "";
}