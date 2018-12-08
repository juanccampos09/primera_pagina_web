

let btn_detalle1 = document.getElementById('btn_detalle1');
let btn_detalle2 = document.getElementById('btn_detalle2');



btn_detalle1.onclick = function(){

	mostrarModal('modalMesaCafe1'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

}

btn_detalle2.onclick = function(){

	mostrarModal('modalMesaCafe2'); // indicando que tiene que mostrar el modal 1 cuando se preciona le boton detalle 1	

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