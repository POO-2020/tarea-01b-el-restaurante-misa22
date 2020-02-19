import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import ElementoPedido from "./elemento_pedido.js";
export default class Pedido{
    /**
     * @param {number} fecha;
     * @param {number} hora;
     * @param {string} cliente;
     * @param {string} elementosPedidos;
     */
    constructor(fecha,hora,cliente,elementosPedidos){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = elementosPedidos;
    }
    getResumen(){
       
    }
    getNumeroElementos(){
        return `${this.elementosPedidos.length}`
    }
    getNumeroProductos(){

    }
    getCostoTotal(){

    }
    agregarElemento(elemento){
         this.elementosPedidos.push(elemento);
    }
    listarElementos(){
      this.elementosPedidos.array.forEach(element => {
          console.log(element.getDescripcion());
      });
    }
}
