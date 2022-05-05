/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}
const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel'],
}

function imprimirHijos(pasajero: Pasajero): void {
    //Intenta evaluar si no da error, en caso de ser undefined saldrá como 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero2);
imprimirHijos(pasajero1);
