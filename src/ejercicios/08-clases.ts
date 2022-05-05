/*
    ===== Código de TypeScript =====
*/

// Clases en TypeScript
// class Heroe { 
// Primera forma
// Por defecto son públicas
// private Solo visible dentro de esta clase
// alterEgo: string;
// public Desde fuera de la clase se puede ver esta propiedad
// edad: number;
// static Se puede acceder a la valor de la variable sin crear una instancia de la clase
// nombreReal: number;
// constructor(alterEgo: string, edad: number, nombreReal: number) {
// this.alterEgo = alterEgo;
// this.edad = edad;
// this.nombreReal = nombreReal;
// }
// imprimirNombre() {
// return this.alterEgo + ' ' + this.nombreReal;
// }
// }

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends PersonaNormal {
    // Segunda forma
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA');
    }
    // imprimirNombre() {
    // return this.alterEgo + ' ' + this.nombreReal;
    // }
}

// La interfaz no tiene código en JavaScript, sirven para crear instancias
// interface Personaje2 {
// private Solo visible dentro de esta clase
// alterEgo?: string;
// public Desde fuera de la clase se puede ver esta propiedad
// edad?: number;
// static Se puede acceder a la valor de la variable sin crear una instancia de la clase
// nombreReal?: number;
// imprimirNombre: () => string;
// }

const ironman = new Heroe('Ironman', 45, 'Tony');
// const spiderman: Personaje2 = {};
console.log(ironman);