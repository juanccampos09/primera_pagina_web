let lista = document.getElementsByClassName('productos')[0];
var numArticulos = lista.querySelectorAll('.producto').length;
var limitePorPagina = 15;
let paginaSeleccionada = 1;
let numPaginas = Math.ceil(numArticulos / limitePorPagina);
let listaPaginacion = document.getElementById('listaPaginacion');
let btn_paginacionAtras = document.getElementById('btn_paginacionAtras');
let btn_paginacionAdelante = null;// es null ya que todavia no se ha creado el boton

// ciclo para quitar los productos que sobran de la pagina principal
for (var i = 0; i < numArticulos; i++) {

	if(i > limitePorPagina-1){ // se resta 1 ya que la lista de objetos empieza en 0

		lista.querySelectorAll('.producto')[i].style.display = 'none';

	}

}

listaPaginacion.insertAdjacentHTML('beforeend','<li class="btn_pagina active" onclick="seleccionarPagina(this)">1</li>');


// ciclo para agregar las paginas dentro de la lista de paginacion
for (var i = 2; i <= numPaginas; i++) {

	listaPaginacion.insertAdjacentHTML('beforeend','<li class="btn_pagina" onclick="seleccionarPagina(this)">'+i+'</li>');

}

listaPaginacion.insertAdjacentHTML('beforeend','<li id="btn_paginacionAdelante">&raquo;</li>'); // insertando el boton con el signo de flecha que faltaba

// declarando el boton adelante
btn_paginacionAdelante = document.getElementById('btn_paginacionAdelante');



function seleccionarPagina(botonSeleccionado){

	console.log('entro');

	let listaBotones = document.querySelectorAll('.btn_pagina');
	let numElementosEnPaginas = 0; // variable que obtiene todos los elementos hasta la pagina que selecciono
	let listaProductos = document.getElementsByClassName('producto');

	  // ciclo para cambiar el color de la pagina seleccionada
	  for (var i = 0; i < listaBotones.length; i++){

	  	// verificando si el boton es el mismo que se selecciono
	  	if(listaBotones[i] == botonSeleccionado){

	      console.log('pagina: '+(i+1));
	      listaBotones[i].className += ' active';
	      paginaSeleccionada = i+1;

	    }else {
	      
	      listaBotones[i].className = 'btn_pagina';

	  	}


	  }

	cargarImagenes();	  

}


function cargarImagenes(){

	let listaBotones = document.querySelectorAll('.btn_pagina');
	let listaProductos = document.getElementsByClassName('producto');
	let valorInicialCiclo = 0;
	let valorFinalCiclo = 0;


	  console.log('tamaño '+listaProductos.length);
	  // ciclo para limpiar la lista de elementos y colocar los nuevos segun la pagina que selecciono el usuario
	  for (var i = 0; i < listaProductos.length; i++){

	  	listaProductos[i].style.display = 'none';

	  	console.log(i);

	  }

	  // verificando si selecciono la ultima pagina
	  if(paginaSeleccionada == listaBotones.length){

	  	console.log('entro en el if');
	  	// igualando a los elementos sobrantes en el caso de que el total de productos no sea un multiplo del limite de productos a mostrar
	  	valorInicialCiclo = listaProductos.length - (listaProductos.length % limitePorPagina);

	  }else{

	  	console.log('entro en el else');
	  	// igualando a la ultima cantidad de elementos iguales a el limite de productos especificado
	  	valorInicialCiclo = (limitePorPagina * paginaSeleccionada) - limitePorPagina;

	  }

	  // verificando si el valor inicial y el valor final del ciclo existen para guardarlo en la variable correspondiente
	  if(valorInicialCiclo + limitePorPagina > listaProductos.length){

	  	valorFinalCiclo = listaProductos.length;

	  }else{

	  	valorFinalCiclo = valorInicialCiclo + limitePorPagina;

	  }


	  // ciclo para mostrar unicamente los elementos necesario segun la pagina que selecciono el usuario
	  for (var i = valorInicialCiclo; i < valorFinalCiclo; i++) {

	  	console.log('xxx '+i);

	  	listaProductos[i].style.display = 'flex';

	  }

}


btn_paginacionAtras.onclick = function(){
		
	let listaBotones = document.querySelectorAll('.btn_pagina');
	let auxPagSeleccionada = paginaSeleccionada -1;// se le resta 1 ya que los botones empiezan de 1

	console.log(paginaSeleccionada);

	 // verificando que la pagina seleccionada anteriormente no sea ni la primera ni la ultima
	if(paginaSeleccionada > 1){

	 	console.log('entro en el if');
	 	console.log(auxPagSeleccionada);

		listaBotones[auxPagSeleccionada].className = 'btn_pagina'; // quitandole la clase active a la pagina seleccionada anteriormente
		listaBotones[auxPagSeleccionada-1].className += ' active'; // agregando la clase active a la pagina seleccionada
		paginaSeleccionada--;

	}

	cargarImagenes();

}


btn_paginacionAdelante.onclick = function(){
		
	let listaBotones = document.querySelectorAll('.btn_pagina');
	let auxPagSeleccionada = paginaSeleccionada -1;// se le resta 1 ya que los botones empiezan de 1

	console.log(paginaSeleccionada);

	 // verificando que la pagina seleccionada anteriormente no sea ni la primera ni la ultima
	if(paginaSeleccionada < numPaginas){

	 	console.log('entro en el if');
	 	console.log(auxPagSeleccionada);

		listaBotones[auxPagSeleccionada].className = 'btn_pagina'; // quitandole la clase active a la pagina seleccionada anteriormente
		listaBotones[auxPagSeleccionada+1].className += ' active'; // agregando la clase active a la pagina seleccionada
		paginaSeleccionada++;

	}

	cargarImagenes();

}