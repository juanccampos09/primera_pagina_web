let btn_detalleSillones = document.getElementById('btn_detalleSillones');
let btn_detalleMesas = document.getElementById('btn_detalleMesas');
let btn_detalleMesasCafe = document.getElementById('btn_detalleMesasCafe');
let btn_detalleCamas = document.getElementById('btn_detalleCamas');

btn_detalleSillones.onclick = function(){

	document.location.href = "listaSillones.html";

}

btn_detalleMesas.onclick = function(){

	document.location.href = "listaMesasComedor.html";
	
}

btn_detalleMesasCafe.onclick = function(){

	document.location.href = "listaMesasCafe.html";
	
}

btn_detalleCamas.onclick = function(){

	document.location.href = "listaCamas.html";
	
}