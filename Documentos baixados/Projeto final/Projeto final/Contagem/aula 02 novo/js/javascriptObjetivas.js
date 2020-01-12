/* --------------------------------------------------------- */
function btn1(){
	document.ex01.textoCorrecao.value = "";
	var n1 = document.getElementById('a1').checked;
	var n2 = document.getElementById('b1').checked;
	var n3 = document.getElementById('c1').checked;
	var n4 = document.getElementById('d1').checked;
	var n5 = document.getElementById('e1').checked;	
	R1 = 0;
	if(n1 == true){R1 = R1 + 1};
	if(n2 == true){R1 = R1 - 1};
	if(n3 == true){R1 = R1 + 1};
	if(n4 == true){R1 = R1 - 1};
	if(n5 == true){R1 = R1 + 1};	
}

function validar1(){
	if(R1 == 3){
		document.ex01.textoCorrecao.value = "Correto";		
	}else{
		document.ex01.textoCorrecao.value = "Errado";		
	}	
}

/* --------------------------------------------------------- */
function btn2(){
	document.ex02.textoCorrecao.value = "";
	var n1 = document.getElementById('a2').checked;
	var n2 = document.getElementById('b2').checked;
	var n3 = document.getElementById('c2').checked;
	var n4 = document.getElementById('d2').checked;
	var n5 = document.getElementById('e2').checked;
	R2 = 0;
	if(n1 == true){R2 = R2 + 1};
	if(n2 == true){R2 = R2 - 1};
	if(n3 == true){R2 = R2 - 1};
	if(n4 == true){R2 = R2 + 1};
	if(n5 == true){R2 = R2 - 1};
}

function validar2(){
	if(R2 == 2){
		document.ex02.textoCorrecao.value = "Correto";		
	}else{
		document.ex02.textoCorrecao.value = "Errado";		
	}	
}

/* --------------------------------------------------------- */
function btn3(){
	document.ex03.textoCorrecao.value = "";
	var n1 = document.getElementById('a3').checked;
	var n2 = document.getElementById('b3').checked;
	var n3 = document.getElementById('c3').checked;
	var n4 = document.getElementById('d3').checked;
	var n5 = document.getElementById('e3').checked;
	R3 = 0;
	if(n1 == true){R3 = R3 - 1};
	if(n2 == true){R3 = R3 - 1};
	if(n3 == true){R3 = R3 - 1};
	if(n4 == true){R3 = R3 + 1};
	if(n5 == true){R3 = R3 + 1};
}

function validar3(){
	if(R3 == 2){
		document.ex03.textoCorrecao.value = "Correto";		
	}else{
		document.ex03.textoCorrecao.value = "Errado";		
	}	
}

/* --------------------------------------------------------- */
function btn4(){
	document.ex04.textoCorrecao.value = "";
	var n1 = document.getElementById('a4').checked;
	var n2 = document.getElementById('b4').checked;
	var n3 = document.getElementById('c4').checked;
	var n4 = document.getElementById('d4').checked;
	var n5 = document.getElementById('e4').checked;
	R4 = 0;
	if(n1 == true){R4 = R4 - 1};
	if(n2 == true){R4 = R4 + 1};
	if(n3 == true){R4 = R4 + 1};
	if(n4 == true){R4 = R4 - 1};
	if(n5 == true){R4 = R4 - 1};
}

function validar4(){
	if(R4 == 2){
		document.ex04.textoCorrecao.value = "Correto";		
	}else{
		document.ex04.textoCorrecao.value = "Errado";		
	}	
}

/* --------------------------------------------------------- */
function btn5(){
	document.ex05.textoCorrecao.value = "";
	var n1 = document.getElementById('a5').checked;
	var n2 = document.getElementById('b5').checked;
	var n3 = document.getElementById('c5').checked;
	var n4 = document.getElementById('d5').checked;
	var n5 = document.getElementById('e5').checked;
	R5 = 0;
	if(n1 == true){R5 = R5 + 1};
	if(n2 == true){R5 = R5 + 1};
	if(n3 == true){R5 = R5 - 1};
	if(n4 == true){R5 = R5 - 1};
	if(n5 == true){R5 = R5 - 1};
}

function validar5(){
	if(R5 == 2){
		document.ex05.textoCorrecao.value = "Correto";		
	}else{
		document.ex05.textoCorrecao.value = "Errado";		
	}	
}

