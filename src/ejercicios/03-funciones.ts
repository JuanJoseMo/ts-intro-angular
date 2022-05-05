/*
    ===== Código de TypeScript =====
*/
0
// Función en JavaScript o TypeScript con dos valores obligatorios y regreso de un number
function sumar(a: number, b: number): number {
    return a + b;
}

//Función de flecha en TypeScript
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//Función tradicional con un valor en opcional y dos obligatorios, el opcional siempre debe de ir el último
// function multiplicar(numero: number, base: number, otroNumero?: number) {
//     return numero * base;
// }

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

// const resultado1 = multiplicar(5, 0, 10);
// const resultado = sumar(12); da error en caso de tener obligatorio a y b
// const resultado = sumar(12, 11);

// Imprimir por consola
// console.log(resultado);

//Objeto, una interfaces es como si fuese una "clase" y se asegura de que la variable tenga los valores que tiene la interfaz
interface PersonajeLOR {
    nombre: string;
    pv: number;
    //Función corta que devuelve void
    mostrarHp: () => void
}

//Poner un void en lo mismo que retornar un undefined
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

//Variable constante de PersonajeLOR
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    //Función
    mostrarHp() {
        console.log('Puntos de vida', this.pv);
    }
}
//Uso de la función sobre una variable-objeto nuevoPersonaje
curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();