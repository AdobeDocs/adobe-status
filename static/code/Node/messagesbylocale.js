const request = require('request');
const API_KEY = '<key>';
const LOCALE = 'es'; // update needed locale 

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/messages/${LOCALE}`,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-api-key': API_KEY
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
