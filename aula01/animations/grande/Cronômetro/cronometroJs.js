//iniciarCronometro(); - Dentro da função que inicia a animação
//zerarCronometro(); - Dentro da função que retorna a animação ao início
//timeValue = 0; - Dentro da função que retorna a animação ao início
/* Linhas de códido dentro da função "desenhar".
if(validarCronometro == true){		
	timeValue = cronometro();
}	
textBold(timeValue.toFixed(2) + ' s', '8','verdana',xcron,ycron + 20,darkcolor);	
*/
//-----------------------------------------------------------------
var t0 = 0;
var dt = 0;
var tempoDecorrido = 0;
var tempo = 0;
var validarCronometro = false;
var timeValue = 0;
//FUNÇÃO CRONÔMETRO
function cronometro(){	
	var tempoAtual = new Date();
	dt = tempoAtual.getTime() - t0;	
	tempoR = tempoDecorrido + dt;
	tempo = tempoR/1000		
	return tempo;
}

//INICIAR CRONÕMETRO
function iniciarCronometro(){
	if(validarCronometro == false){
		validarCronometro = true;
		//CRONÔMETRO -------->	
		var d0 = new Date();
		t0 = d0.getTime();	
		// ------------------>	
		
	}else{
		validarCronometro = false;
		//CRONÔMETRO -------->	
		tempoDecorrido = tempoR;	
		// ------------------>	
	}
}

function zerarCronometro(){	
	validarCronometro = false;
	tempo = 0;
	tempoDecorrido = 0;
}