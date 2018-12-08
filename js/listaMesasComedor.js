

let btn_detalle1 = document.getElementById('btn_detalle1');
let btn_detalle2 = document.getElementById('btn_detalle2');
let btn_detalle3 = document.getElementById('btn_detalle3');
let btn_detalle4 = document.getElementById('btn_detalle4');
let btn_detalle5 = document.getElementById('btn_detalle5');
let btn_detalle6 = document.getElementById('btn_detalle6');
let btn_detalle7 = document.getElementById('btn_detalle7');
let btn_detalle8 = document.getElementById('btn_detalle8');



btn_detalle1.onclick = function(){

	mostrarModal('modalMesaComedor1'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle2.onclick = function(){

	mostrarModal('modalMesaComedor2'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle3.onclick = function(){

	mostrarModal('modalMesaComedor3'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle4.onclick = function(){

	mostrarModal('modalMesaComedor4'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle5.onclick = function(){

	mostrarModal('modalMesaComedor5'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle6.onclick = function(){

	mostrarModal('modalMesaComedor6'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle7.onclick = function(){

	mostrarModal('modalMesaComedor7'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle8.onclick = function(){

	mostrarModal('modalMesaComedor8'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

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