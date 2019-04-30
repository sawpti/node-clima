const axios = require('axios');
const coord = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv

const getInfo = async(direccion) => {
    console.log(direccion);
    try {
        const lugar = await coord.getLugarLatLng(direccion);
        const cli = await clima.getClima(lugar.lat, lugar.lng);
        return `El clima de ${lugar.direccion} es\n  Tº Actual : ${cli.t} \n Clima: ${cli.c}`
    } catch (e) {
        return "No se pudo dterminar el clima en " + direccion + "ERROR" + e;
    }


}

/*coord.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err));*/

/*clima.getClima(40.750000, 40.750000)
    .then(console.log)
    .catch(e => console.log(e))
    .catch(console.log);*/
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);