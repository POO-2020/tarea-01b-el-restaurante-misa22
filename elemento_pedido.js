import Producto from "./producto.js"
import Precio from "./precio.js";
class ElementoPedido{
    /**
     * @param {string} producto
     * @param {number} cantidad
     */
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    getDescripcion(){
        return `${this.producto.getDescripcion()},${this.cantidad}`
    }
}
var Pedido1= new ElementoPedido(new Producto("pizza",new Precio(200)),2);
console.log(Pedido1.getDescripcion())