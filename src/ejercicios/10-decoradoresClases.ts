/*
    ===== Código de TypeScript =====
*/

//Decoradores de clases, solamente en TypeScript
function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

@classDecorator
class MiSuperClas {
    public miPropiedad: string = 'ABC123';
    imprimir() {
        console.log('Hola Mundo');
    }

}

console.log(MiSuperClas);

const miClase = new MiSuperClas();

console.log(miClase.miPropiedad);