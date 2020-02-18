export default class Precio {
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor;
    }
    getPrecio(){
        return `${this.valor}`;
    }
}
//var precio1 = new Precio(125);
//console.log(precio1.getPrecio());