const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
const API_KEY = '<key>';

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/events/announcements?api_key=<key>&cloudIds=<string>&from=<date>&productIds=<string>&search=<string>&to=<date>&locale=<string>`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));