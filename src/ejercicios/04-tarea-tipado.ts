/*
    ===== Código de TypeScript =====
*/


//Objeto con una objeto anidado dentro que es direccion y con una función que es mostrarDireccion
interface SuperHeroe {
    nombre: string;
    edad: number;
    // direccion: {
    //     calle: string,
    //     ciudad: string,
    //     pais: string
    // };
    direccion: Direccion;
    mostrarDireccion: () => string;
}

//Objeto que antes se ha usado 
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}
//Variable del tipo SuperHeroe
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

//Variable
const direccion = superHeroe.mostrarDireccion();

//Imprimir variable
console.log(direccion);