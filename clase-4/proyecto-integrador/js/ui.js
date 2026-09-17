/* ==========================================================================
   MÓDULO: ui.js - Renderizado Visual y Métricas del Catálogo
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/**
 * TODO 1: Exportar función crearTarjetaProductoHTML(producto, esFavorito)
 */
export function crearTarjetaProductoHTML(producto, esFavorito) {
    const { id, title, price, category, thumbnail, stock } = producto;
    console.log("Propiedades extraídas:", title, price);

    return `
        <article class="tarjeta-producto" data-id="${id}">
            <div class="tarjeta-img-wrap">
                <img src="${thumbnail}" alt="${title}" loading="lazy" class="tarjeta-img">
                <span class="badge-categoria">${category}</span>
                <button class="btn-favorito btn-fav-card ${esFavorito ? 'en-favoritos' : ''}" data-id="${id}" aria-label="Guardar favorito">
                    ${esFavorito ? '⭐' : '☆'}
                </button>
            </div>
            <div class="tarjeta-cuerpo">
                <h3 class="tarjeta-titulo">${title}</h3>
                <div class="tarjeta-precio-wrap">
                    <span class="tarjeta-precio">$${price.toFixed(2)}</span>
                    <span class="tarjeta-stock">Stock: ${stock}</span>
                </div>
            </div>
        </article>
    `;
}

/**
 * TODO 2: Exportar función filtrarProductos(lista, textoBusqueda, categoria, favoritosIds)
 */
export function filtrarProductos(lista, textoBusqueda = "", categoria = "todas", favoritosIds = []) {
    const texto = textoBusqueda.toLowerCase().trim();

    return lista.filter(producto => {
        const coincideTexto = producto.title.toLowerCase().includes(texto);
        let coincideCategoria = false;
        if (categoria === "todas") {
            coincideCategoria = true;
        } else if (categoria === "favoritos") {
            coincideCategoria = favoritosIds.includes(producto.id);
        } else {
            coincideCategoria = producto.category === categoria;
        }

        console.log("Producto:", producto.title, "Coincide Texto:", coincideTexto, "Coincide Cat:", coincideCategoria);

        return coincideTexto && coincideCategoria;
    });
}

/**
 * TODO 3: Exportar función calcularTotalCatalogo(lista)
 */
export function calcularTotalCatalogo(lista) {
    return lista.reduce((acumulador, producto) => acumulador + producto.price, 0);
}