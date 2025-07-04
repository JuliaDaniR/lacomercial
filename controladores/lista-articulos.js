import { articulos } from "../modelos/articulos";

//Objetos de DOM
const listado = document.querySelector("#listado");

/** *
 * Se ejecuta al cargar el documento
 */
document.addEventListener("DOMContentLoaded", () => {
  mostrarArticulos();
});

/**
 * Muestra el listado de articulos
 */
function mostrarArticulos() {
  listado.innerHTML = ""; // Borramos el listado

  articulos.map((articulo) => {
    listado.innerHTML += `
    <div class="col">
    <div class= "card" style="width: 18rem;">
      <img src="../imagenes/productos/${articulo.imagen}" class="card-img-top" alt="${articulo.nombre}">
      <div class="card-body">
        <h5 class="card-title"><span name="spancodigo">${articulo.codigo}</span> - <span name= "spannombre">${articulo.nombre}</span></h5>
        <p class= "card-text">
        <img src="../imagenes/memory.svg"> Procesador: ${articulo.descripcion.procesador} <br>
        <img src="../imagenes/storage.svg"> Almacenamiento: ${articulo.descripcion.almacenamiento} <br>
        <img src="../imagenes/photo_camera.svg"> Cámaras: ${articulo.descripcion.camaras} <br>
        <img src="../imagenes/aod.svg"> Pantalla: ${articulo.descripcion.pantalla} <br></p>
        <h5> $ <span name="spanprecio">${articulo.precio}</span> </h5>
        <input type="number" name="inputcantidad" class="form-control" min="0" max="30" value="0" onchange= "calcular()/>
        </div>
        </div>
    </div>
    `;
  });
}
