// ---------------------------------------------------
var cont = 0;
var j = 0;
var validarresposta = false;
//
var numerador =   [1, 1, 1, 2, 1, 2,  3, 2, 3,  1,  4];	
var denominador = [2, 4, 3, 3, 3, 5,  4, 3, 5,  3,  5];
var mN =          [6, 8, 6, 6, 9, 10, 8, 9, 10, 12, 10];
var resp =        [3, 2, 2, 4, 3, 4,  6, 6, 6,  4,  8];
var total = 10;
var N = mN[j];
//
function recomecar(){
	texto = '';
	cont = 0;
	j = 0;
	num = numerador[j];
	den = denominador[j];	
	N = 4;
	dx = px + (12 - N)*25;
	Mx = [0,0,0,0,0,0,0,0,0,0,0,0];	
	validarresposta = false;
	validarR1 = false;
	validarR2 = false;
	validarR3 = false;
	validarR4 = false;
	validarR5 = false;
	validarR6 = false;
	validarR7 = false;
	validarR8 = false;
	validarR9 = false;
	validarR10 = false;
	validarR11 = false;
	validarR12 = false;	
}
//
function cliqueMouse(e){			
	var d = 7;
	//  
	if(e.pageX > dx + Mx[0] + d && e.pageX < dx + Mx[1] + d && e.pageY < py + d && e.pageY > py - 50 + d){			
		texto = '';			
		if(validarR1 == false){
			validarR1 = true;
			cont = cont + 1
		}else{
			validarR1 = false;
			cont = cont - 1
		}
		
	}
	
	if(e.pageX > dx + Mx[1] + d && e.pageX < dx + Mx[2] + d && e.pageY < py + d && e.pageY > py - 50 + d){			
		texto = '';
		if(validarR2 == false){
			validarR2 = true;
			cont = cont + 1
		}else{
			validarR2 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[2] + d && e.pageX < dx + Mx[3] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';	
		if(validarR3 == false){
			validarR3 = true;
			cont = cont + 1
		}else{
			validarR3 = false;
			cont = cont - 1
		}
	}
	
    if(e.pageX > dx + Mx[3] + d && e.pageX < dx + Mx[4] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR4 == false){
			validarR4 = true;
			cont = cont + 1
		}else{
			validarR4 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[4] + d && e.pageX < dx + Mx[5] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR5 == false){
			validarR5 = true;
			cont = cont + 1
		}else{
			validarR5 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[5] + d && e.pageX < dx + Mx[6] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR6 == false){
			validarR6 = true;
			cont = cont + 1
		}else{
			validarR6 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[6] + d && e.pageX < dx + Mx[7] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR7 == false){
			validarR7 = true;
			cont = cont + 1
		}else{
			validarR7 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[7] + d && e.pageX < dx + Mx[8] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR8 == false){
			validarR8 = true;
			cont = cont + 1
		}else{
			validarR8 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[8] + d && e.pageX < dx + Mx[9] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR9 == false){
			validarR9 = true;
			cont = cont + 1
		}else{
			validarR9 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[9] + d && e.pageX < dx + Mx[10] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR10 == false){
			validarR10 = true;
			cont = cont + 1
		}else{
			validarR10 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[10] + d && e.pageX < dx + Mx[11] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR11 == false){
			validarR11 = true;
			cont = cont + 1
		}else{
			validarR11 = false;
			cont = cont - 1
		}
	}
	
	if(e.pageX > dx + Mx[11] + d && e.pageX < dx + Mx[12] + d && e.pageY < py + d && e.pageY > py - 50 + d){	
		texto = '';		
		if(validarR12 == false){
			validarR12 = true;
			cont = cont + 1
		}else{
			validarR12 = false;
			cont = cont - 1
		}
	}
	
}	
canvas.onmousedown = cliqueMouse;	

//-----------------------------------------

function confirmar(){	
	if(cont == resp[j]){			
		validarresposta = true;
		texto = 'Correto';		
	}else{
		texto = 'Errado';
	}		
}

function proximo(){
	if(j == total){	
		texto = 'FIM!';
	}	
	if(validarresposta == true && j < total){		
		texto = '';
		cont = 0;
		j = j + 1;
		num = numerador[j];
		den = denominador[j];
		N = mN[j];
		dx = px + (12 - N)*25;
		Mx = [0,0,0,0,0,0,0,0,0,0,0,0];
		
		validarR1 = false;
		validarR2 = false;
		validarR3 = false;
		validarR4 = false;
		validarR5 = false;
		validarR6 = false;
		validarR7 = false;
		validarR8 = false;
		validarR9 = false;
		validarR10 = false;
		validarR11 = false;
		validarR12 = false;	
	}		
	validarresposta = false;
}

//FUNÇÕES AUXILIARES
function fraction(x, y, numerador, denominador, color){
	textStyle1(numerador, '12','verdana',x, y,color);
	lineAngle(x - 7, y + 7, 27, 0, 1, color);
	if(denominador < 10){
		textStyle1(denominador, '12','verdana',x, y + 25,color);
	}else{
		textStyle1(denominador, '12','verdana',x - 5, y + 25,color);
	}
}


