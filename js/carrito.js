import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    const resumen = document.getElementById("resumen-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    resumen.innerHTML = "";

    let precios = [];


    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "No hay productos en el carrito";
        contenedor.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const imagen = document.createElement("img");
        // imagen.src = `../${producto.imagen}`;
        // imagen.alt = producto.alt;
        imagen.src = producto.image;

        const titulo = document.createElement("h3");
        // titulo.textContent = producto.nombre;
        titulo.textContent = producto.title;
        
        const precio = document.createElement("p");
        // precio.textContent = `$${producto.precio}`;
        precio.textContent = `$${producto.price}`;

        precios.push(producto.price);

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn");
        btnEliminar.classList.add("btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(indice);
            renderizarCarrito();
        });

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btnEliminar);

        contenedor.appendChild(tarjeta);
    });

    const contadorTotal = document.createElement("p");
    const numeroTotal = precios.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    contadorTotal.textContent = `Total: ${numeroTotal}`;
    resumen.appendChild(contadorTotal);

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn");
    btnVaciar.classList.add("btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar carrito";

    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);