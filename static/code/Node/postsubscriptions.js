const request = require('request');

const API_KEY = '<key>';
const IMS_TOKEN = '<ims_token>';
const url = `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}&ims_token=${IMS_TOKEN}`;

const postData = '<json_payload>';

const options = {
    'method': 'POST',
    'url': url,
    'headers': {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'application/json'
    },
    body: postData
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body); // Log the response body
});