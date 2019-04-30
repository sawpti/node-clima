const axios = require('axios');
const obtenerCoordenadas = (ciudad) => {
    ciudad = encodeURI(ciudad);

    try {

        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
            //timeout: 1000,
            headers: { 'X-RapidAPI-Key': '1a16921ac4mshaabc5427ba15173p14c2ccjsna2bf88b03d3d' }
        });
        const encodeUlr = encodeURI(ciudad);
        console.log(ciudad)
        instance.get()
            .then(resp => {
                console.log(resp.data.Results[0]);
                return resp.data.Results[0];
            })

    } catch (error) {
        console.log('Error', err);
    }

}

const getLugarLatLng = async(direccion) => {
    const encodeUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        //timeout: 1000,
        headers: { 'X-RapidAPI-Key': '1a16921ac4mshaabc5427ba15173p14c2ccjsna2bf88b03d3d' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dire = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion: dire,
        lat: lat,
        lng: lon
    }

}


module.exports = {
    obtenerCoordenadas,
    getLugarLatLng
}