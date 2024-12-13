const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
const API_KEY = '<key>';
const IMS_TOKEN = '<ims_token>'

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}&ims_token=${IMS_TOKEN}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));