var tela = [0,1,0,0,0,0,0,0,0,0];
//var tela = [0,1,1,1,1,1,1,1,1,1];
var i = 1;
var max = 20;
//----------------------------------
function whichButton(event) {
	if (event.keyCode == 39) {
		if(i <= max){
			i = i + 1;
			tela[i] = 1;
			//tela[i-1] = 0;		
			clear();
			desenhar();
		}
    }	
    if (event.keyCode == 37) {
		if(i > 1){
			tela[i] = 0;
			i = i - 1;
			
			clear();
			desenhar();  
		}	
    }    
}
//----------------------------------

function conectorR(x, y, h1, L, h2, angulo, cor){
	var x; y; h1; L; h2; angulo, cor;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angulo*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	lineAngle(x, y, h1, 90, 2, cor);
	lineAngle(x, y + h1, L, 0, 2, cor);
	vector(x + L, y + h1, h2, -90, 2, cor);
	//
	ctx.restore();
}

function potencia(x, y, exp, cor){
	var x; y; exp; cor;
	textBold('10', 14, 'verdana', x, y, cor);
	textBold(exp, 11, 'verdana', x + 30, y - 10, cor);
}

function notC(x, y, N, exp, dx, cor){
	var x; y; N; exp; dx; cor;
	textBold(N, 14, 'verdana', x, y, cor);
	textBold('x', 12, 'verdana', x + dx, y - 2, cor);
	textBold('10', 14, 'verdana', x + dx + 20, y, cor);
	textBold(exp, 11, 'verdana', x + dx + 50, y - 10, cor);
}