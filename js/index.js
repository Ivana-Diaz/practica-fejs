// let num1 = prompt("Ingrese el primer número:");
// let num2 = prompt("Ingrese el segundo número:");

// console.log(isNaN(num1));
// console.log(isNaN(num2));

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// console.log(`Suma: ${num1 + num2}`);
// console.log(`Resta: ${num1 - num2}`);
// console.log(`Multiplicación: ${num1 * num2}`);
// console.log(`División: ${num1 / num2}`);
// console.log(`Módulo: ${num1 % num2}`);

// --------------------------------------------------------------

// let nombre = prompt("Ingrese su nombre:");
// let edad = prompt("Ingrese su edad:");

// console.log(isNaN(edad));

// edad = parseInt(edad);

// console.log(`Bienvenido/a, ${nombre}. Tu edad es ${edad}`);

// let mayoriaEdad = edad >= 18;

// console.log(mayoriaEdad);

// --------------------------------------------------------------

// let nombre = "Blue";
// let correo = "bluetrills@gmail.com";
// let mensaje = "Muchas gracias";

// if (nombre !== "" && correo !== "" && mensaje !== "") {
//     console.log("Formulario completo. Listo para enviar.");
// } else {
//     console.log("Faltan completar campos obligatorios.");
// }

// const productos = ["pulover", "cardigan", "buzo", "remera", "blusa"];

// for (let indice = 0; indice < productos.length; indice++) {
//     console.log(`${indice + 1}: ${productos[indice]}`);
// }

// for (const producto of productos) {
//     console.log(producto);
// }

// for (let indice in productos) {
//     console.log(`${parseInt(indice) + 1}: ${productos[indice]}`);
// }

// console.log(productos);
// console.log("Lista de productos mostrada correctamente.");

// --------------------------------------------------------------

// const suma = (num1, num2) => {
//     return num1 + num2;
// }

// const resta = (num1, num2) => {
//     return num1 - num2;
// }

// const multiplicacion = (num1, num2) => {
//     return num1 * num2;
// }

// const division = (num1, num2) => {
//     if (num2 !== 0) {
//         return num1 / num2;
//     } else {
//         return "El número divisor no puede ser 0.";
//     }
// }

// console.log(division(10, 0));

// --------------------------------------------------------------

// const generarProductos = () => {
//     productos = [
//         { id: 0, nombre: "manzana", descripcion: "fruta roja", precio: 100 },
//         { id: 1, nombre: "banana", descripcion: "fruta amarilla", precio: 200 },
//         { id: 3, nombre: "leche", descripcion: "bebida", precio: 300 },
//         { id: 4, nombre: "pollo", descripcion: "carne blanca", precio: 450 },
//         { id: 5, nombre: "fideos", descripcion: "pasta", precio: 520 },
//     ];
//     return productos;
// }

// const listaProductos = generarProductos();

// listaProductos.forEach(({ id, nombre, precio }) => {
//     console.log(`ID: ${id} | Producto: ${nombre}| Precio: ${precio}`);
// });

// for (const producto of listaProductos) {
//     console.log(`ID: ${producto.id} | Producto: ${producto.nombre} | Precio: ${producto.precio}`);
// }

// const productOferta = { id: 6, nombre: "queso", descripcion: "lacteo", precio: 680 };

// const catalogoActualizado = [...listaProductos, productOferta];

// console.log(catalogoActualizado);

// --------------------------------------------------------------

/*

const tarjetas = document.querySelector(".productos");

for (const producto of productos) {
    let tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    let imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.alt;

    let titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    let precio = document.createElement("p");
    precio.textContent = producto.precio;

    let boton = document.createElement("button");
    boton.textContent = "Ver descripción";

    let descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    let boton2 = document.createElement("button");
    boton2.classList.add("boton-agregar");
    boton2.textContent = "Agregar al carrito";

    boton.addEventListener("click", () => {

        tarjeta.appendChild(descripcion);

        if (descripcion.style.display === 'block') {
            descripcion.style.display = 'none';
        } else {
            descripcion.style.display = 'block';
        }

    });
    
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    tarjeta.appendChild(boton2);

    tarjetas.appendChild(tarjeta);
}
*/

// --------------------------------------------------------------

import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// document.addEventListener("DOMContentLoaded", () => {
const tarjetas = document.querySelector(".productos");

const carrito = obtenerCarrito();
actualizarContador();

productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
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
// });