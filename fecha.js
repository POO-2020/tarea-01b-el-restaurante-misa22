export default class Fecha{
    /**
     * @param {number} dia;
     * @param {number} mes;
     * @param {number} año;
     */
    constructor(dia,mes,año){
        this.fecha= new Date(año, mes-1,dia);
        this.diaSem = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        this.meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    }
    getAños(){
        var difMseg = Date.now() - this.fecha;
        var mSegAño= 1000 * 60 * 60 * 24 * 365;
        var años = Math.trunc(difMseg/mSegAño);
        return años;
    }
    getMeses(){
        var difMseg = Date.now()-this.fecha ;
        var mSegMes= 1000 * 60 * 60 * 24 * 28;
        var meses= Math.trunc(difMseg/mSegMes);
        return meses;
    }
    getSemanas(){
        var difMseg = Date.now()-this.fecha;
        var mSegSemana= 1000* 60*60*24*7;
        var semanas= Math.trunc(difMseg/mSegSemana);
        return semanas;
    }
    getDias(){
        var difMseg= Date.now()-this.fecha;
        var mSegDias= 1000*60*60*24;
        var dias = Math.trunc(difMseg/mSegDias);
        return dias;
    }
    getFecha(){
        var numMes= this.meses[this.fecha.getMonth()];
        return(`${this.fecha.getDate()}/${numMes}/${this.fecha.getFullYear()}`);
    }
    getDiaFecha(){
        var dia= this.diaSem[this.fecha.getDay()];
        return dia;
    }
}
