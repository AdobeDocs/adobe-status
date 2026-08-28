const request = require('request');

const API_KEY = '<key>';
const url = `https://status.adobe.io/api/v1/event-subscriptions?api_key=${API_KEY}&eventId=<string>&productId=<string>`;

const options = {
    'method': 'DELETE',
    'url': url,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-user-token': '<user_token>'
    }
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body); // Log the response body
});