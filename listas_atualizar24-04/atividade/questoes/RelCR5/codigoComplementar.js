var xE = 100; 		//POSIÇÃO X DA PRIMEIRA COLUNA
var xD = xE + 200;  //POSIÇÃO X DA SEGUNDA COLUNA
var y0 = 70;        //POSIÇÃO INICIAL EM Y
var dy = 80;        //ESPAÇAMENTO VERTICAL DOS PONTOS (NÃO PODE SER MENOR QUE R)

// NÃO ALTERAR O CÓDIGO ABAIXO --------------------------------------------------------
// NÃO ALTERAR O CÓDIGO ABAIXO --------------------------------------------------------
var R = 30; //ÁREA DE ARRASTE
var D1 = 15; //PONTOS ESQUERDA/DIREITA
var D2 = 15	; //PONTO MÓVEL
var DR = 35;
var corCirculoE = 'rgba(46, 134, 222,0.3)'; //COR CÍRCULOS DO LADO ESQUERDO
var corCirculoD = 'rgba(1, 163, 164,0.3)'; //COR CÍRCULOS DO LADO DIREITO
// - NÃO ALTERAR DAQUI PARA BAIXO -
var xp = [xE, xE, xE, xE, xE];
var yp = [y0, y0 + dy, y0 + 2*dy, y0 + 3*dy, y0 + 4*dy];
//
var x = 0;
var y = 0;
var validar_arrastar1 = false;
var validar_arrastar2 = false;
var validar_arrastar3 = false;
var validar_arrastar4 = false;
var validar_arrastar5 = false;
var validar_arrastar1b = true;
var validar_arrastar2b = true;
var validar_arrastar3b = true;
var validar_arrastar4b = true;
var validar_arrastar5b = true;
var x1 = xE;
var x2 = xE;
var x3 = xE;
var x4 = xE;
var x5 = xE;
var y1 = yp[0];
var y2 = yp[1];
var y3 = yp[2];
var y4 = yp[3];
var y5 = yp[4];
var b = 7;
var A1 = true;
var A2 = true;
var A3 = true;
var A4 = true;
var A5 = true;
var dx = [0,0,0,0,0,0];
var dy = [0,0,0,0,0,0];
//FUNÇÃO UTILIZADA APENAS COM TOUCH -------------------
function touchCell(event){

	x = event.touches[0].clientX;
	y = event.touches[0].clientY;
	if(validar_arrastar1b == true && A1 == true){
		if(x > x1 - R && x < x1 + R && y < y1 + R && y > y1 - R){	
			x1 = x;
			y1 = y;	
			dx[1] = -5;
			dy[1] = -5;
			//
			A2 = false;
			A3 = false;
			A4 = false;
			A5 = false;
		}	
		
	}
	
	if(validar_arrastar2b == true && A2 == true){
		if(x > x2 - R && x < x2 + R && y < y2 + R && y > y2 - R){	
			x2 = x;
			y2 = y;	
			dx[2] = -5;
			dy[2] = -5;
			A1 = false;
			A3 = false;
			A4 = false;
			A5 = false;
		}
		
	}
	
	if(validar_arrastar3b == true && A3 == true){
		if(x > x3 - R && x < x3 + R && y < y3 + R && y > y3 - R){	
			x3 = x;
			y3 = y;	
			dx[3] = -5;
			dy[3] = -5;
			A1 = false;
			A2 = false;
			A4 = false;
			A5 = false;	
		}
			
	}
	
	if(validar_arrastar4b == true && A4 == true){
		if(x > x4 - R && x < x4 + R && y < y4 + R && y > y4- R){	
			x4 = x;
			y4 = y;	
			dx[4] = -5;
			dy[4] = -5;
			A1 = false;
			A2 = false;
			A3 = false;
			A5 = false;
		}
		
	}
	
	if(validar_arrastar5b == true && A5 == true){
		if(x > x5 - R && x < x5 + R && y < y5 + R && y > y5 - R){	
			x5 = x;
			y5 = y;	
			dx[5] = -5;
			dy[5] = -5;
			A1 = false;
			A2 = false;
			A3 = false;
			A4 = false;
		}		
	}	
}

function removeTouch(event){
	dx = [0,0,0,0,0,0];
	dy = [0,0,0,0,0,0];
	//----------------------------
	if(validar_arrastar1b == true){
		if(x1 > xD - 30 && y1 > yp[r1] - DR && y1 < yp[r1] + DR){
			x1 = xD;
			y1 = yp[r1];
			validar_arrastar1b = false;
		}
		if(validar_arrastar1b == true){
			x1 = xE;
			y1 = yp[0];
		}
	}
	
	if(validar_arrastar2b == true){
		if(x2 > xD - 30 && y2 > yp[r2] - DR && y2 < yp[r2] + DR){
			x2 = xD;
			y2 = yp[r2];
			validar_arrastar2b = false;
		}
		if(validar_arrastar2b == true){
			x2 = xE;
			y2 = yp[1];
		}
	}
	
	if(validar_arrastar3b == true){
		if(x3 > xD - 30 && y3 > yp[r3] - DR && y3 < yp[r3] + DR){
			x3 = xD;
			y3 = yp[r3];
			validar_arrastar3b = false;
		}
		if(validar_arrastar3b == true){
			x3 = xE;
			y3 = yp[2];
		}
	}
	
	if(validar_arrastar4b == true){
		if(x4 > xD - 30 && y4 > yp[r4] - DR && y4 < yp[r4] + DR){
			x4 = xD;
			y4 = yp[r4];
			validar_arrastar4b = false;
		}
		if(validar_arrastar4b == true){
			x4 = xE;
			y4 = yp[3];
		}
	}
	
	if(validar_arrastar5b == true){
		if(x5 > xD - 30 && y5 > yp[r5] - DR && y5 < yp[r5] + DR){
			x5 = xD;
			y5 = yp[r5];
			validar_arrastar5b = false;
		}
		if(validar_arrastar5b == true){
			x5 = xE;
			y5 = yp[4];
		}
	}
	
	A1 = true;
	A2 = true;
	A3 = true;
	A4 = true;
	A5 = true;
	
}

// FUNÇÕES UTILIZADAS NO COMPUTADOR -----------------------------------------

//OUVINTE QUE REGISTRA A POSIÇÃO DO MOUSE        
function listener(e){
	x = e.pageX;
	y = e.pageY;	
	if(validar_arrastar1 == true && validar_arrastar1b == true){		
		x1 = x - b;
		y1 = y - b;
	}
	if(validar_arrastar2 == true && validar_arrastar2b == true){		
		x2 = x - b;
		y2 = y - b;
	}	
	
	if(validar_arrastar3 == true && validar_arrastar3b == true){		
		x3 = x - b;
		y3 = y - b;
	}	
	
	if(validar_arrastar4 == true && validar_arrastar4b == true){		
		x4 = x - b;
		y4 = y - b;
	}	
	
	if(validar_arrastar5 == true && validar_arrastar5b == true){		
		x5 = x - b;
		y5 = y - b;
	}	
	
}
 
//COMANDOS ATIVADOS COM CLICANDO EM QUALQUER PONTO DA TELA 
function clicked() {
	if(validar_arrastar1b == true){		
		if(x > x1 - R && x < x1 + R && y < y1 + R && y > y1 - R){	
			validar_arrastar1 = true;	 
		}  
	}
	
	if(validar_arrastar2b == true){		
		if(x > x2 - R && x < x2 + R && y < y2 + R && y > y2 - R){	
			validar_arrastar2 = true;	 
		}
	}
	
	if(validar_arrastar3b == true){		
		if(x > x3 - R && x < x3 + R && y < y3 + R && y > y3 - R){	
			validar_arrastar3 = true;	 
		} 
	}
	
	if(validar_arrastar4b == true){		
		if(x > x4 - R && x < x4 + R && y < y4 + R && y > y4 - R){	
			validar_arrastar4 = true;	 
		} 
	}
	
	if(validar_arrastar5b == true){		
		if(x > x5 - R && x < x5 + R && y < y5 + R && y > y5 - R){	
			validar_arrastar5 = true;	 
		}
	}
}

//COMANDOS ATIVADOS QUANDO CESSA O CLIQUE        
function noclicked() {	
	if(validar_arrastar1b == true){
		if(x1 > xD - DR && y1 > yp[r1] - DR && y1 < yp[r1] + DR){
			x1 = xD;
			y1 = yp[r1];
			validar_arrastar1b = false;
		}
		if(validar_arrastar1b == true){
			x1 = xE;
			y1 = yp[0];
		}
	}
	
	if(validar_arrastar2b == true){
		if(x2 > xD - DR && y2 > yp[r2] - DR && y2 < yp[r2] + DR){
			x2 = xD;
			y2 = yp[r2];
			validar_arrastar2b = false;
		}
		if(validar_arrastar2b == true){
			x2 = xE;
			y2 = yp[1];
		}
	}
	
	if(validar_arrastar3b == true){
		if(x3 > xD - DR && y3 > yp[r3] - DR && y3 < yp[r3] + DR){
			x3 = xD;
			y3 = yp[r3];
			validar_arrastar3b = false;
		}
		if(validar_arrastar3b == true){
			x3 = xE;
			y3 = yp[2];
		}
	}
	
	if(validar_arrastar4b == true){
		if(x4 > xD - DR && y4 > yp[r4] - DR && y4 < yp[r4] + DR){
			x4 = xD;
			y4 = yp[r4];
			validar_arrastar4b = false;
		}
		if(validar_arrastar4b == true){
			x4 = xE;
			y4 = yp[3];
		}
	}
	
	if(validar_arrastar5b == true){
		if(x5 > xD - DR && y5 > yp[r5] - DR && y5 < yp[r5] + DR){
			x5 = xD;
			y5 = yp[r5];
			validar_arrastar5b = false;
		}
		if(validar_arrastar5b == true){
			x5 = xE;
			y5 = yp[4];
		}
	}
	
	validar_arrastar1 = false;  
	validar_arrastar2 = false;  
	validar_arrastar3 = false;  
	validar_arrastar4 = false;  
	validar_arrastar5 = false;		
}


function refazer(){
	validar_arrastar1b = true;
	validar_arrastar2b = true;
	validar_arrastar3b = true;
	validar_arrastar4b = true;
	validar_arrastar5b = true;	
	
	validar_arrastar1 = false;  
	validar_arrastar2 = false;  
	validar_arrastar3 = false;  
	validar_arrastar4 = false;  
	validar_arrastar5 = false;
	
	x1 = xE;
	x2 = xE;
	x3 = xE;
	x4 = xE;
	x5 = xE;
	y1 = yp[0];
	y2 = yp[1];
	y3 = yp[2];
	y4 = yp[3];
	y5 = yp[4];	
}

function arrastar(){
	//PONTOS PARA ARRASTAR	
	circle(x1 + dx[1], y1 + dy[1], D2, 1.5, corCirculoE, corCirculoE);
	circle(x2 + dx[2], y2 + dy[2], D2, 1.5, corCirculoE, corCirculoE);
	circle(x3 + dx[3], y3 + dy[3], D2, 1.5, corCirculoE, corCirculoE);
	circle(x4 + dx[4], y4 + dy[4], D2, 1.5, corCirculoE, corCirculoE);
	circle(x5 + dx[5], y5 + dy[5], D2, 1.5, corCirculoE, corCirculoE);
	
	line(xE, yp[0], x1 + dx[1], y1 + dy[1], 2, corCirculoE);
	line(xE, yp[1], x2 + dx[2], y2 + dy[2], 2, corCirculoE);
	line(xE, yp[2], x3 + dx[3], y3 + dy[3], 2, corCirculoE);
	line(xE, yp[3], x4 + dx[4], y4 + dy[4], 2, corCirculoE);
	line(xE, yp[4], x5 + dx[5], y5 + dy[5], 2, corCirculoE);

}