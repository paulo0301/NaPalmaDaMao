/* --------------------------------------------------------- */
/* gab = 0: Letra A está correta */
/* gab = 1: Letra B está correta */
var gab = 0;
/* NÃO ALTERAR --------------------------------------------------------- */
function btn1(){	
	document.getElementById('comentarioA').hidden = true;
	document.getElementById('comentarioE').hidden = true;	
	var n1 = document.getElementById('a1').checked;
	var n2 = document.getElementById('b1').checked;		
	R = "";
	if(n1 == true){R = 0};
	if(n2 == true){R = 1};	
	validar1();
}

function validar1(){			
	if(R == gab){			
		document.getElementById('comentarioA').hidden = false;
	}else{			
		document.getElementById('comentarioE').hidden = false;
	}	
}