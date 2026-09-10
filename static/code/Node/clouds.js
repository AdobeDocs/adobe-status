const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/clouds?cloudId=<string>`,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-api-key': API_KEY
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
