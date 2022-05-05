/*
    ===== Código de TypeScript =====
*/

// Genéricos
// function queTipoSoy<T>(argumento: T): string {
function queTipoSoy<T>(argumento: T) {
    // return (argumento).toString();
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyArray = queTipoSoy([1, 2, 3, 4, 5]);
let soyExplicito = queTipoSoy<string>('Hola Mundo');