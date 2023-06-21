import axios from "axios";

class Busquedas{
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //todo: leer DB si existe

    }

    async ciudad(lugar = ''){
        //peticion http
        const instancia = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?bbox=-180%2C-90%2C180%2C90&limit=5&proximity=ip&access_token=pk.eyJ1Ijoic2FuZWkxNTA5IiwiYSI6ImNsaXVtOThhcTFkbWozanF2aHEwdmhzbGEifQ.D8PgpMCYgMg_R0A--DBNNw`,
            params: {
                'access-token' : 'pk.eyJ1Ijoic2FuZWkxNTA5IiwiYSI6ImNsaXVtOThhcTFkbWozanF2aHEwdmhzbGEifQ.D8PgpMCYgMg_R0A--DBNNw',
                'limit' : 5,
                'language' : 'es'   
            }
        });

        const respuesta = await instancia.get();
        console.log('Respuesta:' + respuesta.data);

        console.log('Ciudad: '+lugar);

        return []; //retornar los lugares
    }
}

export default Busquedas;