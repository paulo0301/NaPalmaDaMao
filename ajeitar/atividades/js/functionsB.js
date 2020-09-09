//QUADRO DE CORES
var corazul = '#0097e6';
var corEscala = '#20bf6b';
var corEixo = '#3867d6';
var corvermelho = '#fc5c65';
var corvermelho2 = '#e74c3c';
var corverde = '#009432';
var corBorda = '#bdc3c7';
var corLaranja = '#ff5d00';
//--------------------------
var x = 20; 
var y = 80;
var x0 = 300 + x;
var x1 = x0; 
var x2 = x1;
var Q = 0;
var soma = 0;
var dx = 0;
var ang;
var xs;
var operador = '';
var xt = 103;
var yt = 145;
var pm;
var validar_resposta = false;
var acerto = false;
var texto = '';
var xResposta;
var corR;
//--------------------------
function avancar1(){	
	if(x1 < x0 + 300){		
		x1 = x1 + 30;
		x2 = x1 + Q;
		if(x2 >= x0 + 300){
			x2 = x0 + 300;
			Q = x2 - x1;
		}
		validar_resposta = false;	
		clear();	
		desenhar();	
	}
		
}

function recuar1(){
	if(x1 > x0 - 300){		
		x1 = x1 - 30;
		x2 = x1 + Q;
		if(x2 <= x0 - 300){
			x2 = x0 - 300;
			Q = x2 - x1;
		}	
		validar_resposta = false;	
		clear();
		desenhar();	
	}
}

function avancar2(){
	if(x2 < x0 + 300){
		Q = Q + 30;
		x2 = x1 + Q;
		validar_resposta = false;	
		clear();		
		desenhar();	
	}
}

function recuar2(){
	if(x2 > x0 - 300){
		Q = Q - 30;
		x2 = x1 + Q;
		validar_resposta = false;	
		clear();		
		desenhar();	
	}
}

function equacao(x,y){
	var x; y;
	var dxS;
	var dx1;
	//
	if(Math.abs(soma) >= 10){ 
		dxS = -7; 
	}else{ 
		dxS = 0;
	};
	//
	if(N1 < 0){ 
		if(N1 > -10){
			dx1 = -7; 
		}
		if(N1 <= -10){
			dx1 = -12; 
		}
	}else{ 
		dx1 = 0;
	};	
	//
	rectangleRound(x - 30, y + 18, 200, 50, 10, 2.5, '#7f8c8d', nocolor);
	textBold(N1, '14', 'verdana', x + dx1, y, corazul);
	textBold(sinal, '14', 'verdana', x + 30, y, darkcolor);	
	textBold(Math.abs(soma), '14', 'verdana', x + 60  + dxS, y, corverde);
	textBold('=', '14', 'verdana', x + 90, y, darkcolor);	
	textBold(N2, '14', 'verdana', x + 120, y, corLaranja);
}

function confirmar(){	
	validar_resposta = true;
	if(x1 == 320 + Numero*30 && x2 == 320 + Resultado*30){
		xResposta = 410;
		texto = "Correto!";		
		corR = '#3399ff';
		R = Resultado;	
	} else{
		xResposta = 360;
		texto = "Tente novamente...";	
		corR = '#e62e00';
		R = '?';	
	}	
	clear();		
	desenhar();		
}