function confirmar(){	
	if(ang1 == R[j]){
		correcao = "Correto!";
	} else{
		correcao = "Errado!";
	}
}

function limpar(){		
	correcao = "";	
}

function proximo(){	
	if(correcao == "Correto!"){
		if(j < 8){
			correcao = "";
			j = j + 1;	
		}else{
			j = 8;
			correcao = "FIM!";
		}
	}	
}

//---------------------------------------------------------------------

function maisAng1(){
	if(ang1 < 360){
		document.getElementById("ang1").value = ang1 + 5;
	}
	limpar();
}
function menosAng1(){
	if(ang1 > -360){
		document.getElementById("ang1").value = ang1 - 5;
	}
	limpar();
}

function maisAng2(){
	if(ang1 < 360){
		document.getElementById("ang2").value = ang2 + 5;
	}
	limpar();
}
function menosAng2(){
	if(ang2 > -360){
		document.getElementById("ang2").value = ang2 - 5;
	}
	limpar();
}

//---------------------------------------------------------------------

