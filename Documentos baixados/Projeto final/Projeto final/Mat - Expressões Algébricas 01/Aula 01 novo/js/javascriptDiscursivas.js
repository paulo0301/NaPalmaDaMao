function validar1(){
	var n = document.formulario1.resposta.value;
	document.formulario1.VF.disabled = "disabled";
	if(n == 18 ){
		document.formulario1.VF.value = "Correto";	
		document.formulario1.resposta.disabled = 1;		
	} else{
		document.formulario1.VF.value = "Errado";		
	}
}

function liberar1(){		
	document.formulario1.resposta.value = "";
	document.formulario1.VF.value = "";
	document.formulario1.resposta.disabled = 0;			
}

<!-- -------------------------------------------------- -->
function validar2(){
	var n = document.formulario2.resposta.value;
	document.formulario2.VF.disabled = "disabled";
	if(n == 4){
		document.formulario2.VF.value = "Correto";	
		document.formulario2.resposta.disabled = 1;		
	} else{
		document.formulario2.VF.value = "Errado";		
	}
}

function liberar2(){		
	document.formulario2.resposta.value = "";
	document.formulario2.VF.value = "";
	document.formulario2.resposta.disabled = 0;			
}


<!-- -------------------------------------------------- -->

function validar3(){
	var n = document.formulario3.resposta.value;
	document.formulario3.VF.disabled = "disabled";
	if(n == 1){
		document.formulario3.VF.value = "Correto";	
		document.formulario3.resposta.disabled = 1;		
	} else{
		document.formulario3.VF.value = "Errado";		
	}
}

function liberar3(){		
	document.formulario3.resposta.value = "";
	document.formulario3.VF.value = "";
	document.formulario3.resposta.disabled = 0;			
}

<!-- -------------------------------------------------- -->

function validar4(){
	var n = document.formulario4.resposta.value;
	document.formulario4.VF.disabled = "disabled";
	if(n == 0){
		document.formulario4.VF.value = "Correto";	
		document.formulario4.resposta.disabled = 1;		
	} else{
		document.formulario4.VF.value = "Errado";		
	}
}

function liberar4(){		
	document.formulario4.resposta.value = "";
	document.formulario4.VF.value = "";
	document.formulario4.resposta.disabled = 0;			
}

<!-- -------------------------------------------------- -->

function validar5(){
	var n = document.formulario5.resposta.value;
	document.formulario5.VF.disabled = "disabled";
	if(n == 30){
		document.formulario5.VF.value = "Correto";	
		document.formulario5.resposta.disabled = 1;		
	} else{
		document.formulario5.VF.value = "Errado";		
	}
}

function liberar5(){		
	document.formulario5.resposta.value = "";
	document.formulario5.VF.value = "";
	document.formulario5.resposta.disabled = 0;			
}

<!-- -------------------------------------------------- -->

function noenter() {
  return !(window.event && window.event.keyCode == 13); 
}
