/*
    ===== Código de TypeScript =====
*/

//Importar el Producto
import { calcularImpSobreVenta, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    { descripcion: 'Iphone 12', precio: 650 },
    { descripcion: 'Xiaomi Redmi Note 9', precio: 150 },
];

const [total, impSobreVenta] = calcularImpSobreVenta(carritoCompras);

console.log('Total: ' + total);
console.log('Impuesto sobre venta' + impSobreVenta);
