const myHeaders = new Headers();
myHeaders.append("Authorization", "<token>");
const API_KEY = '<key>';
const IMS_TOKEN = '<ims_token>'

const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
};

const url = `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}&ims_token=${IMS_TOKEN}&productIds=<string>`;

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));