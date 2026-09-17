/* ==========================================================================
   MÓDULO: api.js - Consumo de Servicios Externos (Fetch & Async/Await)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/**
 * TODO: Exportar una función asíncrona llamada descargarProductosTech()
 * que descargue en paralelo con Promise.all() las categorías:
 * - "https://dummyjson.com/products/category/smartphones"
 * - "https://dummyjson.com/products/category/laptops"
 * - "https://dummyjson.com/products/category/mobile-accessories"
 * y retorne un único array plano con todos los productos (.flatMap).
 */
export async function descargarProductosTech() {
    const urlsCategorias = [
        "https://dummyjson.com/products/category/smartphones",
        "https://dummyjson.com/products/category/laptops",
        "https://dummyjson.com/products/category/mobile-accessories"
    ];

    const respuestas = await Promise.all(
        urlsCategorias.map(url => fetch(url))
    );
    console.log("Respuestas HTTP recibidas:", respuestas);

    const datos = await Promise.all(
        respuestas.map(res => res.json())
    );
    console.log("Objetos JSON parseados:", datos);

    const productos = datos.flatMap(categoria => categoria.products);
    console.log("Total de productos aplanados:", productos.length, productos);
    return productos;
}
