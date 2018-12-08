let btn_enviarEmail = document.getElementById('btn_enviarCorreo');

btn_enviarEmail.onclick = function(){

	let campoVacio = false;
	let listaInputs = document.querySelectorAll('input');

	for (var i = 0; i < listaInputs.length; i++) {

		if(listaInputs[i].value == null || listaInputs[i].value == ''){

			campoVacio = true;
			break;

		}

	}

	if(campoVacio){

		alert('Error, por favor llene todos los campos!');

	}else{

		alert('Correo enviado correctamente!');

	}

}