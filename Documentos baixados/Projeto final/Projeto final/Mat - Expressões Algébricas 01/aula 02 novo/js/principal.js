var px = 300;
var py = 200;
function desenhar(){
	//apaga a tela cada vez que a função "desenhar" é lida pelo navegador	
	clear(); 
	//marcação das bordas da tela
	rectangle(5, 5, canvas.width - 10, canvas.height - 10, 1, 0, nocolor, darkcolor); 	
	//**********************//	
	
	//CONTEÚDO -------------------------//
	point(px, py, redcolor);	
	//px = px + 1;

	//**********************//	
	animationFrame(desenhar); 	
}
draw(desenhar);
