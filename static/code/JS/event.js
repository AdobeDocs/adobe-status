const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
const API_KEY = '<key>';
myHeaders.append("x-api-key", API_KEY);
myHeaders.append("x-user-token", "<user_token>");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/events?cloudIds=<string>&environmentIds=<string>&from=<date>&offeringIds=<string>&productIds=<string>&regionIds=<string>&search=<string>&serviceIds=<string>&to=<date>&updateStart=<epoch>&updateEnd=<epoch>&myEvents=<boolean>`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
