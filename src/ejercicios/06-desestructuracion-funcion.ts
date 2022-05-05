/*
    ===== Código de TypeScript =====
*/

// Interfaz para los productos
export interface Producto {
    descripcion: string;
    precio: number;

}

// Primer producto
const telefono1: Producto = {
    descripcion: 'Xiaomi Mi Note 10',
    precio: 350,
}

// Segundo producto
const telefono2: Producto = {
    descripcion: 'Iphone 13',
    precio: 899,
}

// Función que devuelve un array y recibe un array
export function calcularImpSobreVenta(productos: Producto[]): [number, number] {

    let total = 0;

    // ForEach con un callback dentro
    // productos.forEach((producto) => {
    productos.forEach(({ precio }) => {
        total += precio;
    })
    return [total, total * 0.21];
}
// Array de productos
const articulos = [telefono1, telefono2];

// Variable que va a contener el resultado de la función
const [total, impSobreVenta] = calcularImpSobreVenta(articulos);

//Imprimir por consola
// console.log('Total: ' + total);
// console.log('Impuesto: ' + impSobreVenta);
