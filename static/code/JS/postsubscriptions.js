const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
myHeaders.append("Content-Type", "application/json");
const API_KEY = '<key>';
const IMS_TOKEN = '<ims_token>'

const rawJsonBody = '<json_payload>';
const url = `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}&ims_token=${IMS_TOKEN}`;

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: rawJsonBody,
    redirect: 'follow'
};

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));