class Busquedas{
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //todo: leer DB si existe

    }

    async ciudad(lugar = ''){
        //peticion http
        console.log('Ciudad: '+lugar);

        return []; //retornar los lugares
    }
}

export default Busquedas;