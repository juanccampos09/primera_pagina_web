

let btn_detalle1 = document.getElementById('btn_detalle1');
let btn_detalle2 = document.getElementById('btn_detalle2');
let btn_detalle3 = document.getElementById('btn_detalle3');
let btn_detalle4 = document.getElementById('btn_detalle4');
let btn_detalle5 = document.getElementById('btn_detalle5');
let btn_detalle6 = document.getElementById('btn_detalle6');
let btn_detalle7 = document.getElementById('btn_detalle7');
let btn_detalle8 = document.getElementById('btn_detalle8');
let btn_detalle9 = document.getElementById('btn_detalle9');
let btn_detalle10 = document.getElementById('btn_detalle10');
let btn_detalle11 = document.getElementById('btn_detalle11');
let btn_detalle12 = document.getElementById('btn_detalle12');
let btn_detalle13 = document.getElementById('btn_detalle13');
let btn_detalle14 = document.getElementById('btn_detalle14');
let btn_detalle15 = document.getElementById('btn_detalle15');
let btn_detalle16 = document.getElementById('btn_detalle16');



btn_detalle1.onclick = function(){

	mostrarModal('modalCama1'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle2.onclick = function(){

	mostrarModal('modalCama2'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle3.onclick = function(){

	mostrarModal('modalCama3'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle4.onclick = function(){

	mostrarModal('modalCama4'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle5.onclick = function(){

	mostrarModal('modalCama5'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle6.onclick = function(){

	mostrarModal('modalCama6'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle7.onclick = function(){

	mostrarModal('modalCama7'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle8.onclick = function(){

	mostrarModal('modalCama8'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle9.onclick = function(){

	mostrarModal('modalCama9'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle10.onclick = function(){

	mostrarModal('modalCama10'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle11.onclick = function(){

	mostrarModal('modalCama11'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle12.onclick = function(){

	mostrarModal('modalCama12'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle13.onclick = function(){

	mostrarModal('modalCama13'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle14.onclick = function(){

	mostrarModal('modalCama14'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle15.onclick = function(){

	mostrarModal('modalCama15'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle16.onclick = function(){

	mostrarModal('modalCama16'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}


function mostrarModal(id){

	let modal = document.getElementById(id);
	let body = document.getElementsByClassName('cuerpo')[0];
	let btn_cerrar = modal.querySelector('#btn_cerrar');

	// evitando que el usuario haga scroll mientras se muestra el modal
	body.className = 'inBackground';
	// mostrando el modal
	modal.style.display = 'block';

	btn_cerrar.onclick = function(){

		cerrarModal(modal);

	}


}

function cerrarModal(pvo_modal){

	var vlo_modal = pvo_modal;
	let body = document.getElementsByClassName('inBackground')[0];
	
	// volviendo a agregar el scroll al cuerpo
	body.className = 'cuerpo';

	vlo_modal.style.display = "none";
	
}