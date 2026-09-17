/* ==========================================================================
   MÓDULO: storage.js - Persistencia Local (LocalStorage & JSON)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

const FAVORITOS_KEY = "techstore_favoritos_v1";

/**
 * TODO: Exportar función obtenerFavoritos() que lea de localStorage y devuelva array parseado.
 */
export function obtenerFavoritos() {
    const raw = localStorage.getItem(FAVORITOS_KEY);
    console.log("Raw de localStorage:", raw);
    if (raw) {
        return JSON.parse(raw);
    } else {
        return [];
    }
}

/**
 * TODO: Exportar función esProductoFavorito(id) que retorne boolean si el id está en favoritos.
 */
export function esProductoFavorito(id) {
    let favoritos = obtenerFavoritos();
    return favoritos.includes(id);

}

/**
 * TODO: Exportar función alternarFavorito(id) que agregue o quite el ID en localStorage.
 */
export function alternarFavorito(id) {
    let favoritos = obtenerFavoritos();
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
    console.log("Favoritos luego de alternar:", obtenerFavoritos());
}
