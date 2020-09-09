//PADRÃO DE CORES (FLAT DESIGN) ---------------------------------------------
var whitecolor 				= 'rgb(255,255,255)';
var redcolor 				= '#e74c3c';
var orangecolor 			= '#e67e22';
var greencolor 				= '#218c74';
var darkcolor 				= '#2c3e50';
var bluecolor 				= '#3498db';
var graycolor 				= '#bdc3c7';
var concretcolor1 			= '#95a5a6';
var concretcolor2 			= 'rgba(189, 195, 199,1.0)';
var shadowcolordark 		= '#2d3436';
var shadowcolorbright 		= '#95a5a6';
var nocolor					= 'rgba(0,0,0,0)';

// BASE ------------------------------------------------------------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');	
function clear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawTime(time){	
	setInterval(desenhar, time);
	
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

function desenhar(){
	clear(); 
	grafico();
	animationFrame(desenhar);
}
//*************************************************************************
//FUNÇÕES DE CÁLCULO ------------------------------------------------------

//Ângulo em graus, dados o cateto oposto e a hipotenusa
function angR(CO, CA){
	var CO;CA;
	return Math.atan2(CO,CA)*180/Math.PI;
}

//Triangulação (ângulo graus, no vértico do ponto x1,y1)
function angR2point(x1, y1, x2, y2){
	var x1;y1;x2;y2;
	var CO = x2 - x1;
	var CA = y2 - y1;	
	return Math.atan2(CA,CO)*180/Math.PI;
}

//Distância entre dois pontos
function dist2point(x1, y1, x2, y2){
	var x1;y1;x2;y2;	
	var dx = x2 - x1;
	var dy = y2 - y1;	
	return Math.sqrt(dx*dx + dy*dy);
}

//Movimento Harmônico Simples
function oscillation(A, f, tempo, fase){
	var A; f; tempo; fase;
	var d;
	d = A*Math.cos(2*Math.PI*f*tempo + fase*Math.PI/180);
	return d;
}
//Cálculo de Componentes
function componente(comp, mod, ang){
	//o parâmetro comp deve ser uma string ('cx' ou 'cy')
	var comp; mod; ang;
	var compx;
	var compy;
	//
	compx = mod*Math.cos(ang*Math.PI/180);
	compy = mod*Math.sin(ang*Math.PI/180);
	if(comp == 'cx'){
		return compx;
	}
	if(comp == 'cy'){
		return compy;
	}
}


//*************************************************************************
// GEOMETRIA - início -----------------------------------------------------
//Ponto
function point(x, y, color){
	var x; y; color;
	ctx.beginPath();	
	ctx.arc(x, y, 2, 0, 2*Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
}

//**** Linhas ****

//Reta entre dois pontos
function line(x1, y1, x2, y2, stroke, colorstroke){
	var x1; y1; x2; y2; stroke; colorstroke;
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
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
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	for (var i = 0; i <= limit; i++){
		ctx.moveTo(x + 10*i, y);
		ctx.lineTo (x + 10*i + passo, y);
	}
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}


//Linha reversa
function lineReverse(x, y, dist, width, rotation, stroke, colorstroke){
	var x; y; dist; width; rotation; stroke; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.moveTo(x + dist,y);
	ctx.lineTo(x + dist - width, y);
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


//Círculo com preenchimento
function circle(x, y, radius, stroke, colorstroke, colorfill){
	var x; y; radius; stroke; colorstroke; colorfill; 
	ctx.beginPath();	
	ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}


//Arco de circunferência preenchido
function arcCircle1(x, y, radius, angI, angF, stroke, colorstroke, colorfill){
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

//Retângulo comum
function rectangle(x, y, w, h, stroke, rotation, colorstroke, colorfill){
	var x; y; w; h; stroke; rotation; colorstroke; colorfill;
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


//Retângulo com borda arredondada
function rectangleRound(x, y, w, h, r, stroke, colorstroke, colorfill){
	var x; y; w; h; r; stroke; colorstroke; colorfill;
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
	ctx.strokeStyle = colorstroke;	
	ctx.fillStyle = colorfill;
	ctx.fill();				
	ctx.stroke();
}
//Reticulado com escala variável
function grid(x, y, Nx, Ny, passo, stroke,color){
	var x; y; Nx; Ny; passo; stroke; color;	
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


//Triângulo qualquer
function triangle(x1, y1, x2, y2, x3, y3, stroke, colorfill, colorstroke){
	var x1; y1; x2; y2; x3; y3; stroke; colorfill; colorstroke;
	ctx.beginPath();
	ctx.lineCap="round";	
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	ctx.fillStyle = colorfill;
	ctx.fill();	
}


//Triângulo retângulo
function triangleR(x, y, b, h, rotation, stroke, colorstroke, colorfill){
	var x; y; b; h; stroke; colorstroke; colorfill;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x, y);
	ctx.lineTo(x + b, y);
	ctx.lineTo(x + b, y - h);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	//
	ctx.restore();	
}

//Triângulo Isósceles
function triangleI(x, y, b, h, rotation, stroke, colorstroke, colorfill){
	var x; y; b; h; stroke; colorstroke; colorfill;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x, y);
	ctx.lineTo(x + b/2, y);
	ctx.lineTo(x, y - h);
	ctx.lineTo(x - b/2, y);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	//
	ctx.restore();	
}


//PARALELEPÍPEDO
function parallelepiped(x, y, L, W, H, colorstroke, colorfill){
	var x; y; L; W; H; colorstroke; colorfill;
	var theta = 30*Math.PI/180;
	var d = Math.cos(theta)*W;
	var hlinha = Math.sin(theta)*W;
	var stroke = 1.5;	
	//------->
	ctx.beginPath();		
	ctx.lineCap = "round";
	ctx.moveTo(x,y);
	ctx.lineTo(x + L, y);
	ctx.lineTo(x + L + d, y - hlinha);
	ctx.lineTo(x + L + d, y - hlinha - H);
	ctx.lineTo(x + d, y - hlinha - H);
	ctx.lineTo(x, y - H);
	ctx.lineTo(x, y);
	ctx.moveTo(x,y - H);
	ctx.lineTo(x + L, y - H);
	ctx.lineTo(x + L + d, y - hlinha - H);
	ctx.moveTo(x + L,y - H);
	ctx.lineTo(x + L, y);
	//
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	
}


//MÁSCARA
function mascara(x, y, radius, L, H, rotation, colorFill){
	var x; y; radius; L; H;	rotation;	
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//------->
	ctx.beginPath();		
	ctx.lineCap = "round";
	ctx.moveTo(x - radius,y);
	ctx.arc(x, y, radius, -Math.PI, 0, false);	
	ctx.lineTo(x + radius + L, y);	
	ctx.lineTo(x + radius + L, y - H);
	ctx.lineTo(x - L - radius, y - H);
	ctx.lineTo(x - L - radius, y);
	ctx.closePath();	
	//	
	ctx.fillStyle = colorFill;
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = colorFill;
	ctx.stroke();	
	//
	ctx.restore();
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
function eixoXpos(x, y, tamanho, escala, lado, cor){
	var x; y; tamanho; escala; lado; cor;	
	var dx = lado;
	var L = tamanho*dx;
	vector(x, y, L + 20, 0, 1.5, cor);
	graduatedScale(x, y + 10, L, dx, 5, 0, 2.2, cor);	
	numberScalePosX(x - 4, y + 25, tamanho, escala, dx, cor);	
}

//Eixo x com escala numérica, iniciando no 0
function eixoYpos(x, y, tamanho, escala, lado, cor){
	var x; y; tamanho; escala; lado, cor;	
	var dx = lado;
	var L = tamanho*dx;
	vector(x, y, L + dx, -90, 1.5, cor);
	graduatedScale(x - 5, y, L, dx, 5, -90, 2.2, cor);	
	//numberScalePosY(x - 25, y + 3, tamanho, escala, -dx, cor);	
}

//eixo x, de -10 a +10
function eixoX10(x, y){
	var x; y;
	var px = x - 285;
	var L = 570;
	vector(px, y, L, 0, 2.5, darkcolor);
	graduatedScale(px + 35, y + 10, L - 60, 25, 5, 0, 2.2, darkcolor);
	numberScaleX2(px + 285, y + 25, 10, 1, 25, darkcolor);	
}

//eixo x, de -5 a +5
function eixoX5(x, y, cor){
	var x; y;
	var px = x - 142.5;
	var L = 285;
	vector(px + 5, y, L, 0, 2, cor);
	graduatedScale(px + 17.5, y + 10, L - 25, 25, 5, 0, 2.2, cor);
	numberScaleX2(x, y + 25, 5, 1, 25, cor);	
}

//Escala positiva, sobre o eixo x, a partir de 0.
//O parâmetro widht é o número de pontos na escala. 
function numberScalePosX(x, y, width, scale, dist, color){	
	var x; y; width; scale; dist; color;
	var N = 0;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', x + passo - dx, y, color);
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

//Escala positiva sobre o eixo y, a partir de 0.
//O parâmetro widht é o número de pontos na escala.
function numberScalePosY(x, y, width, scale, dist, color){	
	var x; y; width; scale; dist; color;
	var N = 0;
	var passo = 0;
	var dy = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', x + dx, y + passo, color);
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

//Escala positiva sobre o eixo y, a partir de 0.
//O parâmetro widht é o número de pontos na escala.
function numberScaleY2(x, y, width, scale, dist, color){	
	var x; y; width; scale; dist; color;
	var N = 0;
	var passo = 0;
	var dy = 0;
	var dx = 0;	
	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', x + dx, y - passo, color);
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
	passo = 0;
	N = -1;
	for (var i = 0; i <= width - 1; i++){		
		
		
		
		if(N > -10){
			dx = -5;
		}
		if(N <= -10 && N < -100){
			dx = -25;
		}
		textBold(N, '8','verdana', x + dx, y + passo + 20, color);
		N = N - scale;
		passo = passo + dist;			
	}
}


//Escala horizontal com valores positivos e negativos.
//O parâmetro widht é o número de pontos na escala. 
function numberScaleX2(x, y, width, scale, dist, color){	
	var x; y; width; scale; dist; color;
	var x0 = x - 4;
	var N = 0;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '8','verdana', x0 + passo - dx, y, color);
		N = N - scale;
		if(N < 0 && N > -10){
			dx = 5;
		}	
		if(N <= -10){
			dx = 10;
		}	
		//	
		passo = passo - dist;			
	}
	//
	N = scale;
	passo = dist - 5;
	dx = 0;	
	//
	for (var i = 0; i <= width - 1; i++){		
		textBold(N, '8','verdana', x + passo - dx, y, color);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 5;
		}			
		passo = passo + dist;			
	}	
}

//Escala horizontal com valores positivos e negativos.
//O parâmetro widht é o número de pontos na escala. 
function numberScaleX10(x, y, width, scale, dist, color){	
	var x; y; width; scale; dist; color;
	var x0 = x - 5;
	var N = 0;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textBold(N, '10','verdana', x0 + passo - dx, y, color);
		N = N - scale;
		if(N < 0 && N > -10){
			dx = 5;
		}	
		if(N <= -10){
			dx = 10;
		}	
		//	
		passo = passo - dist;			
	}
	//
	N = scale;
	passo = dist - 5;
	dx = 0;	
	//
	for (var i = 0; i <= width - 1; i++){		
		textBold(N, '8','verdana', x + passo - dx, y, color);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 5;
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
		lineAngle(x, y, h, -90, stroke, colorstroke);
		x = x + d;
	}
	ctx.restore();
}

//Régua com 15 cm, rotacionável.
function scale15cm(x, y, rotation){
	var x; y; rotation;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);	
	//
	rectangle(x  - 10, y  - 20, 480, 40, 1, 0, darkcolor, nocolor);
	graduatedScale(x + 4, y - 8, 460, 30, 5, 0, 1.5, darkcolor);
	numberScalePosX(x, y + 5, 15, 1, 30, darkcolor);
	//
	ctx.restore();
}



// MOLA COM LINHAS RETAS
function spring(x, y, L, N, h, stroke, colorstroke, rotation){	
	var x; y; L;  N; h; stroke; colorstroke; rotation;
	var passo = L/N;
	function elo1(x, y, passo, h, stroke, colorstroke){		
		ctx.beginPath();	
		ctx.lineJoin = "round";
		ctx.moveTo(x, y);
		ctx.lineTo(x + passo/2, y - h);
		ctx.lineTo(x + passo, y);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = colorstroke;
		ctx.stroke();
		ctx.closePath();	
	}		
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);	
	for(var i = 0; i < N; i++){		
		elo1(x + i*passo, y, passo, h, stroke, colorstroke);
		h = -h;
	}
	//
	ctx.restore();	
}

function dynamometer(x, y, F, rotation){
	var x; y; F; rotation;
	var cor1 = '#7f8c8d';
	var cor2 = '#95a5a6';
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus	
	ctx.translate(-x,-y);
	//
	if(F > 80){
		F = 80;
	}
	//RETÂNGULO INTERNO
	lineAngle(x, y + 106 + F, 2, 90, 3, darkcolor);	
	rectangle(x - 7, y + F + 6, 14, 100, 1.5, 0, darkcolor, cor2); 	
	arcCircle2(x, y + 114 + F, 4, -90, 120, 3, darkcolor);
	for(var i = 0; i <= 8; i++){
		lineAngle(x + 7, y + 16 + i*10 + F, 7, 180, 2, darkcolor);
	}	
	//RETÂNGULO EXTERNO
	arcCircle2(x, y + 6, 6, -180, 0, 3, darkcolor);	
	rectangle(x - 10, y + 6, 20, 100, 1.5, 0, darkcolor, cor1); 		
}


//CARRINHO BÁSICO VISTA LATERAL
function carFromSideBasic(x, y, colorstroke, colorfill, modo){
	var x; y; colorstroke; colorfill; modo;	
	var mult;
	if(modo == 0){
		mult = 1;
	}else{
		mult = -1;
	}
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(1,0.9);
	ctx.translate(-x,-y);
	//	
	ctx.beginPath();	
	ctx.moveTo(x, y);
	ctx.lineTo(x, y - 10);
	ctx.lineTo(x - 10*mult, y - 15);
	ctx.lineTo(x - 20*mult, y - 22);	
	ctx.lineTo(x - 40*mult, y - 22);
	ctx.lineTo(x - 40*mult, y);
	ctx.closePath();
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.strokeStyle = colorstroke;
	ctx.lineWidth = 1.5;
	ctx.stroke();
	//	
	circle(x - 8*mult, y, 5, 1, colorstroke, colorfill);
	circle(x - 32*mult, y, 5, 1, colorstroke, colorfill);
	//
	ctx.restore();
}

//CAMINHÃO VISTA LATERAL
function truck(x, y, L, modo, colorstroke, colorfill){
	var x; y; L; modo; colorstroke; colorfill; 	
	var mult;
	var h = 35;
	if(modo == 0){
		mult = 1;
	}else{
		mult = -1;
	}	
	rectangle(x - 10 - 30, y - 7, 10, 5, 1.5, 0, colorstroke, colorfill);	
	rectangle(x  - 30, y - h, 30, h, 1.5, 0, colorstroke, colorfill);	
	rectangle(x - L - 30, y - h, L - 7, h, 1.5, 0, colorstroke, colorfill);	
	circle(x - 8, y, 5, 1, colorstroke, colorfill);
	circle(x - 23, y, 5, 1, colorstroke, colorfill);	
	circle(x - 50, y, 5, 1, colorstroke, colorfill);
	circle(x - L/2 - 30, y, 5, 1, colorstroke, colorfill);
	circle(x - L - 20, y, 5, 1, colorstroke, colorfill);
	//
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
function textBold(word, size, font, x, y, color){
	var wordk; size; font; x; y; color; 
	ctx.font = 'bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
}

//ESCREVER SÍMBOLO COM SUBSCRITO
function symbolSub(word, sub, size, font, x, y, dx, color){
	var wordk; size; font; x; y; dx; color; 
	var sizeSub = size - 2;
	ctx.font = 'bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
	
	ctx.font = 'bold ' + sizeSub + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(sub, x + dx, y + 5);
}

//ESCREVER TEXTO ESTILO I 
function textStyle1(word, size, font, x, y, color){
	var wordk; size; font; x; y; color; 	
	ctx.font = 'small-caps bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
}

//ESCREVER TEXTO ESTILO II 
function textStyle2(word, size, font, x, y, color){
	var wordk; size; font; x; y; color; 	
	ctx.font = 'italic small-caps bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
}


//ESCREVER LETRA COM SÍMBOLO DE VETOR
function namevector(name, x, y, scale, color){
	var name; x; y; scale; color;
	var h = 15;	
	var b = 3;
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x - 1, y - h);
	ctx.lineTo(x + 11, y - h);
	ctx.moveTo(x + 8, y - h - b);
	ctx.lineTo(x + 11, y - h);
	ctx.lineTo(x + 8, y - h + b);	
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(name, x, y);
	//
	ctx.restore();
}

function namevectorIndice(name,sub,x,y, scale, color){
	var name; sub; x; y; scale; color;
	var h = 16
	var b = 3
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//
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
	ctx.font = 'bold 8pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(sub, x + 10, y + 5);
	//
	ctx.restore();
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
		ctx.lineTo(x + modulo - 5, y);
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

function scaleSimple(x,y,width, stroke, rotation, color){
	var x; y; width; stroke; rotation; color;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + width, y);
	ctx.moveTo(x, y + 7);
	ctx.lineTo(x, y - 7);
	ctx.moveTo(x + width, y + 7);
	ctx.lineTo(x + width, y - 7);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.restore();
}

//***********************************************************************
//MATEMÁTICA -  ------------------------------------------------------
//MATEMÁTICA -  ------------------------------------------------------

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

function fraction(x, y, numerador, denominador, color){	
	var x; y; numerador; denominador; color;
	lineAngle(x - 7, y + 7, 27, 0, 1.5, color);
	if(denominador < 10){
		textStyle1(denominador, '12','verdana',x, y + 25,color);
	}else{
		textStyle1(denominador, '12','verdana',x - 5, y + 25,color);
	}
	if(numerador < 10){
		textStyle1(numerador, '12','verdana',x, y,color);
	}else{
		textStyle1(numerador, '12','verdana',x - 5, y,color);
	}
}

function retFraction1(x, y, L, H, N, D, color){
	var x; y; L; H; N; D; color;	
	var dx = L/D;
	rectangle(x, y, dx*N, - H, 2, 0, nocolor, color);	
	rectangle(x, y, L, - H, 2, 0, darkcolor, nocolor);
	for(var i = 1; i <= D; i++){
		lineAngle(x + i*dx, y, H, -90, 2, darkcolor);			
	}	
}

function transfer360(x, y, radius, rotation, escale5, escale2, escale1){
	var x; y; radius; rotation; escale1; escale2; escale5;
	var corLinha = '#ced6e0';
	var corLinha2 = '#dcdde1';
	line(x - radius, y, x + radius, y, 1, corLinha2);
	arcCircle2(x, y, radius, 0, 360, 1.5, corLinha);
	arcCircle2(x, y, radius - 10, 0, 360, 1, corLinha2);
	lineAngle(x, y + radius, 2*radius, -90, 1, corLinha2);
	//	
	for(var i = 1; i <= 35; i++){
		lineReverse(x, y, radius, 10, -i*10, 1.5, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 355; i=i+10){
			lineReverse(x, y, radius, 5, -i, 1, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 180; i=i+2){
			lineReverse(x, y, radius, 10, -i, 1, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 180; i++){
			lineReverse(x, y, radius, 10, -i, 1, corLinha);
		}
	}
}

function transfer180(x, y, radius, rotation, escale5, escale2, escale1){
	var x; y; radius; rotation; escale1; escale2; escale5;
	var corLinha = '#ced6e0';
	var corLinha2 = '#dcdde1';
	line(x - radius, y, x + radius, y, 1, corLinha2);
	arcCircle2(x, y, radius, 0, 360, 1.5, corLinha);
	arcCircle2(x, y, radius - 10, 0, 360, 1, corLinha2);
	lineAngle(x, y + radius, 2*radius, -90, 1, corLinha2);
	//	
	for(var i = 1; i <= 35; i++){
		lineReverse(x, y, radius, 10, -i*10, 1.5, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 355; i=i+10){
			lineReverse(x, y, radius, 5, -i, 1, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 180; i=i+2){
			lineReverse(x, y, radius, 10, -i, 1, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 180; i++){
			lineReverse(x, y, radius, 10, -i, 1, corLinha);
		}
	}
}

function transfer90(x, y, radius, rotation, color, escale5, escale2, escale1){
	var x; y; radius; rotation; escale1; escale2; escale5;
	var corLinha = color;
	var corLinha2 = corLinha;
	var stroke1 = 2.0;
	var stroke2 = 2.0;
	line(x, y, x + radius, y, 1, corLinha2);
	arcCircle2(x, y, radius, -90, 0, stroke1, corLinha);
	arcCircle2(x, y, radius - 15, -90, 0, stroke2, corLinha2);
	lineAngle(x, y, radius, -90, 1, corLinha2);
	//	
	for(var i = 1; i <= 9; i++){
		lineReverse(x, y, radius, 10, -i*10, stroke1, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 90; i=i+10){
			lineReverse(x, y, radius, 5, -i, stroke2, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 90; i=i+2){
			lineReverse(x, y, radius, 10, -i, stroke2, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 90; i++){
			lineReverse(x, y, radius, 10, -i, stroke2, corLinha);
		}
	}
}

function splitDivision(x, y, color){
	var x; y; color;
	lineAngle(x, y, 8, 0, 1.5, color);
	circle(x + 4, y - 4, 1.5, 1, color, color);
	circle(x + 4, y + 4, 1.5, 1, color, color);
}
//***********************************************************************
//ELETROSTÁTICA E ELETRODINÂMICA -------------------------------------------
//ELETROSTÁTICA E ELETRODINÂMICA -------------------------------------------

//Chave liga-desliga
function keyOnOf(x, y, status){
	var x; y; status;
	var ang;
	if(status == 0){
		ang = 0;
	}else{
		ang = -40;
	}
	rectangle(x, y - 5, 40, 10, 0, 0, nocolor, 'rgb(255,255,255)');
	lineAngle(x, y, 40, ang, 3, darkcolor);
	circle(x, y, 3, 1, darkcolor, darkcolor);
	circle(x + 40, y, 3, 1, darkcolor, darkcolor);
}

//Chave lista-desliga para curto circuito
function keyUpOnOf(x, y, dx, status){
	var x; y; status;	
	keyOnOf(x + dx, y, status);
	lineAngle(x, y + 40, 40, -90, 2.5, darkcolor);
	lineAngle(x, y, dx, 0, 2.5, darkcolor);
	lineAngle(x + dx + 40, y, dx, 0, 2.5, darkcolor);
	lineAngle(x + 2*dx + 40, y + 40, 40, -90, 2.5, darkcolor);
}

//Carga elétrica positiva
function electricChargePos(x, y, radius, stroke, color){	
	var x; y; radius; stroke; color;
	lineAngle(x - radius/2, y, radius, 0, stroke, color);
	lineAngle(x, y - radius/2, radius, 90, stroke, color);
}

//Carga elétrica negativa
function electricChargeNeg(x, y, radius, stroke, color){	
	var x; y; radius; stroke; color;
	lineAngle(x - radius/2, y, radius, 0, stroke, color);	
}

//Pilha comum
function battery(x, y, rotation){
	var x; y; rotation;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	rectangle(x + 4 , y - 4, 12, 5, 1, 0,'#341f97', '#c8d6e5');
	rectangle(x, y, 20, 60, 1, 0, '#341f97', '#c8d6e5');
	electricChargePos(x + 10, y + 10, 8, 2.5, 'white');
	electricChargeNeg(x + 10, y + 50, 8, 2.5, 'white');
	//
	ctx.restore();
}

//Lâmpada 
function lamp(x, y, condition){
	var x; y; condition;
	var cor;
	if(condition == 0){
		cor = 'rgba(255,255,255,0)';
	}else{
		cor = '#feca57';
	}
	circle(x + 6, y - 12, 14, 1, '#576574', cor);
	rectangle(x, y, 12, 6, 1, 0, darkcolor, '#576574');
}

//Lâmpada 
function lamp2(x, y, alpha){
	var x; y; alpha;
	var cor = 'rgba(249, 202, 36,' + alpha + ')';
	circle(x + 6, y - 12, 14, 1, '#576574', cor);
	rectangle(x, y, 12, 6, 1, 0, darkcolor, '#576574');
	lineAngle(x + 25, y - 14, 8, 0, 2, cor);
	lineAngle(x - 13, y - 14, 8, 180, 2, cor);
	lineAngle(x + 6, y - 40, 8, 90, 2, cor);
	lineAngle(x + 20, y - 25, 8, -45, 2, cor);
	lineAngle(x - 8, y - 25, 8, -135, 2, cor);
}

function voltimetro(x, y, L, dx, valor, color){
	var x; y; L; dx; valor;	color;	
	vector(x, y, 40, 90, 1.5, color);
	lineAngle(x, y, 10, 0, 1, color);
	lineAngle(x + L, y, -10, 0, 1, color);
	vector(x + L, y, 40, 90, 1.5, color);
	textBold(valor, '9','verdana',x + dx, y + 3, color);
}

//BÚSSOLA
function compassNeedle1(x,y,rotation){
	var x; y; rotation;
	var b = 10;
	var h = 40;	
	var cor = '#718093';
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	triangleI(x, y, 2*b, h, 0, 2.5, cor, bluecolor);
	triangleI(x, y, 2*b, -h, 0, 2.5, cor, redcolor);	
	//		
	ctx.restore();				
}

function compassNeedle2(x,y,rotation1, rotation2){
	var x; y; rotation1; rotation2;
	var b = 10;
	var h = 40;
	var R = 55;
	var cor = '#718093';
	var colorN = '#EA2027';
	var colorS = '#eb2f06';
	//
	compassNeedle1(x,y,rotation2);
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation1*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	
	circle(x, y, R, 1, darkcolor, nocolor);
	for(var i = 0; i < 12;i++){
		lineReverse(x, y, R, 8, 30*i, 1, darkcolor);
	}
	textBold('N', '10','verdana',x - 5,y - R - 5, darkcolor);
	textBold('S', '10','verdana',x - 5,y + R + 15, darkcolor);
	textBold('L', '10','verdana',x + R + 5,y + 5, darkcolor);
	textBold('O', '10','verdana',x - R - 15,y + 5, darkcolor);
	//		
	ctx.restore();				
}

//***********************************************************************
//ÓPTICA GEOMETRICA
//OLHO (OBSERVADOR VISUAL)
function visualObserver(x1, y1,rotacao,escala, cor){
	var x1; y1; rotacao; escala; cor;	
	var dx = 25;
	var dy = 15;
	ctx.save();
	ctx.translate(x1,y1);
	ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x1,-y1);
	ctx.scale(escala,escala);
	x1 = x1/escala;
	y1 = y1/escala;
	//
	ctx.beginPath();	
	ctx.moveTo(x1 + dx, y1 - dy);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x1 + dx, y1 + dy);
	ctx.lineWidth = 1;
	ctx.strokeStyle= cor;
	ctx.stroke();
	//	
	arcCircle2(x1, y1, dx, -32, 32, 1, cor);
	arcCircle2(x1 + 36, y1, 15, 145, 210, 1, cor);		
	//
	ctx.restore();
}



//TERMODINÂMICA --------------------------------------------------------

//BICO DE BUNSEN (ALTURA DA HASTE, ALTURA DA CHAMA, LIGADO/DESLIGADO
function bicoBunsen(x, y, h, hf, condition){
	var pxf = x + 24;
	var pyf = y - 25 - h;
	var colorfill = '#bdc3c7';
	var colorstroke = '#192a56';	
	var pontosx = [0, 25, 35, 60];
	var pontosy = [0, 10, 15];
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(x + pontosx[0], y - pontosy[0]);
	ctx.lineTo(x + pontosx[3], y - pontosy[0]);
	ctx.lineTo(x + pontosx[3], y - pontosy[1]);
	ctx.lineTo(x + pontosx[2], y - pontosy[2]);
	ctx.lineTo(x + pontosx[1], y - pontosy[2]);
	ctx.lineTo(x + pontosx[0], y - pontosy[1]);
	ctx.closePath();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	rectangle(x + pontosx[1], y - h - pontosy[2], 10, h, 1.5, 0, colorstroke, colorfill);
	rectangle(x + pontosx[1] - 2, y - h - pontosy[2] - 7, 14, 7, 1.5, 0, colorstroke, colorfill);	
	if(condition == true){		
		triangle(pxf, pyf, pxf + 13, pyf, pxf + 6.5, pyf - hf, 1.5, redcolor, redcolor);
		triangle(pxf + 3, pyf, pxf + 10,pyf,  pxf + 6.5, pyf - 0.4*hf, 1.5, '#fbc531', '#fbc531');	
	}		
}

//TERMÔMETRO
function thermometer(x,y,h,temp){
	var x; y; h; temp;
	//
	if(temp > h){
		temp = h - 10
	}			
	//
	ctx.beginPath();
	ctx.arc(x, y, 10, -60*Math.PI/180, -120*Math.PI/180, false);
	ctx.moveTo(x - 5, y - 8);
	ctx.lineTo(x - 5, y - h);
	
	ctx.moveTo(x - 6, y - h);
	ctx.lineTo(x + 6, y - h);
	
	ctx.moveTo(x - 5, y - h);
	ctx.lineTo(x + 5, y - h);
	ctx.lineTo(x + 5, y - 8);
	ctx.lineWidth = 2.3;
	ctx.fillStyle = 'white';
	ctx.fill();	
	ctx.strokeStyle = darkcolor;
	ctx.stroke();			
	//
	ctx.beginPath();
	ctx.arc(x, y, 6, Math.PI, -Math.PI, false);			
	ctx.fillStyle = '#e74c3c';
	ctx.fill();		
	rectangle(x - 1.5, y - 5, 3, -temp, 1, 0, '#e74c3c', '#e74c3c');	
}

// MOLÉCULA DE UM CORPO SÓLIDO
function particle(x ,y, temp, radius, color){
    var x; y; temp; radius; color;   
	var x1;
	var y1;
    //
    valor_sinal1 = Math.random();
    valor_sinal2 = Math.random();
    if(valor_sinal1 > 0.5){
        sinal1 = 1;
    }else{
        sinal1 = -1;
    }           
    if(valor_sinal2 > 0.5){
        sinal2 = 1;
    }else{
        sinal2 = -1;
    }
    //
    ruido1 = Math.random()*temp*sinal1;
    ruido2 = Math.random()*temp*sinal2;
    //
    x1 = x + ruido1;
    y1 = y + ruido2;
    circle(x1, y1, radius, 1, color, color);   
}

//BECKER
function becker(x, y, w, h1, h2, colorfill){
	var R = 5;
	var dh = 8;	
	ctx.beginPath();
	ctx.arc(x + R, y - R, R, Math.PI/2, Math.PI, false);
	ctx.moveTo(x, y - R);
	ctx.lineTo(x, y - h2);
	ctx.lineTo(x + w + R + dh, y - h2);		
	ctx.lineTo(x + w + R + dh, y - R);
	ctx.arc(x + w + dh, y - R, R, 0, Math.PI/2, false);
	ctx.lineTo(x + R, y);
	ctx.lineWidth = 0;
	ctx.strokeStyle = nocolor;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();				
	//
	arcCircle2(x + R, y - R, R, 90, 180, 2.5, darkcolor);
	line(x, y - R, x, y - h1, 2.5, darkcolor);
	line(x, y - h1, x - dh, y - h1 - dh, 2.5, darkcolor);
	line(x - dh, y - h1 - dh, x + w + dh + R + 1, y - h1 - dh, 1.5, darkcolor);
	line(x + w + dh + R, y - h1 - dh, x + w + dh + R, y - R, 2.5, darkcolor);
	arcCircle2(x + w + dh, y - R, R, 0, 90, 2.5, darkcolor);
	line(x + w + dh, y, x + R, y, 2.5, darkcolor);
}

// -------------------------------------------------------
//STICKERS -------------------------------------------------------

//Ponta de seta rotacionável
function arrow(x,y,b,color,rotation){
	var x; y; b; color; rotation;
	//var dx 
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x, y - 0.6*b);
	ctx.lineTo(x - b/2, y + 0.4*b);
	ctx.lineTo(x + b/2, y + 0.4*b);
	ctx.closePath();
	ctx.fillStyle= color;
	ctx.fill();		
	//
	ctx.restore();
}

//Arco de circunferência com seta 180º
function arc180Arrow(x, y, radius, color, side, rotation){
	var x; y; radius; color; side; rotation;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180);
	ctx.translate(-x,-y);
	//
	if(side == 1){
		arcCircle2(x, y, radius, 90, 270, 2.5, color);
		arrow(x,y - (radius - 1),10,color,90);
	}	
	if(side == 2){
		arcCircle2(x, y, radius, 270, 90, 2.5, color);
		arrow(x,y - (radius - 1),10,color,-90);	
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
function stickersArrow(x, y, width, scale, rotation, color){
	var x; y; width; scale; rotation; color;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.scale(scale,scale);
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
	ctx.lineTo(x, y + 5);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
	//
	ctx.restore();	
}

//Seta com rotação
function stickersArrowSmall(x, y, width, rotation, color){
	var x; y; width; rotation; color;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x, y - 2.5);
	ctx.lineTo(x + width, y - 2.5);
	ctx.lineTo(x + width, y - 8);
	ctx.lineTo(x + width + 16, y);
	ctx.lineTo(x + width, y + 8);
	ctx.lineTo(x + width, y + 2.5);
	ctx.lineTo(x, y + 2.5);
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
function arcArrow(x, y, radius, ang, rotation,color){	
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

//Conector para mapa conceitual, 
function arcArrow2(x, y, radius, ang, rotation,color){	
	var x; y; radius; ang; color;
	var ang2 = 180 - ang;
	var xs = radius*Math.cos(ang*Math.PI/180);
	var ys = -radius*Math.sin(ang*Math.PI/180);
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	arcCircle2(x + radius, y, radius, ang, 180, 2.5, color);
	circle(x, y, 3, 1, color, color);
	arrow(x + radius + xs, y - ys, 12, color, ang);
	//
	ctx.restore();
}

//Boneco visto do frente
function person(x, y, rotation, scale, colorfill){
	var x; y; rotation; scale; colorfill;	
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(-rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x*scale,-y*scale);
	ctx.scale(scale,scale);
	//
	rectangle(x, y - 20, 5, 20, 0, 0, nocolor, colorfill);
	rectangle(x + 7, y - 20, 5, 20, 0, 0, nocolor, colorfill);
	rectangle(x, y - 22 - 19, 12, 20, 0, 0, nocolor, colorfill);
	rectangle(x - 6, y - 22 - 19, 5, 20, 0, 0, nocolor, colorfill);
	rectangle(x + 13, y - 22 - 19, 5, 20, 0, 0, nocolor, colorfill);
	circle(x + 6, y - 29 - 19, 5, 0, nocolor, colorfill);
	//
	ctx.restore();
}

function personLateral(px, py, rotation, scale, colorfill){	
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(-rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px*scale,-py*scale);
	ctx.scale(scale,scale);
	//
	rectangle(px, py - 20, 5, 20, 1, colorfill, colorfill);		
	rectangle(px, py - 42, 6, 20, 1, colorfill, colorfill);
	rectangle(px + 3, py - 5, 5, 5, 1, colorfill, colorfill);
	rectangleRotation(px, py - 38, 4, 18, -30, 1, colorfill, colorfill);		
	circle(px + 3, py - 29 - 20, 5, 0, colorfill, colorfill);
	//
	ctx.restore();
}

//MARCADOR DE ACERTO -------------------------------------
function right(x,y, scale, stroke, colorstroke){
	var x; y; scale; stroke; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.setLineDash([1,0]);
	ctx.lineTo(x + 5, y + 10);
	ctx.quadraticCurveTo(x + 10, y, x + 15, y - 5);
	//ctx.lineTo(px + 15, py - 5);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

//MARCADOR DE ERRO --------------------------------------
function error(x, y, scale){
	var x; y; scale;
	var cor = '#EA2027';
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//		
	rectangle(x, y, 23, -5, 1.5, 45, cor, cor);
	rectangle(x, y + 12.6, 23, 5, 1.5, -45, cor, cor);	
	//
	ctx.restore();	
}

//CHAVE (SÍMBOLO MATEMÁTICO) --------------------------------------
function chave(x, y, d, rotation, color){
	var x, y, d, rotation, color;
	var stroke = 2;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	line(x, y, x - 5, y - 5, stroke, color);
	line(x, y, x + 5, y - 5, stroke, color);
	line(x - 5, y - 5, x - d, y - 5, stroke, color);
	line(x + 5, y - 5, x + d, y - 5, stroke, color);
	line(x - d, y - 5, x - d - 5, y - 10, stroke, color);
	line(x + d, y - 5, x + d + 5, y - 10, stroke, color);
	//
	ctx.restore();
}

function mask(x, y, radius, L, H, rotation, colorFill){
	var x; y; radius; L; H;	rotation;	
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//------->
	ctx.beginPath();		
	ctx.lineCap = "round";
	ctx.moveTo(x - radius,y);
	ctx.arc(x, y, radius, -Math.PI, 0, false);	
	ctx.lineTo(x + radius + L, y);	
	ctx.lineTo(x + radius + L, y - H);
	ctx.lineTo(x - L - radius, y - H);
	ctx.lineTo(x - L - radius, y);
	ctx.closePath();	
	//	
	ctx.fillStyle = colorFill;
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = colorFill;
	ctx.stroke();	
	//
	ctx.restore();
}


//PEDRO PAULO INFOWEB 2020 -------------------------------
//CARRO NORMAL
function carModel(x, y, colorCar, colorDetail, scalex, scaley){
        var x; y; colorCar; colorDetail; scalex; scaley;	
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scalex,scaley);
        ctx.translate(-x,-y);
        // CARCAÇA
        ctx.beginPath();	
        ctx.moveTo(x+5, y-1);
        ctx.arc(x+5, y - 8, 6, Math.PI/2, Math.PI*2.7/2, false);
        ctx.lineTo(x, y-29);
        ctx.lineTo(x + 18, y-27);
        ctx.lineTo(x + 27, y-45);
        ctx.lineTo(x + 65, y-45);
        ctx.arc(x + 65, y-40, 5, Math.PI*1.5, -0.5, false);
        ctx.lineTo(x + 76, y-25);
        ctx.lineTo(x + 108, y-25);
        ctx.lineTo(x + 108, y-15);
        ctx.arc(x + 108, y-8, 5, Math.PI*3/2, Math.PI/2, false);
        ctx.lineTo(x+5, y-1);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorCar;
        ctx.fill();
        //	PARACHOQUE
        ctx.beginPath();	
        ctx.moveTo(x, y);
        ctx.lineTo(x+110, y);
        ctx.arc(x + 110, y - 3, 3, Math.PI/2, 3/2*Math.PI, true);
        ctx.lineTo(x, y-6);
        ctx.arc(x, y - 3, 3, Math.PI*3/2, Math.PI/2, true);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // RODA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // RODA 2
        ctx.beginPath();
        ctx.arc(x + 91, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA2
        ctx.beginPath();
        ctx.arc(x + 91, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // VIDRO TRAS
        ctx.beginPath();
        ctx.moveTo(x+24, y - 27);
        ctx.lineTo(x+30, y - 41);
        ctx.lineTo(x+45, y - 41);
        ctx.lineTo(x+45, y - 27);
        ctx.lineTo(x+24, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // VIDRO FRENTE
        ctx.beginPath();
        ctx.moveTo(x+50, y - 27);
        ctx.lineTo(x+50, y - 41);
        ctx.lineTo(x+60, y - 41);
        ctx.arc(x+62, y - 35, 6, Math.PI*3/2, Math.PI*3.6/2, false);
        ctx.lineTo(x+70, y - 27);
        ctx.lineTo(x+50, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // MAÇANETA TRAS
        ctx.beginPath();
        ctx.rect(x+32, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // MAÇANETA FRENTE
        ctx.beginPath();
        ctx.rect(x+51, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // DETALHE FRENTE E TRAS
        rectangleRound(x - 3, y - 10, 10, 2, 1, 1, colorDetail, colorDetail);
        rectangleRound(x + 102, y - 10, 12, 2, 1, 1, colorDetail, colorDetail);
        rectangleRound(x - 1, y - 16.5, 4, 7, 2, 1, '#d23d09', '#d23d09');
        rectangleRound(x + 103.5, y - 14.5, 5, 9, 2, 1, '#ffce37', '#ffce37');
        //
        ctx.restore();
}

//KOMBI
    function carModel2(x, y, color1, color2, color3, scalex, scaley){
        var x; y; color1; color2; scalex; scaley;	
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scale,scale);
        ctx.translate(-x,-y);
        // CARCAÇA
        ctx.beginPath();	
        ctx.moveTo(x, y-30);
        ctx.lineTo(x, y-45);
        ctx.arc(x+10, y-45, 10, Math.PI, 3/2*Math.PI, false);
        ctx.lineTo(x + 90, y-55);
        ctx.arc(x+95, y-50, 5, 3/2*Math.PI, -0.5, false);
        ctx.arc(x + 100, y-30, 10, Math.PI*1.8,Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = color1;
        ctx.fill();
        //ctx.stroke();
        // CARCAÇA 2
        ctx.beginPath();	
        ctx.moveTo(x + 110, y - 30);
        ctx.lineTo(x + 110, y - 10);
        ctx.arc(x + 100, y - 13, 10, Math.PI*2,Math.PI*2.3, false);
        ctx.lineTo(x, y - 5);
        ctx.lineTo(x, y - 30);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = color2;
        ctx.fill();
        //PARACHOQUE
        ctx.beginPath();	
        ctx.moveTo(x+1, y);
        ctx.lineTo(x+108, y);
        ctx.arc(x + 108, y - 3, 3, Math.PI/2, 3/2*Math.PI, true);
        ctx.lineTo(x+1, y-6);
        ctx.arc(x+1, y - 3, 3, Math.PI*3/2, Math.PI/2, true);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = color3;
        ctx.fill();
        // RODA 1
        ctx.beginPath();
        ctx.arc(x + 20, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA 1
        ctx.beginPath();
        ctx.arc(x + 20, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // RODA 2
        ctx.beginPath();
        ctx.arc(x + 88, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA2
        ctx.beginPath();
        ctx.arc(x + 88, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // VIDRO TRAS
        ctx.beginPath();
        ctx.moveTo(x+16, y - 35);
        ctx.lineTo(x+16, y-45);
        ctx.arc(x + 21, y-45, 5, Math.PI, 3/2*Math.PI, false);
        ctx.lineTo(x+36, y-50);
        ctx.lineTo(x+36, y-35);
        ctx.lineTo(x+16, y - 35);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // VIDRO MEIO
        ctx.beginPath();
        ctx.rect(x+40, y-50, 26, 15);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // VIDRO MEIO 2
        ctx.beginPath();
        ctx.rect(x+70, y-50, 20, 15);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // VIDRO FRENTE
        ctx.beginPath();
        ctx.moveTo(x+94, y - 35);
        ctx.lineTo(x+94, y - 50);
        ctx.lineTo(x+94, y - 50);
        ctx.arc(x+94, y - 44, 6, Math.PI*3/2, Math.PI*3.6/2, false);
        ctx.lineTo(x+104, y - 35);
        ctx.lineTo(x+90, y - 35);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // MAÇANETA FRENTE
        ctx.beginPath();
        ctx.rect(x+53, y-26, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = color1;
        ctx.fill();
        ctx.restore();
        rectangleRound(x - 2, y - 6, 3, 6, 2, 1, '#d23d09', '#d23d09');
        rectangleRound(x + 107, y - 18, 5, 8, 2, 1, '#ffce37', '#ffce37');
}
   

