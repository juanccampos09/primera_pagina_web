
// variable que indica cual es la fila que se selecciono
var indexSeleccionado = -1;

let btn_buscarProducto = document.getElementById('btn_buscar').onclick = function(){

	// codigo para realizar la busqueda del producto que el usuario desea
	let inputNombreProducto = document.getElementById('iptNombreProducto');
	let valorIngresado = inputNombreProducto.value.toLowerCase();
	// obteniendo la lista de los producto disponibles 
	// seleccionando todos los elementos que se encuentren
	// dentro de la lista con clase productoDisponible
	let listaProductos = document.getElementById('listaProductosDisponibles').querySelectorAll('.productoDisponible');
	let txt_productoNoEncontrado = document.getElementById('listaProductosDisponibles').querySelector('textoProductoNoEncontrado');
	let vln_contFilas = 0;
	let msjProductoNoEncontrado = document.getElementById('productoNoEncontrado');

	// desapareciendo el mensaje de producto no encontrado cuando se realiza la busqueda
	msjProductoNoEncontrado.style.display = 'none';

	 // realizando el filtro de la lista segun el valor ingresado
      for(let i = 0;i < listaProductos.length;i++){

      	// obteniendo el nombre del producto
        let nombreProducto = listaProductos[i].querySelector(".nombreProducto");

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

  let listaProductos = document.querySelectorAll('.productoDisponible');

  // ciclo para cambiar el color de la fila seleccionada
  for (var i = 0; i < listaProductos.length; i++) {


    if(listaProductos[i] == filaSeleccionada){

      console.log('fila: '+(i+1));
      listaProductos[i].className += ' selected';
      indexSeleccionado = i;

    }else {
      
      listaProductos[i].classList.remove("selected");

    }

  }

}


// agregando el producto seleccionado a la lista principal
function agregarProductoListaProforma(cantidadDeseada){

  let listaProductos = document.getElementById('listaProductos'); // lista de productos de la proforma
  let productoSeleccionado = document.querySelectorAll('.productoDisponible')[indexSeleccionado];
  let nombreProducto = productoSeleccionado.querySelector('.nombreProducto').innerHTML;
  let precioProducto = productoSeleccionado.querySelector('.precioProducto').innerHTML;
  let total = precioProducto*cantidadDeseada;

listaProductos.insertAdjacentHTML('beforeend','<li class="filaProducto">'+
              '<p class="nombreProducto">'+nombreProducto+'</p>'+
              '<p class="cantidadProducto">'+cantidadDeseada+'</p>'+
              '<div class="contenedorInputEditCantidad">'+
                '<input class="ipt_cantidadProductoEdit" type="text" min="1" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"> <!--validacion que evita que el numero sea negativo-->'+
              '</div>'+
              '<p class="precioUnidad">'+precioProducto+'</p>'+
              '<p class="Total">'+total+'</p>'+
              '<div class="contenedorImagenesEditar">'+
                '<img class="btn_editarFila" src="imagenes/edit.png" alt="" onclick="editarFila(this)">'+
                '<img class="btn_eliminarFila" src="imagenes/trash.png" alt="" onclick="eliminarFila(this)">'+
              '</div>'+
              '<div class="contenedorImagenesAceptar">'+
                '<img class="btn_aceptarEdicion" src="imagenes/aceptarEdicion.png" alt="" onclick="aceptarEdicion(this)">'+
                '<img class="btn_cancelarEdicion" src="imagenes/cancelarEdicion.png" alt="" onclick="cancelarEdicion(this)">'+
              '</div>'+
            '</li>');

 
}


// cerrando el modal cuando se preciona el boton cancelar
document.getElementById('btn_cancelarSeleccion').onclick = function(){

  document.getElementsByClassName('modal')[0].style.display = 'none';

}

// cerrando  el modal y obteniendo los datos del producto seleccionado
document.getElementById('btn_aceptarSeleccion').onclick = function(){

  let vln_cantidadDeseada = document.getElementById('ipt_cantidadProducto').value;

  // verificando si el usuario selecciono un producto y si indico la cantidad deseada!
  if(indexSeleccionado == -1){

    alert('Error, es necesario que seleccione el producto deseado!');

  }else if(vln_cantidadDeseada==null || vln_cantidadDeseada==""){

    alert('Error, es necesario que ingrese la cantidad deseada!');

  }else{

    agregarProductoListaProforma(vln_cantidadDeseada);

    document.getElementsByClassName('modal')[0].style.display = 'none';

    // calculando el nuevo total a pagar
    calcularCostosTotales();

  }

}

// funcion para mostrar el modal en el cual se puede seleccionar el producto deseado
document.getElementById('btn_agregarProducto').onclick = function(){

  let filaSeleccionadaAnteriormente = null;
  let modal = document.getElementsByClassName('modal')[0];
  modal.style.display = 'block';// mostrando el modal
  modal.querySelector('#ipt_cantidadProducto').value = ''; // quitando cualquier valor que tuviera el input cantidad

  // verificando si se habia seleccionado un producto para quitar el color de fondo que indica que se selecciono ese producto
  if(indexSeleccionado != -1){

    filaSeleccionadaAnteriormente = document.getElementsByClassName('productoDisponible')[indexSeleccionado];
    filaSeleccionadaAnteriormente.classList.remove("selected");

  }

}


// funcion que edita la cantidad deseada del producto
function editarFila(imagenClickeada){

  // obteniendo el contenedor de la imagen
  let contenedorImagenClickeada = imagenClickeada.parentNode;

  // obteniendo la fila seleccionada
  let filaSeleccionada = contenedorImagenClickeada.parentNode;

  let contenedorImagenesEditar = filaSeleccionada.querySelector('.contenedorImagenesEditar').style.display = 'none';

  let contenedorImagenesAceptar = filaSeleccionada.querySelector('.contenedorImagenesAceptar').style.display = 'inline-block';

  let contenedorInputCantidad = filaSeleccionada.querySelector('.contenedorInputEditCantidad').style.display = 'inline-block';
  

  let inputCantidad = filaSeleccionada.querySelector('.ipt_cantidadProductoEdit');

  console.log('fila seleccionada '+filaSeleccionada.querySelector('.nombreProducto').innerHTML);

  // colocando en el input la cantidad que el usuario habia seleccionado
  inputCantidad.value = filaSeleccionada.querySelector('.cantidadProducto').innerHTML;
  // enfocando el input
  inputCantidad.focus();
  inputCantidad.select();
  //inputCantidad.setSelectionRange(0, 0);// instruccion para evitar que se marke el texto cuando se enfoca el input

}


function aceptarEdicion(imagenClickeada){

   // obteniendo el contenedor de la imagen
  let contenedorImagenClickeada = imagenClickeada.parentNode;

  // obteniendo la fila seleccionada
  let filaSeleccionada = contenedorImagenClickeada.parentNode;

  let contenedorImagenesEditar =filaSeleccionada.querySelector('.contenedorImagenesEditar');

  let contenedorImagenesAceptar =filaSeleccionada.querySelector('.contenedorImagenesAceptar');

  let contenedorInputCantidad =filaSeleccionada.querySelector('.contenedorInputEditCantidad');
  let inputCantidad =filaSeleccionada.querySelector('.ipt_cantidadProductoEdit');


  // obteniendo los valores necesario para calcular el nuevo total
  let precioProducto = filaSeleccionada.querySelector('.precioUnidad').innerHTML;
  let txt_total = filaSeleccionada.querySelector('.Total');

  // obteniendo el texto de de la que contiene la cantidad deseada anteriormente
  let txt_cantidadAnterior = filaSeleccionada.querySelector('.cantidadProducto');
  txt_cantidadAnterior.innerHTML = inputCantidad.value;

  // quitando el input
  contenedorInputCantidad.style.display = 'none';

  contenedorImagenesEditar.style.display = 'inline-block';
  contenedorImagenesAceptar.style.display = 'none';

  console.log(precioProducto+' '+inputCantidad.value);

  // calculando el nuevo total e ingresandolo en el texto
  txt_total.innerHTML = precioProducto * inputCantidad.value;

  // calculando el nuevo total a pagar
  calcularCostosTotales();


}

// funcion que se encarga de cancelar la edicion de la fila seleccionada
function cancelarEdicion(imagenClickeada){

  // obteniendo el contenedor de la imagen
  let contenedorImagenClickeada = imagenClickeada.parentNode;

  // obteniendo la fila seleccionada
  let filaSeleccionada = contenedorImagenClickeada.parentNode;

  let contenedorInputCantidad = filaSeleccionada.querySelector('.contenedorInputEditCantidad');
  let contenedorImagenesEditar = filaSeleccionada.querySelector('.contenedorImagenesEditar');
  let contenedorImagenesAceptar = filaSeleccionada.querySelector('.contenedorImagenesAceptar');

   // quitando el input
  contenedorInputCantidad.style.display = 'none';

  contenedorImagenesEditar.style.display = 'inline-block';
  contenedorImagenesAceptar.style.display = 'none'; // contenedor de las imagenes de aceptar cancelar edicion de cantidad

}

function eliminarFila(imagenClickeada){

  // obteniendo el contenedor de la imagen
  let contenedorImagenClickeada = imagenClickeada.parentNode;

  // obteniendo la fila seleccionada
  let filaSeleccionada = contenedorImagenClickeada.parentNode;

  filaSeleccionada.remove();

  calcularCostosTotales();

}


function calcularCostosTotales(){

  let listaProductosSeleccionados = document.querySelectorAll('.filaProducto');
  let totalKilometros = document.getElementById('iptTotalKilometros').value;
  let iptDescuento = document.getElementById('iptDescuento').value;
  let descuento = 0;
  let precioUnidad = 0;
  let totalUnidades = 0;
  let subtotal = 0;
  let impuesto = 0;
  let flete = 0;
  let total = 0;

  console.log(listaProductosSeleccionados.length);


  // ciclo para recorrer la lista de productos y obtener el subtotal
  for (var i = 0; i < listaProductosSeleccionados.length; i++) {
    
    // obteniendo el precio y la cantidad deseada del producto que el cliente desea
    precioUnidad = listaProductosSeleccionados[i].querySelector('.precioUnidad').innerHTML;
    totalUnidades = listaProductosSeleccionados[i].querySelector('.cantidadProducto').innerHTML;
    
    subtotal += Number(listaProductosSeleccionados[i].querySelector('.Total').innerHTML);
    impuesto += (precioUnidad * 0.13)*totalUnidades;

  }

  if(totalKilometros > 0){

    if(totalKilometros <= 1){

      flete = 500;

    }else{

      if(totalKilometros > 0 || totalKilometros < 1){

        flete = totalKilometros * 500;

      }

    }

  }

  if(iptDescuento > 0){

    descuento = iptDescuento / 100;

  }

  console.log(subtotal+' '+descuento+' '+flete);

  total = subtotal - (subtotal * descuento) + flete;

  // insertando los datos en los textos correspondientes
  document.getElementById('txt_subtotal').innerHTML = '₡ '+subtotal;
  document.getElementById('txt_descuento').innerHTML = '₡ '+(subtotal * descuento).toFixed(2); // obteniendo unicamente dos decimales
  document.getElementById('txt_impuestos').innerHTML = '₡ '+impuesto;
  document.getElementById('txt_flete').innerHTML = '₡ '+flete;
  document.getElementById('txt_total').innerHTML = '₡ '+total;
}


// funciones para agregar editar y eliminar el flete
document.getElementById('btn_agregarFlete').onclick = function(){

  let valor = document.getElementById('iptTotalKilometros').value;
  let btn_agregar = document.getElementById('btn_agregarFlete');
  let btn_editar = document.getElementById('btn_editarFlete');
  let btn_eliminar = document.getElementById('btn_eliminarFlete');

  console.log('entro');

  if(valor == null || valor == ''){

    alert('Error, por favor digite el total de kilometros hasta el lugar de destino!');

  }else{

    // ocultando el boton aceptar y mostrando los demas botones
    btn_agregar.style.display = 'none';
    btn_editar.style.display = 'inline-block';
    btn_eliminar.style.display = 'inline-block';

    calcularCostosTotales();

  }

}

document.getElementById('btn_editarFlete').onclick = function(){

  calcularCostosTotales();

}

document.getElementById('btn_eliminarFlete').onclick = function(){

  let input = document.getElementById('iptTotalKilometros');
  let btn_agregar = document.getElementById('btn_agregarFlete');
  let btn_editar = document.getElementById('btn_editarFlete');
  let btn_eliminar = document.getElementById('btn_eliminarFlete');

  input.value = '';

  // ocultando el boton aceptar y mostrando los demas botones
    btn_agregar.style.display = 'inline-block';
    btn_editar.style.display = 'none';
    btn_eliminar.style.display = 'none';

    calcularCostosTotales();
  
}



// funciones para agregar editar y eliminar el descuento de la compra
document.getElementById('btn_agregarDescuento').onclick = function(){

  let valor = document.getElementById('iptDescuento').value;
  let btn_agregar = document.getElementById('btn_agregarDescuento');
  let btn_editar = document.getElementById('btn_cambiarDescuento');
  let btn_eliminar = document.getElementById('btn_eliminarDescuento');

  if(valor == null || valor == ''){

    alert('Error, por favor digite el descuento de la compra!');

  }else{

    // ocultando el boton aceptar y mostrando los demas botones
    btn_agregar.style.display = 'none';
    btn_editar.style.display = 'inline-block';
    btn_eliminar.style.display = 'inline-block';

    calcularCostosTotales();

  }

}

document.getElementById('btn_cambiarDescuento').onclick = function(){

  calcularCostosTotales();

}

document.getElementById('btn_eliminarDescuento').onclick = function(){

  let input = document.getElementById('iptDescuento');
  let btn_agregar = document.getElementById('btn_agregarDescuento');
  let btn_editar = document.getElementById('btn_cambiarDescuento');
  let btn_eliminar = document.getElementById('btn_eliminarDescuento');
  input.value = '';

  // ocultando el boton aceptar y mostrando los demas botones
    btn_agregar.style.display = 'inline-block';
    btn_editar.style.display = 'none';
    btn_eliminar.style.display = 'none';

    calcularCostosTotales();
  
}

