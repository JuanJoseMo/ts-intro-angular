/*
    ===== Código de TypeScript =====
*/

// Dos formas de declarar una variable en TypeScript
let nombre: string = 'Strider';
let nombre1 = 'Strider';
let estaOk: boolean = true;

// Declarar una constante
const nombre2 = 'Strider';

// Cambio de dato de la variable
nombre = 'Juanjo';

// Mostrar el valor de la variable en la consola del navegador
console.log(nombre);

// Dar a una variable la posibilidad de tener dos tipos de datos
let hp: number | string = 95;
hp = 'Full';

// Mostrará Full
console.log(hp, estaOk);
