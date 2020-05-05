var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//---------------------------------------------
//QUADRO DE CORES
var cor1 = '#30336b';
var cor2 = '#d35400';
var cor3 = '#f39c12';
var cor4 = '#16a085';
var cor5 = '#7f8c8d';
var cor6 = '#3498db';
var cor7 = '#273c75';
//
var R = 100;
var N = 2;
var j1 = 0;
var j2 = 0;
var ang = 360/N;

function denominadorMais(){	
	if(N <10){
		N = N + 1;	
		ang = 360/N;
		j1 = 0;
		j2 = 0;
		desenhar();
	}
}


function denominadorMenos(){	
	if(N > 2){
		N = N - 1;	
		ang = 360/N;
		j1 = 0;
		j2 = 0;
		desenhar();
	}
}

function pessoa1Mais(){	
	if(j1 + j2 < N){
		j1 = j1 + 1	
		desenhar();
	}
}
function pessoa1Menos(){
	if(j1 > 0){	
		j1 = j1 - 1	
		desenhar();
	}
}

function pessoa2Mais(){	
	if(j1 + j2 < N){
		j2 = j2 + 1	
		desenhar();
	}
}
function pessoa2Menos(){	
	if(j2 > 0){	
		j2 = j2 - 1	
		desenhar();
	}
}

var x1 = 340;
var y1 = 95;
var x2 = x1 + 5;
var y2 = 103;
var x3 = x1 + 5;
var y3 = 148;
function desenhar(){		
	// ESTRUTURA ------------------------------		
	clear(); 
	rectangleRound(5, 270, 560, 265, 5, 1.5, darkcolor, nocolor);
	//BOTÕES ------------------------------------
	textStyle2('Simulador', '8', 'verdana', 15, 25, concretcolor2);
	textStyle2('Denominador', '10', 'verdana', x1, y1, cor7);
	textStyle2('(' + N +  ')', '8', 'verdana', x1 + 40, y1 + 20, cor7);
	textStyle2('João', '10', 'verdana', x1 + 70, y1 + 55, cor7);
	textStyle2('(' + j1 +  ')', '8', 'verdana', x1 + 77, y1 + 75, cor7);
	textStyle2('Mário', '10', 'verdana', x1 + 57, y1 + 120, cor7);
	textStyle2('(' + j2 +  ')', '8', 'verdana', x1 + 70, y1 + 135, cor7);
	
	/*stickersArrow(x1, y1, 15, 0, cor7);
	stickersArrow(x1 - 60, y1, 15, 180, cor7);	
	stickersArrow(x2, y2, 15, 0, cor7);
	stickersArrow(x2 - 60, y2, 15, 180, cor7);
	*/
	//--------------------------------------------
	x = 160;
	y = 140;	
	//
	arcCircle1(x, y, R, -ang*j1, 0, 1, nocolor, cor2);
	arcCircle1(x, y, R, -ang*(j1 + j2), -j1*ang, 1, nocolor, cor4);
	//
	for(var i = 0; i < N; i++){
		lineAngle(x, y, R, i*ang, 1.5, cor1);
	}
	circle(x, y, R, 1.5, cor1, nocolor);
}
desenhar();


