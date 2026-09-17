/* ==========================================================================
   TECHSTORE MÓVIL - ORQUESTADOR PRINCIPAL (PLANTILLA DE ALUMNOS)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */



// ==========================================================================
// 📦 IMPORTACIÓN DE MÓDULOS ES6 (ES Modules)
// ==========================================================================
// TODO 1: Importar 'descargarProductosTech' desde './api.js'
// TODO 2: Importar 'obtenerFavoritos', 'alternarFavorito' y 'esProductoFavorito' desde './storage.js'
// TODO 3: Importar 'crearTarjetaProductoHTML', 'filtrarProductos' y 'calcularTotalCatalogo' desde './ui.js'
// (Escribí tus imports acá abajo):
import { descargarProductosTech } from "./api.js";
import { obtenerFavoritos } from "./storage.js";
import { alternarFavorito } from "./storage.js";
import { esProductoFavorito} from "./storage.js";
import { crearTarjetaProductoHTML} from "./ui.js";
import { filtrarProductos} from "./ui.js";
import { calcularTotalCatalogo} from "./ui.js";



// ==========================================================================
// 🎯 1. Selección de Nodos Principales del DOM
// ==========================================================================



const btnTema = document.querySelector("#btn-tema");
const iconoTema = document.querySelector("#icono-tema");;

const btnVerFavoritos = document.querySelector("#btn-ver-favoritos");;
const badgeFavoritos = document.querySelector("#badge-favoritos-contador");;

const inputBuscador = document.querySelector("#input-buscador");;;
const botonesFiltro = document.querySelectorAll(".btn-filtro");

const contenedorCatalogo = document.querySelector("#contenedor-catalogo");

const totalProductosSpan = document.querySelector("#total-productos-visibles");
const totalPrecioSpan = document.querySelector("#total-precio-acumulado");

const estadoLoading = document.querySelector("#estado-loading");
const estadoError = document.querySelector("#estado-error");
const btnReintentar = document.querySelector("#btn-reintentar");
const sinResultadosBox = document.querySelector("#sin-resultados");



// ==========================================================================
// 🧠 2. Estado Global en Memoria
// ==========================================================================
let productosEnMemoria = [];
let categoriaActual = "todas";

// ==========================================================================
// 🎨 3. Funciones de Renderizado y Actualización de UI
// ==========================================================================

function actualizarBadgeFavoritos() {
    let favoritos = obtenerFavoritos();
    badgeFavoritos.textContent = favoritos.length;
    
}

function aplicarFiltros() {
    const busqueda = inputBuscador.value;
    const favoritosIds = obtenerFavoritos();
    let productosFiltrados = filtrarProductos(productosEnMemoria, busqueda, categoriaActual, favoritosIds);
    
    totalProductosSpan.textContent = productosFiltrados.length;
    
    const totalPrecio = calcularTotalCatalogo(productosFiltrados);
    totalPrecioSpan.textContent = `$${totalPrecio.toFixed(2)}`;

    if (productosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = "";
        sinResultadosBox.classList.remove("oculto");
    } else {
        sinResultadosBox.classList.add("oculto");
        contenedorCatalogo.innerHTML = productosFiltrados
            .map(producto => crearTarjetaProductoHTML(producto, esProductoFavorito(producto.id)))
            .join("");
    }
}

function activarFiltroCategoria(categoria) {
    categoriaActual = categoria;
    
    botonesFiltro.forEach(boton => {
        if (boton.dataset.categoria === categoria) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });
    
    aplicarFiltros();
}

// ==========================================================================
// 🌐 4. Carga Asíncrona del Catálogo (Consumo del módulo api.js)
// ==========================================================================
async function cargarCatalogo() {
    estadoLoading.classList.remove("oculto");
    estadoError.classList.add("oculto");
    contenedorCatalogo.innerHTML = "";
    
    try {
        productosEnMemoria = await descargarProductosTech();
        console.log("Catálogo descargado con éxito. Cantidad:", productosEnMemoria.length);
        
        estadoLoading.classList.add("oculto");
        aplicarFiltros();
    } catch (error) {
        console.error("Fallo la carga:", error);
        estadoLoading.classList.add("oculto");
        estadoError.classList.remove("oculto");
    }
}

// ==========================================================================
// 🖱️ 5. Manejo de Eventos (Event Listeners & Delegación)
// ==========================================================================


btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    cambiarIconoTema();
});


btnVerFavoritos.addEventListener("click", () => {
    activarFiltroCategoria("favoritos");
});


botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;
        activarFiltroCategoria(categoria);
    });
});

inputBuscador.addEventListener("input", () => {
    aplicarFiltros();
});

btnReintentar.addEventListener("click", () => {
    cargarCatalogo();
});

contenedorCatalogo.addEventListener("click", (evento) => {
    const botonFav = evento.target.closest(".btn-fav-card");
    if (!botonFav) return;

    const id = Number(botonFav.dataset.id);
    alternarFavorito(id);
    actualizarBadgeFavoritos();
    aplicarFiltros();
});

// ==========================================================================
// 🚀 6. Inicialización de la Aplicación
// ==========================================================================
actualizarBadgeFavoritos();
cargarCatalogo();

function cambiarIconoTema(){
    if(document.body.classList.contains('dark-mode')){
        iconoTema.innerHTML="🌙";
    }
    else{
        iconoTema.innerHTML="☀️";
    }
}

cambiarIconoTema();