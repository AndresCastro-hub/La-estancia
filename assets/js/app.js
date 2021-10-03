document.addEventListener("DOMContentLoaded", traerDatos);

function traerDatos() {
  const url = "assets/data/productos.json";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado));
}

function mostrarHTML(productos) {
  const listCard = $("#list-card");
  productos.forEach((producto) => {
    const { id, titulo, precio, imagen } = producto;

    listCard.append(`<div class="card m-1">
        <img class="card-img-top" src=${producto.imagen} alt="Card image ${producto.titulo}">
        <div class="card-body">
            <h4 class="card-title text-dark">${producto.titulo}</h4>
            <p class="card-text">$${producto.precio}</p>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary m-1" dataset.id=${producto.id}>
                Comprar
            </button>
            <button class="btn btn-secondary m-1" dataset.id=${producto.id}>
                Agregar al carrito
            </button>
        </div>
    </div>`);
  });
}
