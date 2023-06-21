console.log("working..");
import dotenv from "dotenv";

console.log(process.env);

import inquirer from "inquirer";
// importaciones necesarias
import { inquirerMenu, leerInput, listarLugares, pausa} from "./helpers/inquirer.mjs";
import Busquedas from "./models/busquedas.mjs";
import axios from "axios";


// function principal de la app
const main = async () => {
    // const texto = await leerInput("Que deseas hacer ?");
    // console.log(texto);
    let option;
    const busquedas = new Busquedas();
    let lugar;

    do{

     option = await inquirerMenu();
     console.log(option);
     
     switch(option){
        case 1:
            //mostrar mensaje
            lugar = await leerInput("Ciudad:");

            await busquedas.ciudad(lugar);

            const lugares = await busquedas.ciudad(lugar);
            const listado = await listarLugares(lugares);
            console.log(listado);
            //buscar los lugares
            //seleccionar el lugar
            //clima
            //mostrar resultados
            // Make a request for a user with a given ID
            await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Santa%20Rosa.json?bbox=-180%2C-90%2C180%2C90&limit=5&proximity=ip&access_token=pk.eyJ1Ijoic2FuZWkxNTA5IiwiYSI6ImNsaXVtOThhcTFkbWozanF2aHEwdmhzbGEifQ.D8PgpMCYgMg_R0A--DBNNw')
            .then(function (response) {
            // handle success
            console.log(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed
            });

            console.log("\nInformación de la ciudad\n")
            console.log("Latitud: 120");
            console.log("Longitud: 100");
            console.log("Temperatura: 20 C");
            console.log("Mínima: 2 C");
            console.log("Máxima: 150 C");

            break;
        case 2:
            //mostrar mensaje
            console.log('Historial de ciudades buscadas: ');
            console.log(this.historial);
            break;
        case 0:
            //mostrar mensaje
            console.log('Ciudad seleccionada');
            break;
    }

        await pausa();
    }while(option !== 0);
}

main();