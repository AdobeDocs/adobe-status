const request = require('request');

const API_KEY = '<key>';
const url = `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}`;

const postData = '<json_payload>';

const options = {
    'method': 'POST',
    'url': url,
    'headers': {
        'Authorization': 'Bearer <token>',
        'x-user-token': '<user_token>',
        'Content-Type': 'application/json'
    },
    body: postData
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body); // Log the response body
});