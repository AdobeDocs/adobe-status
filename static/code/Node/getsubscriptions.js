const request = require('request');
const API_KEY = '<key>';
const IMS_TOKEN = '<ims_token>';

const options = {
    'method': 'GET',
    'url': `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}&ims_token=${IMS_TOKEN}&productNames=<string>`,
    'headers': {
        'Authorization': 'Bearer <token>'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
