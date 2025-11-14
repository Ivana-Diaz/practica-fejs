import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.getElementById("productos");

    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const imagen = document.createElement("img");
        imagen.src = `./${producto.imagen}`;
        imagen.alt = producto.alt;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        
        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        tarjetas.appendChild(tarjeta);
    });
});