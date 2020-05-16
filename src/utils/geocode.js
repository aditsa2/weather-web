const request = require('request');
const geacode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWRpdHNhMiIsImEiOiJja2E4ZmIya2EwODBnMzJzOTI1cWRvdzA3In0.7K8JcNAokyrEe87fFsgq8g&limit=1`;
    request({ url, json: true }, (error, response) => {
        if (error)
            callback('Unable to conncect to location services!', undefined);
        else if (response.body.features.length === 0)
            callback('Unable to find location. try another search.', undefined);
        else {
            const lat = response.body.features[0].center[1];
            const long = response.body.features[0].center[0];
            // console.log('location: '+response.body.features[0].place_name);
            callback(undefined,{lat,long,location:response.body.features[0].place_name});
        }

    });
}
module.exports=geacode;
