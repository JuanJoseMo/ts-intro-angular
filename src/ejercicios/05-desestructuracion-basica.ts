/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 35,
    cancion: 'Bad habits',
    detalles: {
        anio: 2021,
        autor: 'Ed Sheeran'
    }
}

//Desestructuración del objeto reproductor
//Primera alternativa, se puede renombrar la variable para hacerlo mas entendible
// const { volumen, segundo, cancion, detalles: { autorDetalle, anioDetalle } } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { anio, autor } = detalles;

//Imprimir por consola
console.log('El volumen actual es: ' + volumen);
console.log('El segundo actual es: ' + segundo + 's');
console.log('La canción actual es: ' + cancion);
console.log('El autor actual es: ' + autor);

//Desestructuración de arreglos o array
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//Primera forma de extraer del array, importa el orden o posición
// const [p1, p2, p3] = dbz;

//Segunda forma en caso de que te interese una posición en concreto
const [, , p3] = dbz;

//Imprimir por consola
console.log('Personaje 1: ' + dbz[0]);
console.log('Personaje 2: ' + dbz[1]);
console.log('Personaje 3: ' + dbz[2]);//Igual a p3
// console.log('Personaje 1: ' + p1);
// console.log('Personaje 2: ' + p2);
console.log('Personaje 3: ' + p3);//Igual a dbz[2]
