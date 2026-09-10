const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/events?cloudIds=<string>&environmentIds=<string>&from=<date>&offeringIds=<string>&productIds=<string>&regionIds=<string>&search=<string>&serviceIds=<string>&to=<date>`,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-api-key': API_KEY
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
