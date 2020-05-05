//QUADRO DE CORES

var vermelho1 = '#fc5c65';
var vermelho2 = '#e74c3c';
var verde = '#27ae60';
var corBorda = '#bdc3c7';
var storme = '#8395a7';
var concreto = '#95a5a6';
var prata = '#dfe6e9';
var transp = '#ecf0f1';
var carro = '#3498db';
//--------------------------
//POSIÇÃO DO CRONÔMETRO -------------->
var xcron = 280;
var ycron = 25;//---------------------
function iniciar(){	
	iniciarCronometro();
}
//
function voltar(){		
	zerarCronometro();
	timeValue = 0;
	px1 = px01;
	px2 = px02;
}


function textoGirar(texto, x, y, rotation, color){
	var texto; x; y; rotation; color;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	textBold(texto, '11','verdana',x, y, color);	
	//
	ctx.restore();
}	
