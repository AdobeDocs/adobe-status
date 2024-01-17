const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/events/announcements?api_key=${API_KEY}&cloudIds=<string>&from=<date>&productIds=<string>&search=<string>&to=<date>&locale=<string>`,
    'headers': {
        'Authorization': 'Bearer <token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});