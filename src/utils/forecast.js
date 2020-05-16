const request = require('request');
const forecast = (lat, long, callback) => {
    const key = 'access_key=fcb2fd02cf8ce888fa1c37cd4d89a1de';
    const baseUrl = 'http://api.weatherstack.com/current?';
    const endpoint = `${baseUrl}${key}&query=${lat},${long}`;
    request({ url: endpoint, json: true }, (error, response) => {
        if (error)
            callback('Unable to conncect to location services!');
        else if (response.body.error)
            callback('Dont recognize this place');
        else
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees")
    });
}
module.exports = forecast;