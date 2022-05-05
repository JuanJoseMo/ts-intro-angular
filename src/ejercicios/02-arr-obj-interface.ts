/*
    ===== Código de TypeScript =====
*/

// let habilidades =[]; o let habilidades: any[]; Any significa que puedes añadir cualquier tipo de dato
let habilidades = ['Bash', 'Counter', 'Healing'];

// let habilidades: (string | boolean | number) = ['Bash', 'Counter', 'Healing']; para aceptar varios tipos de variables en el array
// habilidades.push(); para añadir al array

habilidades.push('Other');

// Objetos en TypeScript

// Definir una interface para que un objeto sea como nosotros queremos, No existen en JavaScript
interface Personaje {
    nombre: string,
    hp: number;
    habilidades: string[];
    // puebloNatal?: string; hace que esta variable sea opcional
    puebloNatal?: string;

}
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash,counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

// Muestra en consola en forma de tabla el objeto
console.table(personaje);
