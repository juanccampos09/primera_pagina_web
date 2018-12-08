

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
let btn_detalle17 = document.getElementById('btn_detalle17');
let btn_detalle18 = document.getElementById('btn_detalle18');
let btn_detalle19 = document.getElementById('btn_detalle19');
let btn_detalle20 = document.getElementById('btn_detalle20');
let btn_detalle21 = document.getElementById('btn_detalle21');



btn_detalle1.onclick = function(){

	mostrarModal('modalMueble1'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle2.onclick = function(){

	mostrarModal('modalMueble2'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle3.onclick = function(){

	mostrarModal('modalMueble3'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle4.onclick = function(){

	mostrarModal('modalMueble4'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle5.onclick = function(){

	mostrarModal('modalMueble5'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle6.onclick = function(){

	mostrarModal('modalMueble6'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle7.onclick = function(){

	mostrarModal('modalMueble7'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle8.onclick = function(){

	mostrarModal('modalMueble8'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle9.onclick = function(){

	mostrarModal('modalMueble9'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle10.onclick = function(){

	mostrarModal('modalMueble10'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle11.onclick = function(){

	mostrarModal('modalMueble11'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle12.onclick = function(){

	mostrarModal('modalMueble12'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle13.onclick = function(){

	mostrarModal('modalMueble13'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle14.onclick = function(){

	mostrarModal('modalMueble14'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle15.onclick = function(){

	mostrarModal('modalMueble15'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle16.onclick = function(){

	mostrarModal('modalMueble16'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle17.onclick = function(){

	mostrarModal('modalMueble17'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle18.onclick = function(){

	mostrarModal('modalMueble18'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle19.onclick = function(){

	mostrarModal('modalMueble19'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle20.onclick = function(){

	mostrarModal('modalMueble20'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle21.onclick = function(){

	mostrarModal('modalMueble21'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

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