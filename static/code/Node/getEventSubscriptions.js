const request = require('request');
const API_KEY = '<key>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/event-subscriptions?api_key=${API_KEY}`,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-user-token': '<user_token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
