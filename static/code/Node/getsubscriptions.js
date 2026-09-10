const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/subscriptions?productNames=<string>`,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-api-key': API_KEY,
        'x-user-token': '<user_token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
