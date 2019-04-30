/** GET /data/2.5/weather?
 * lat=35&amp;
 * lon=139&amp;
 * appid=b6907d289e10d714a6e88b30761fae22 HTTP/1.1
Host: samples.openweathermap.org
Cache-Control: no-cache
Postman-Token: 3ba9c8e5-1d38-236a-aa67-acf82ddfafa7
*/
const axios = require('axios');
const getClima = async(lat, lng) => {
    let urlapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a45556465ad72ffacad1d99450050d64&units=metric`
    const resp = await axios.get(urlapi);
    const t = resp.data.main.temp;
    const c = resp.data.weather[0].description;
    return {
        t,
        c
    };
}
module.exports = {
    getClima
}