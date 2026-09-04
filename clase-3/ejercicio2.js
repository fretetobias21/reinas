// ==============================================================================
// Ejercicio 10: Acceso a la Aplicación Escolar
// Consigna: Escribir una función llamada `evaluarAccesoApp` que reciba tres parámetros:
// `edad` (Number), `tienePermisoDocente` (Boolean) y `esInvitado` (Boolean).
// Debe retornar `true` si no es invitado y cumple al menos una de estas condiciones:
// es mayor o igual a 18 años O tiene permiso docente. En cualquier otro caso retorna `false`.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }
    else if (edad >= 18) {
        return true;
    }
    else if (tienePermisoDocente) {
        return true;
    }
    else {
        return false;
    }
}

// Muy bien planteadas las condiciones paso a paso, pero repito como en ejercicios anteriores, UN SOLO return al final de la función. Te dejo la manera directa resuelta en una sola expresión lógica:

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    return !esInvitado && (edad >= 18 || tienePermisoDocente);
}

console.log(evaluarAccesoApp(16, true, false));
console.log(evaluarAccesoApp(20, false, true));