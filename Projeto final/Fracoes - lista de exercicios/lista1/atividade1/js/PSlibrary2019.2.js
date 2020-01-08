//PADRÃO DE CORES (FLAT DESIGN) ---------------------------------------------
var whitecolor 				= 'rgb(255,255,255)';
var redcolor 				= '#e74c3c';
var orangecolor 			= '#e67e22';
var greencolor 				= '#218c74';
var darkcolor 				= '#2c3e50';
var bluecolor 				= '#3498db';
var graycolor 				= '#718093';
var concretcolor1 			= '#95a5a6';
var concretcolor2 			= 'rgba(189, 195, 199,1.0)';
var shadowcolordark 		= '#2d3436';
var shadowcolorbright 		= '#95a5a6';
var nocolor					= 'rgba(0,0,0,0)';

// BASE ------------------------------------------------------------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');	
function drawTime(time){	
	setInterval(desenhar,time);
}
function draw(desenhar){
		window.animationFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback, element){
            window.setTimeout(callback);
        };
	})();	
	animationFrame(desenhar); 
}

function clear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//*************************************************************************
//FUNÇÕES DE CÁLCULO ------------------------------------------------------

//Ângulo em graus, dados o cateto oposto e a hipotenusa
function angR(CO, CA){
	var CO;CA;
	return Math.atan2(CO,CA)*180/Math.PI;
}

//Triangulação (ângulo graus, no vértico do ponto x1,y1)
function angR2point(px1, py1, px2, py2){
	var px1;py1;px2;py2;
	var CO = px2 - px1;
	var CA = py2 - py1;	
	return Math.atan2(CA,CO)*180/Math.PI;
}

//Distância entre dois pontos
function dist2point(px1, py1, px2, py2){
	var px1;py1;px2;py2;	
	var dx = px2 - px1;
	var dy = py2 - py1;	
	return Math.sqrt(dx*dx + dy*dy);
}


//*************************************************************************
// GEOMETRIA - início -----------------------------------------------------
//Ponto
function point(px, py, color){
	var px; py; color;
	ctx.beginPath();	
	ctx.arc(px, py, 2, 0, 2*Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
}

//Marcador simples
function mark(px, py, color){
	
}

//**** Linhas ****
//Reta entre dois pontos
function line(x1, y1, x2, y2, stroke, colorstroke){
	var x1; y1; x2; y2; stroke; colorstroke;
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
}

//Reta com tamanho e ângulo (em graus)
function lineAngle(x, y, width, rotation, stroke, colorstroke){
	var x; y; width; rotation; stroke; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	ctx.beginPath();		
	ctx.lineCap = "round";
	ctx.moveTo(x,y);
	ctx.lineTo(x + width, y);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}	

//Linha pontilhada
function linedash(x, y, width, stroke, colorstroke,rotation){
	var x; y; width; stroke; colorstroke; rotation;
	var passo = 5;
	var limit = Math.trunc((width-5)/10);
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	for (var i = 0; i <= limit; i++){
		ctx.moveTo(px + 10*i, py);
		ctx.lineTo (px + 10*i + passo, py);
	}
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

//Curva bezier
function curveBezier(x1, y1, dx1, dy1, dx2, dy2, x2, y2, stroke, colorstroke){
	var x1; y1; x2; y2; dx1; dy1; dx2; dy2; x2; y2; stroke; colorstroke;
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.moveTo(x1,y1);
	ctx.bezierCurveTo(x1 + dx1, y1 + dy1,x2 + dx2, y2 + dy2, x2, y2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();			
}

//Círculos *****
//Círculo com preenchimento
function circle(x, y, radius, stroke, colorfill, colorstroke){
	var x; y; radius; stroke; colorfill; colorstroke;
	ctx.beginPath();	
	ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}

//Arco de circunferência preenchido
function arcCircle1(x, y, radius, angI, angF, stroke, colorfill, colorstroke){
	var x; y; radius; angI; angF; stroke; colorfill; colorstroke;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	//
	ctx.beginPath();	
	ctx.moveTo(x, y);
	ctx.arc(x, y, radius, ang1, ang2, false);	
	ctx.lineTo(x, y);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}

//Arco de circunferência sem preenchimento(sentido horário)
function arcCircle2(x, y, radius, angI, angF, stroke, color){	
	var x; y; radius; angI; angF; stroke; color;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();	
	ctx.arc(x, y, radius, ang1, ang2, false);		
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;	
	ctx.stroke();	
}

//** Retângulos **
//Retângulo simples (aceita valores negativos para comprimento e altura)
//A posição é determinada pelas coordenadas de um dos vértices
function rectangle(x, y, w, h, stroke, rotation, colorfill, colorstroke){
	var x; y; w; h; stroke; rotation; colorfill; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.lineCap="round";	
	ctx.rect(x, y, w, h);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;	
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	//
	ctx.restore();
}

function rectangleRound(x, y, w, h, r, stroke, strokefill, colorfill){
	var x; y; w; h; r; stroke; strokefill; colorfill;
	var pontox = [x, x + r, x + w - r, x + w];
	var pontoy = [y, y - r, y - h + r, y - h]; 
	ctx.beginPath();		
	ctx.moveTo(pontox[0], pontoy[1]);
	ctx.lineTo(pontox[0], pontoy[2]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[3], pontox[1], pontoy[3]);			
	ctx.lineTo(pontox[2], pontoy[3]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[3], pontox[3], pontoy[2]);
	ctx.lineTo(pontox[3], pontoy[1]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[0], pontox[2], pontoy[0]);			
	ctx.lineTo(pontox[1], pontoy[0]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[0], pontox[0], pontoy[1]);	 
	ctx.lineWidth = stroke;
	ctx.strokeStyle = strokefill;	
	ctx.fillStyle = colorfill;
	ctx.fill();				
	ctx.stroke();
}

//RETICULADO
function grid(x,y,Nx,Ny,stroke,color){
	var x; y; Nx; Ny; stroke; color;
	var passo = 20;
	var largura = passo*(Nx);
	var altura = passo*(Ny);
	var passograde = 0;
	var i;
	// Desenhando retas verticais
	for(i = 1;i <= Nx + 1;i++){
		ctx.beginPath()
		ctx.moveTo(x + passograde, y);
		ctx.lineTo(x + passograde,y - altura);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();
		passograde = passograde + passo
	}
	// Desenhando retas horizontais
	passograde = 0	
	for(i = 1;i <= Ny + 1;i++){
		ctx.beginPath()
		ctx.moveTo(x, y - passograde);
		ctx.lineTo(x + largura,y - passograde);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();
		passograde = passograde + passo
	}
	passograde = 0
}


//EQUIPAMENTOS -----------------------------------------------------
//EQUIPAMENTOS -----------------------------------------------------

//Superfície
function surface(x, y, width, rotation, color){
	var N = width/10;
	var i;
	var passo = 5;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x, y);
	ctx.lineTo(x + width, y);
	//
	for(i=1;i<=N;i++){
		ctx.moveTo(x + passo,y);
		ctx.lineTo(x + passo - 5, y + 5);
		passo = passo + 10;
	}
	//
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
	//	
	ctx.restore()
}	

//Escala positiva, sobre o eixo x, a partir de 0.
//O parâmetro widht é o número de pontos na escala. 
function numberScalePosX(px, py, width, scale, dist, color){	
	var px; py; width; scale; dist; color;
	var N = 0;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', px + passo - dx, py, darkcolor);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 5;
		}
		if(N > 100){
			dx = 10;
		}		
		passo = passo + dist;			
	}	
}

//Escala positivo sobre o eixo y, a partir de 0.
//O parâmetro widht é o número de pontos na escala.
function numberScalePosY(px, py, width, scale, dist, color){	
	var px; py; width; scale; dist; color;
	var N = 0;
	var passo = 0;
	var dy = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', px + dx, py + passo, darkcolor);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = -5;
		}
		if(N > 100){
			dx = -15;
		}		
		passo = passo + dist;			
	}
}

//Escala com marcadores
function graduatedScale(x, y, w, d, h, rotation, stroke, colorstroke){
	var x; y; w; d; h; rotation; stroke; colorstroke;	
	var N = w/d;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); //Entre com o valor em graus
	ctx.translate(-x,-y);
	for(var i = 0; i <= N; i++){
		lineAngle(x, y, h, -90, 1.5, colorstroke);
		x = x + d;
	}
	ctx.restore();
}
//TEXTO - início -------------------------------------

//ESCREVER TEXTO 
function textNormal(word, size, font, x, y, color){
	var wordk; size; font; x; y; color; 
	ctx.font = size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
}

//ESCREVER TEXTO COM NEGRITO 
function textBold(word, size, font, px, py, color){
	var wordk; size; font; px; py; color; 
	ctx.font = 'bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, px, py);
}

//ESCREVER SÍMBOLO COM SUBSCRITO
function symbolSub(word, sub, size, font, px, py, dx, color){
	var wordk; size; font; px; py; dx; color; 
	var sizeSub = size - 2;
	ctx.font = 'bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, px, py);
	
	ctx.font = 'bold ' + sizeSub + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(sub, px + dx, py + 5);
}

//ESCREVER TEXTO ESTILO I 
function textStyle1(word, size, font, px, py, color){
	var wordk; size; font; px; py; color; 	
	ctx.font = 'small-caps bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, px, py);
}

//ESCREVER TEXTO ESTILO II 
function textStyle2(word, size, font, px, py, color){
	var wordk; size; font; px; py; color; 	
	ctx.font = 'italic small-caps bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, px, py);
}



//ESCREVER LETRA COM SÍMBOLO DE VETOR
function namevector(name,x,y,color){
	var name; x; y; color;
	var h = 16
	var b = 3
	ctx.beginPath();	
	ctx.moveTo(x-1, y-h);
	ctx.lineTo(x+12, y-h);
	ctx.lineTo(x+8, y-h-b);
	ctx.moveTo(x+12, y-h);
	ctx.lineTo(x+8, y-h+b);
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(name, x, y);
}

function namevectorIndice(name,sub,x,y,color){
	var name; sub; x; y; color;
	var h = 16
	var b = 3
	ctx.beginPath();	
	ctx.moveTo(x-1, y-h);
	ctx.lineTo(x+12, y-h);
	ctx.lineTo(x+8, y-h-b);
	ctx.moveTo(x+12, y-h);
	ctx.lineTo(x+8, y-h+b);
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = colortext;
	ctx.fillText(name, x, y);
	ctx.font = 'bold 8pt Verdana';
	ctx.fillStyle = colortext;
	ctx.fillText(sub, x + 10, y + 5);
}



//***********************************************************************
//FERRAMENTAS -----------------------------------------------------------
//FERRAMENTAS -----------------------------------------------------------

//VETOR (INVERTE O SENTIDO PARA TAMANHOS NEGATIVOS)
function vector(x, y, width, rotation, stroke, colorstroke){
	var x; y; width; rotation; stroke; colorstroke;
	var mult;
	var modulo = Math.abs(width);
	var ang;
	if(width >=0){
		ang = rotation;
	}else{
		ang = rotation + 180;
	}
		
	if(modulo < 10){
		mult = modulo/10;
	}else{
		mult = 1;
	}	
	var setaw = 10*mult;
	var setah = 10*mult;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(ang*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//Linha
	if(width !=0){
		ctx.beginPath();		
		ctx.moveTo(x, y);
		ctx.lineTo(x + modulo-2, y);
		ctx.lineWidth = stroke;
		ctx.strokeStyle= colorstroke;
		ctx.stroke();
		//Seta	
		ctx.beginPath();		
		ctx.moveTo(x + modulo, y);
		ctx.lineTo(x + modulo - setaw, y - setah/2);
		ctx.lineTo(x + modulo - setaw, y + setah/2);
		ctx.fillStyle= colorstroke;
		ctx.closePath();
		ctx.fill();	 
	}
	//	
	ctx.restore();	
}

function scaleSimple(px,py,width, stroke, rotation, color){
	var px; py; width; stroke; rotation; color;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.moveTo(px,py);
	ctx.lineTo(px + width,py);
	ctx.moveTo(px,py + 7);
	ctx.lineTo(px,py - 7);
	ctx.moveTo(px + width,py + 7);
	ctx.lineTo(px + width,py - 7);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.restore();
}

//***********************************************************************
//MATEMÁTICA - cálculos ------------------------------------------------------
//MATEMÁTICA - cálculos ------------------------------------------------------

//Plota um gráfico a partir das matrizes matX e matY (digitar apenas os nomes, sem as chaves);
//Essas matrizes representam os pontos do gráfico, e são determinadas pelo usuário.
function graphic(x0, y0, limit, color, matX, matY, step){
	var x0; y0; limit; color; matX; matY; step;	
	for(var i = 1; i < limit; i = i + step){	
		ctx.beginPath();
		ctx.moveTo(x0 + matX[i-1],y0 - matY[i-1]);
		ctx.lineTo(x0 + matX[i], y0 - matY[i]);
		ctx.lineWidth = 2.5;
		ctx.strokeStyle = color;
		ctx.stroke();			
	}		
}


//***********************************************************************
//ELETROSTÁTICA E ELETRODINÂMICA -------------------------------------------
//ELETROSTÁTICA E ELETRODINÂMICA -------------------------------------------

//Chave liga-deslig
function keyOnOf(px, py, status){
	var px; py; status;
	var ang;
	if(status == 0){
		ang = 0;
	}else{
		ang = -40;
	}
	rectangle(px, py - 5, 40, 10, 0, 0, 'rgb(255,255,255)', nocolor);
	lineAngle(px, py, 40, ang, 3, darkcolor);
	circle(px, py, 3, 1, darkcolor, darkcolor);
	circle(px + 40, py, 3, 1, darkcolor, darkcolor);
}

//Carga elétrica positiva
function electricChargePos(px, py, radius, stroke, color){	
	var px; py; radius; stroke; color;
	lineAngle(px - radius/2, py, radius, 0, stroke, color);
	lineAngle(px, py - radius/2, radius, 90, stroke, color);
}

//Carga elétrica negativa
function electricChargeNeg(px, py, radius, stroke, color){	
	var px; py; radius; stroke; color;
	lineAngle(px - radius/2, py, radius, 0, stroke, color);	
}

//Pilha comum
function battery(px, py, rotation){
	var px; py; rotation;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//
	rectangle(px + 4 , py - 4, 12, 5, 1, 0, '#c8d6e5','#341f97');
	rectangle(px, py, 20, 60, 1, 0, '#c8d6e5','#341f97');
	electricChargePos(px + 10, py + 10, 8, 2.5, 'white');
	electricChargeNeg(px + 10, py + 50, 8, 2.5, 'white');
	//
	ctx.restore();
}

//Lâmpada 
function lamp(px, py, status){
	var px; py; status;
	var cor;
	if(status == 0){
		cor = 'rgba(255,255,255,0)';
	}else{
		cor = '#feca57';
	}
	circle(px + 6, py - 12, 14, 1, cor, '#576574');
	rectangle(px, py, 12, 6, 1, 0, '#576574', darkcolor)
}

//***********************************************************************
//STICKERS -------------------------------------------------------
//STICKERS -------------------------------------------------------

//Ponta de seta rotacionável
function arrow(px,py,b,color,rotation){
	var px; py; b; color; rotation;
	//var dx 
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//
	ctx.beginPath();	
	ctx.moveTo(px, py - 0.6*b);
	ctx.lineTo(px - b/2, py + 0.4*b);
	ctx.lineTo(px + b/2, py + 0.4*b);
	ctx.closePath();
	ctx.fillStyle= color;
	ctx.fill();		
	//
	ctx.restore();
}

//Arco de circunferência com seta 180º
function arc180Arrow(px, py, radius, color, side, rotation){
	var px; py; radius; color; side; rotation;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180);
	ctx.translate(-px,-py);
	//
	if(side == 1){
		arcCircle2(px, py, radius, 90, 270, 2.5, color);
		arrow(px,py - (radius - 1),10,color,90);
	}	
	if(side == 2){
		arcCircle2(px, py, radius, 270, 90, 2.5, color);
		arrow(px,py - (radius - 1),10,color,-90);	
	}	
	//
	ctx.restore();
}
/*
function arc120Arrow(px, py, radius, color, side, rotation){
	var px; py; radius; color; side; rotation;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180);
	ctx.translate(-px,-py);
	//
	if(side == 1){
		arcCircle2(px, py, radius, 120, 240, 2.5, color);
		var dx = radius*Math.cos(rotation*Math.PI/180);
		var dy = radius*Math.sin(rotation*Math.PI/180);
		arrow(px - dx, py - dy,10,color,60);
	}	
	if(side == 2){
		arcCircle2(px, py, radius, 270, 90, 2.5, color);
		arrow(px,py - (radius - 1),10,color,-90);	
	}	
	//
	ctx.restore();
}
*/

//Seta com rotação
function stickersArrow(x, y, width, rotation, color){
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x, y - 5);
	ctx.lineTo(x + width, y - 5);
	ctx.lineTo(x + width, y - 12);
	ctx.lineTo(x + width + 20, y);
	ctx.lineTo(x + width, y + 12);
	ctx.lineTo(x + width, y + 5);
	ctx.lineTo(x, y +5);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
	//
	ctx.restore();	
}

//Conector para mapa conceitual, 90° com rotação.
function conect90(x1, y1, dx, dy, rotation, mode, color){
	var x1;y1;dx;dy;rotation;mode;color;	
	var stroke = 2.5;
	var ang;	
	//
	ctx.save();
	ctx.translate(x1,y1);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x1,-y1);
	//
	point(x1, y1, color);
	if(mode == 1){
		lineAngle(x1, y1, dy, -90, stroke, color);
		lineAngle(x1, y1 - dy, dx, 0, stroke, color);
		if(dx > 0){
			ang = 90;
		}else{
			ang = -90;
		}	
		arrow(x1 + dx, y1 - dy, 10, color, ang);
	}
	if(mode == 2){	
		lineAngle(x1, y1, dx, 0, stroke, color);
		lineAngle(x1 + dx, y1, dy, -90, stroke, color);
		if(dy > 0){
			ang = 0;
		}else{
			ang = 180;
		}	
		arrow(x1 + dx, y1 - dy, 10, color, ang);
	}
	//
	ctx.restore();
}

//Conector para mapa conceitual, 
function arcArrow (x, y, radius, ang, rotation,color){	
	var x; y; radius; ang; color;
	var ang2 = 180 - ang;
	var xs = radius*Math.cos(ang*Math.PI/180);
	var ys = radius*Math.sin(ang*Math.PI/180);
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	arcCircle2(x + radius, y, radius, 180, -ang, 2.5, color);
	circle(x, y, 3, 1, color, color);
	arrow(x + radius + xs, y - ys, 12, color, 180 - ang);
	//
	ctx.restore();
}

//Boneco visto do frente
function person(px, py, rotation, scale, colorfill){
	var px; py; rotation; scale; colorfill;	
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(-rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px*scale,-py*scale);
	ctx.scale(scale,scale);
	//
	rectangle(px, py - 20, 5, 20, 0, 0, colorfill, nocolor);
	rectangle(px + 7, py - 20, 5, 20, 0, 0, colorfill, nocolor);
	rectangle(px, py - 22 - 19, 12, 20, 0, 0, colorfill, nocolor);
	rectangle(px - 6, py - 22 - 19, 5, 20, 0, 0, colorfill, nocolor);
	rectangle(px + 13, py - 22 - 19, 5, 20, 0, 0, colorfill, nocolor);
	circle(px + 6, py - 29 - 19, 5, 0, colorfill, nocolor);
	//
	ctx.restore();
}

