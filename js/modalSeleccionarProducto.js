
// variable que indica cual es la fila que se selecciono
var indexSeleccionado = -1;

let btn_buscarProducto = document.getElementById('btn_buscar').onclick = function(){

	// codigo para realizar la busqueda del producto que el usuario desea
	let inputNombreProducto = document.getElementById('iptNombreProducto');
	let valorIngresado = inputNombreProducto.value.toLowerCase();
	// obteniendo la lista de los producto disponibles 
	// seleccionando todos los elementos que se encuentren
	// dentro de la lista con el id productoDisponible
	let listaProductos = document.getElementById('listaProductosDisponibles').querySelectorAll('#productoDisponible');
	let txt_productoNoEncontrado = document.getElementById('listaProductosDisponibles').querySelector('textoProductoNoEncontrado');
	let vln_contFilas = 0;
	let msjProductoNoEncontrado = document.getElementById('productoNoEncontrado');

	// desapareciendo el mensaje de producto no encontrado cuando se realiza la busqueda
	msjProductoNoEncontrado.style.display = 'none';

	 // realizando el filtro de la lista segun el valor ingresado
      for(let i = 0;i < listaProductos.length;i++){

      	// obteniendo el nombre del producto
        let nombreProducto = listaProductos[i].querySelector("#nombreProducto");

        // verificando si las letras ingresadas considen con el nombre de alguno de los productos
        if(nombreProducto.innerHTML.toLowerCase().indexOf(valorIngresado) != -1){

          listaProductos[i].style.display = 'block';
          vln_contFilas++; // aumentando el contador de filas para identificar que 
          //almenos hay una fila que se muestra y por lo tanto no mostrar el mensaje 
          //de producto no encontrado
        } else {

          listaProductos[i].style.display = 'none';
        }
      }

      // verificando si nop hay nada en la lista para mostrar un texto
      if(vln_contFilas == 0){
      	msjProductoNoEncontrado.style.display = 'block';
      }

}


function seleccionarProducto(filaSeleccionada){

  let listaProductos = document.querySelectorAll('#productoDisponible');

  // ciclo para cambiar el color de la fila seleccionada
  for (var i = 0; i < listaProductos.length; i++) {
    
    if(listaProductos[i] == filaSeleccionada){

      console.log('fila: '+(i+1));
      listaProductos[i].className = 'selected';
      indexSeleccionado = i;

    }else {
      
      listaProductos[i].className = '';

    }

  }

}

// cerrando el modal cuando se preciona el boton cancelar
document.getElementById('btn_cancelarSeleccion').onclick = function(){

  document.getElementsByClassName('modal')[0].style.display = 'none';

}

// cerrando  el modal y obteniendo los datos del producto seleccionado
document.getElementById('btn_aceptarSeleccion').onclick = function(){

  document.getElementsByClassName('modal')[0].style.display = 'none';

}